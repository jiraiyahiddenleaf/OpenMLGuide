import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/static/img/logo1.png" width={65} />
      <span style={{ marginLeft: ".6em", fontWeight: 500 }}>
        {" "}
        AI Portal Gun{" "}
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
        <link
          rel="icon"
          href="https://www.seekpng.com/png/full/4-44144_rick-and-morty-portal-png.png "
        />
      </>
    );
  },
  project: {
    link: "https://github.com/OpenML-Guide/OpenMLGuide",
  },
  chat: {
    link: "https://discord.gg/FqyQECEsCd",
  },
  docsRepositoryBase: "https://github.com/OpenML-Guide/OpenMLGuide",
  footer: {
    text: null,
    component: null,
  },
  feedback: {
    useLink: () => "https://github.com/OpenML-Guide/OpenMLGuide/issues/new",
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
  primaryHue: 100,
  primarySaturation: 60,
  toc: {
    backToTop: true,
  },
};

export default config;
