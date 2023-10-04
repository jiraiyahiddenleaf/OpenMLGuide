import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/static/img/logo.png" width={40} />
      <span style={{ marginLeft: ".4em", fontWeight: 500 }}> OpenMLGuide </span>
    </>
  ),
  project: {
    link: "https://github.com/jiraiyahiddenleaf/OpenMLGuide",
  },
  chat: {
    link: "https://discord.gg/vp4E46d3jB",
  },
  docsRepositoryBase: "https://github.com/jiraiyahiddenleaf/OpenMLGuide",
  footer: {
    text: null,
    component: null,
  },
  feedback: {
    useLink: () => "https://github.com/severus27/OpenMLGuide/issues/new",
    content: (
      <>
        <span style={{ display: "flex", gap: "10px" }}>
          <img src="/static/img/github.png" width={18} />
          <span> Report an issue </span>
        </span>
      </>
    ),
  },
  editLink: {
    text: null,
  },
  gitTimestamp: null,
};

export default config;
