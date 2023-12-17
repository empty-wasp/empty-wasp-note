export const navbar = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "客户端笔记",
    // link: "/client",
    children: [
      {
        text: "Vue",
        link: "/client-note/vue.md",
      },
      {
        text: "React",
        link: "/client-note/react.md",
      },
    ],
  },
  {
    text: "服务端笔记",
    link: "/server",
  },
];
