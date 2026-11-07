import { readFile, writeFile } from "node:fs/promises";

// Shaders 4.0.7 bundles TypeGPU. Its WGSL resolver registers builtins but
// misses varying fields such as in.uv, producing a spurious external-omitted warning.
// Preserve those fields as input-struct references without changing generated WGSL.
const sourcePath = new URL(
  "./std-DL2iZlL6.js",
  import.meta.resolve("shaders/core"),
);
const original =
  'this.setExternals("args", { in: Object.fromEntries(entryInput.positionalArgs.map((a) => [a.schemaKey, new ResolvableString(a.schemaKey)])) });';
const replacement = `this.setExternals("args", { in: Object.fromEntries([
                        ...Object.keys(entryInput.dataSchema?.propTypes ?? {}).map((key) => [key, new ResolvableString(\`in.\${key}\`)]),
                        ...entryInput.positionalArgs.map((a) => [a.schemaKey, new ResolvableString(a.schemaKey)])
                    ]) });`;

const source = await readFile(sourcePath, "utf8");
if (!source.includes(replacement)) {
  if (
    !source.includes(original) ||
    source.indexOf(original) !== source.lastIndexOf(original)
  ) {
    throw new Error(
      "Shader patch no longer matches. Review it before upgrading shaders.",
    );
  }
  await writeFile(sourcePath, source.replace(original, replacement));
}
