import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/static/img/logo.png" width={40} />
      <span style={{ marginLeft: ".4em", fontWeight: 500 }}>
        {" "}
        OpenML Guide{" "}
      </span>
    </>
  ),
  i18n: [
    { locale: "en", text: "English" },
    { locale: "zh", text: "中文" },
    { locale: "ru", text: "Русский" },
    { locale: "jp", text: "日本語" },
    { locale: "tr", text: "Türkçe" },
    { locale: "kr", text: "한국어" },
    { locale: "pt", text: "Português" },
    { locale: "es", text: "Español" },
  ],
  head: function UseHead() {
    const { title } = useConfig();
    return (
      <>
        <link rel="icon" href="/favicon.png" />
      </>
    );
  },
  project: {
    link: "https://github.com/severus27/OpenMLGuide",
  },
  chat: {
    link: "https://discord.gg/vp4E46d3jB",
  },
  docsRepositoryBase: "https://github.com/severus27/OpenMLGuide",
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
  search: {
    placeholder: "Search",
  },
  sidebar: {
    toggleButton: true,
  },
  gitTimestamp: null,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | OpenML Guide",
      };
    }
  },
  primaryHue: 180,
  primarySaturation: 60,
  toc: {
    backToTop: true,
  },
};

export default config;
