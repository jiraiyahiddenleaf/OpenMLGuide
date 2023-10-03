import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/static/img/logo.png" width={50} />
      <span style={{ marginLeft: ".4em", fontWeight: 500 }}> OpenMLGuide </span>
    </>
  ),
  project: {
    link: "https://github.com/jiraiyahiddenleaf/OpenMLGuide",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/jiraiyahiddenleaf/OpenMLGuide",
  footer: {
    text: null,
    component: null,
  },
  feedback: {
    content: "Report an issue",
    labels: "this",
  },
  editLink: {
    text: "Report an issue",
  },
  gitTimestamp: null,
};

export default config;
