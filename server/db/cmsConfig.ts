export const cmsTables = [
  {
    id: "static_content",
    name: "Static Content",
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
};

export const graphConfig = {};

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
  "SEO page - Index": {
    title: "text",
    description: "textarea",
    ogTitle: "text",
    ogDescription: "textarea",
    ogImage: "fileImg",
    twitterTitle: "text",
    twitterDescription: "textarea",
    twitterImage: "fileImg",
  },
};
