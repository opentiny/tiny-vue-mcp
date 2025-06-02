import { defineConfig } from "vitepress";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";
import pkg from "@opentiny/tiny-vue-mcp/package.json" assert { type: "json" };

const { version } = pkg;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TinyVueMCP",
  description: "TinyVueMCP",
  srcDir: "src",
  outDir: "dist",
  base: "/tiny-vue-mcp/",
  vite: {
    server: { open: true },
  },
  markdown: {
    config: (md) => {
      md.use(vitepressDemoPlugin);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    siteTitle: "TinyVueMCP",
    nav: [
      { text: "指南", link: "/guide/installation", activeMatch: "/guide/" },
      { text: "组件", link: "/components/grid", activeMatch: "/components/" },
      { text: "演示", link: "/examples/assistant", activeMatch: "/examples/" },
      {
        text: version,
        link: "/releases/update-log",
        activeMatch: "/releases/",
      },
    ],
    sidebar: {
      "/components/": [
        {
          text: "组件",
          base: "/components/",
          items: [{ text: "表格智能化组件", link: "grid" }],
        },
      ],
    },
    search: {
      provider: "local",
    },
  },
});
