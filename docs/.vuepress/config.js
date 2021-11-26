module.exports = {
  title: "Hello Joel",
  description: "Just playing around",
  port: "8099",
  base: "/joel-blog/",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "引导", link: "/guide/" },
      {
        text: "前端基础",
        ariaLabel: "Language Menu",
        items: [
          { text: "html", link: "/html/html总结.html" },
          { text: "css", link: "/css/css总结.html" },
        ],
      },
    ],
  },
};
