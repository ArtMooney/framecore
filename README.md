# FrameCore website

Development and deploy scripts in [package.json](./package.json).

## CMS

The admin page, `/cms/*` API routes and CMS styles come from
`framecore-cms`, pinned to GitHub tag `0.3.3`. Run `npm install` to install it;
no sibling checkout or separate CMS build is needed for deployment.

Site-specific tables remain in `server/db/schema.ts`, with migrations in this
repository. `server/cms.config.ts` exports the schema and defines editable
tables, fields and content templates. This integration needs no database migration.
The existing public `/cms/static` API and Basic-auth environment variables are
unchanged. The CMS uses the existing Cloudflare `DB` (D1) and `FILES` (R2) bindings.

The font variables in `app/assets/css/main.css` share the site's heading and body
fonts with the CMS. Keep them when changing the site's Tailwind styles.

### Admin sessions and email

Set `NUXT_CMS_SESSION_PASSWORD` to a random server-only secret of at least
32 characters in the ignored local `.env`. Generate it with `openssl rand -hex 32`.
Before deploying, configure separate secrets in Cloudflare's production and
preview runtime environments. Keep each secret stable across deployments;
changing it signs administrators out. Never use a `NUXT_PUBLIC_` variable for it.
Existing administrators must log in again after the upgrade, and old password
reset links must be requested again. A site middleware removes the old
`loginStore` cookie, which stored administrator credentials, on the next request.

Password emails continue to use `NUXT_MAILGUN_API_KEY` and `NUXT_EMAIL_FROM`.
The Mailgun domain defaults to `mg.framecore.se`, preserving the previous sender
configuration. Override it with `NUXT_CMS_MAILGUN_DOMAIN` if needed;
`NUXT_CMS_MAILGUN_BASE_URL` optionally overrides `https://api.eu.mailgun.net`.
See `.env.example` for the CMS environment settings.

### Develop or update the shared CMS

To develop the CMS locally, keep `framecore-cms` next to this repository and
install its dependencies there. Then run `npm install ../framecore-cms` in this
site and restart `npm run dev`. Shared source and style changes are processed
by the site's dev server.

Restore the released dependency with
`npm install "github:ArtMooney/framecore-cms#0.3.3"` and restart the dev server.
To update the deployed CMS, install a new pushed tag and commit both
`package.json` and `package-lock.json`.
