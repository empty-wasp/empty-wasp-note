import { defineUserConfig, defaultTheme } from "vuepress";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { navbar } from "../.vuepress/public/config/navbar";


export default defineUserConfig({
  lang: "zh-CN",
  title: "虚蜂文档",
  description: "记录学习历程",
  port: 3213,
  theme: defaultTheme({
    navbar: navbar,
    // sidebar: false,
  }),
  plugins: [backToTopPlugin()],
});
