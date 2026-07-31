export const cmsTables = [
  {
    id: "static_content",
    name: "Static Content",
    viewMode: "list",
    backupRef: null,
  },
  {
    id: "projects",
    name: "Projects",
    viewMode: "list",
    backupRef: null,
  },
];

export const fieldsConfig = {
  static_content: {
    id: { type: "integer", label: "", required: true, hidden: true },
    title: { type: "text", label: "Title", required: true, hidden: false },
    content: {
      type: "json",
      label: "Content",
      required: false,
      hidden: false,
    },
    sortOrder: { type: "integer", label: "", required: true, hidden: true },
    createdAt: { type: "date", label: "", required: true, hidden: true },
    updatedAt: { type: "date", label: "", required: true, hidden: true },
  },
  projects: {
    id: { type: "integer", label: "", required: true, hidden: true },
    title: { type: "text", label: "Title", required: true, hidden: false },
    description: {
      type: "textarea",
      label: "Description",
      required: false,
      hidden: false,
    },
    image: { type: "fileImg", label: "Image", required: false, hidden: false },
    url: { type: "text", label: "Url", required: false, hidden: false },
    sortOrder: { type: "integer", label: "", required: true, hidden: true },
    createdAt: { type: "date", label: "", required: true, hidden: true },
    updatedAt: { type: "date", label: "", required: true, hidden: true },
  },
};

export const graphConfig = {};

const getSeoSchema = () => ({
  title: "text",
  description: "textarea",
  ogTitle: "text",
  ogDescription: "textarea",
  ogImage: "fileImg",
  twitterTitle: "text",
  twitterDescription: "textarea",
  twitterImage: "fileImg",
});

export const staticContentTypes = {
  "page - Index": {
    header: {
      title: "textarea",
      subtitle: "text",
    },
    contact: {
      text: "textarea",
    },
  },
  "page - Projects": {
    header: {
      title: "text",
      subtitle: "textarea",
    },
    back: {
      text: "text",
    },
  },
  "SEO page - Index": getSeoSchema(),
  "SEO page - Projects": getSeoSchema(),
};
