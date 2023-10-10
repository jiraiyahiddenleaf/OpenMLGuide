import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/static/img/logo1.png" width={60} />
      <span style={{ marginLeft: ".6em" }}>
        <img src="/static/img/nameLogo.png" width={120} />
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
        <link rel="icon" href="/static/img/favicon.png" />
      </>
    );
  },
  project: {
    link: "https://github.com/AIPortalGun/AI-Portal-Gun",
  },
  chat: {
    link: "https://discord.gg/FqyQECEsCd",
  },
  docsRepositoryBase: "https://github.com/AIPortalGun/AI-Portal-Gun/tree/main/",
  footer: {
    text: null,
    component: null,
  },
  feedback: {
    useLink: () => "https://github.com/AIPortalGun/AI-Portal-Gun/issues/new",
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
    text: (
      <>
        <span style={{ display: "flex", gap: "10px" }}>
          <img src="/static/img/edit_icon.png" width={18} />
          <span> Edit this Page </span>
        </span>
      </>
    ),
  },
  search: {
    placeholder: "Search...",
  },
  sidebar: {
    toggleButton: true,
  },
  gitTimestamp: null,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | AI Portal Gun",
      };
    }
  },
  primaryHue: 100,
  primarySaturation: 60,
  toc: {
    backToTop: true,
  },
  themeSwitch: {
    useOptions() {
      return {
        light: "Light",
        dark: "Dark",
        system: "System",
      };
    },
  },
};

export default config;
