import * as Vue3 from "vue";
import { createI18n } from "vue-i18n";
import { initI18n, t } from "@opentiny/vue-locale";
import router from "./router";
import App from "./App.vue";
import { registerMcpConfig } from "@opentiny/vue-common";
import {
  createMcpTools,
  getTinyVueMcpConfig,
  zhCN,
  enUS,
} from "@opentiny/tiny-vue-mcp";

const app = Vue3.createApp(App);

const mode = location.pathname.split("/")[1] || "pc";

app.config.globalProperties.tiny_mode = { value: mode };
app.config.globalProperties.isPcMode = mode === "pc";
app.config.globalProperties.isMobileMode = mode === "mobile";

// 注入全局的saas主题变量
app.config.globalProperties.tiny_theme = {
  value: import.meta.env.VITE_TINY_THEME,
};

app.use(
  initI18n({
    createI18n,
    i18n: {},
    messages: {
      zhCN,
      enUS,
    },
  } as any)
);

// 注册TinyVue组件mcp配置
registerMcpConfig(getTinyVueMcpConfig({ t }), createMcpTools);

app.use(router);
app.mount("#app");
