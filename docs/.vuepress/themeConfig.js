/*
* @Author: Just be free
* @Date:   2020-07-10 14:04:39
* @Last Modified by:   Just be free
 * @Last Modified time: 2022-06-17 15:19:31
* @E-mail: justbefree@126.com
*/
module.exports = {
  nav: [
    { text: "Home", link: "/" },
    {
      text: "Trending",
      items: [
        {
          text: "Module federation",
          link: "http://lizhuang.xyz/mfe/"
        },
        {
          text: "vueggy（基于Vue3+TypeScript组件库）",
          link: "http://vueggy.dullar.xyz/#/"
        }
      ]
    },
    {
      text: "Components",
      items: [
        {
          text: "@dullar/earth",
          link: "/earth/"
        },
        {
          text: "@dullar/mercury",
          link: "/mercury/"
        },
        {
          text: "@dullar/mars",
          link: "/mars/"
        }
      ]
    },
    { text: "Map", link: "/map/" },
    { text: "BEM", link: "/bem/" },
    { text: "Cli", link: "/cli/" }
  ],
  sidebar: {
    "/earth/": [
      ["install.md", "Installation"],
      {
        title: "Basic components",
        collapsable: false,
        children: [
          ["toast.md", "toast"],
          ["indicator.md", "indicator"],
          ["spin.md", "spin"],
          ["iconfont.md", "iconfont"],
          ["checkbox.md", "checkbox"],
          ["radiobox.md", "radiobox"],
          ["calendar.md", "calendar"],
          ["popup.md", "popup"],
          ["button.md", "button"],
          ["flex.md", "flex"],
          ["action-sheet.md", "action-sheet"],
          ["field.md", "field"],
          ["layout.md", "layout"],
          ["city-picker.md", "city-picker"],
          ["sticky.md", "sticky"],
          ["dialog.md", "dialog"],
          ["picky-stepper.md", "picky-stepper"],
          ["dropdown.md", "dropdown"],
          ["dropdown-menu.md", "dropdown-menu"],
          ["picker.md", "picker"],
          ["swipe.md", "swipe"],
          ["tabs.md", "tabs"],
          ["slider.md", "slider"],
          ["submit-action.md", "submit-action"],
          ["pull-refresh.md", "pull-refresh"],
          ["date-picker.md", "date-picker"],
          ["counter.md", "counter"],
          ["skeleton.md", "skeleton"],
          ["animation-list.md", "animation-list"],
          ["dragable.md", "dragable"],
          ["magic-layer.md", "magic-layer"],
          ["textarea.md", "textarea"],
          ["drawer.md", "drawer"]
        ]
      }
    ],
    "/mercury/": [
      ["install.md", "Installation"],
      {
        title: "Basic components",
        collapsable: false,
        children: [
          ["toast.md", "toast"],
          ["indicator.md", "indicator"],
          ["spin.md", "spin"],
          ["iconfont.md", "iconfont"],
          ["checkbox.md", "checkbox"],
          ["radiobox.md", "radiobox"],
          ["calendar.md", "calendar"],
          ["popup.md", "popup"],
          ["button.md", "button"],
          ["flex.md", "flex"],
          ["field.md", "field"],
          ["layout.md", "layout"],
          ["sticky.md", "sticky"],
          ["dialog.md", "dialog"],
          ["swipe.md", "swipe"],
          ["tabs.md", "tabs"],
          ["pull-refresh.md", "pull-refresh"],
          ["counter.md", "counter"],
          ["skeleton.md", "skeleton"],
          ["animation-list.md", "animation-list"],
          ["category.md", "category"],
          ["magnifier.md", "magnifier"],
          ["modal.md", "modal"],
          ["cascader.md", "cascader"],
          ["table.md", "table"],
          ["shipping-address.md", "shipping-address"],
          ["elastic-serach.md", "elastic-serach"],
          ["category-mobile.md", "category-mobile"],
          ["address.md", "address"],
          ["badge.md", "badge"],
          ["tooltip.md", "tooltip"],
          ["input.md", "input"],
          ["tree.md", "tree"],
          ["slide.md", "slide"],
          ["image.md", "image"],
          ["form.md", "form"],
          ["picker.md", "picker"],
          ["date-picker.md", "date-picker"],
          ["switch.md", "switch"],
          ["select.md", "select"]
        ]
      }
    ],
    "/bem/": [],
    "/map/": [],
    "/cli/": [
      ["structure.md", "Directory structure"],
      {
        title: "Design principle",
        collapsable: false,
        children: [
          ["before-start.md", "Before start"],
          ["component.md", "Component"],
          ["router.md", "Router"],
          ["i18n.md", "I18n"],
          ["store.md", "Store"],
          ["extend.md", "二开相关"],
          ["diff.md", "如何给代码增量"],
          ["settings.md", "环境变量配置"],
          ["export-application.md", "Application"],
          ["vue-class-component.md", "Vue class component"]
        ]
      },
      ["vue-property-decorator.md", "Vue property decorator"]
    ],
    "/mars/": [
      ["install.md", "Installation"],
      {
        title: "Basic components",
        collapsable: false,
        children: [
          ["notification.md", "notification"],
          ["field.md", "field"],
          ["select.md", "select"],
          ["scrollbar.md", "scrollbar"],
          ["dropdown.md", "dropdown"],
          ["tag.md", "tag"],
          ["icon.md", "icon"],
          ["popconfirm.md", "popconfirm"],
          ["messageBox.md", "messageBox"],
          ["message.md", "message"],
          ["flex.md", "flex"],
          ["indicator.md", "indicator"],
          ["spin.md", "spin"],
          ["iconfont.md", "iconfont"],
          ["checkbox.md", "checkbox"],
          ["radiobox.md", "radiobox"],
          ["datePicker.md", "datePicker"],
          ["popover.md", "popover"],
          ["button.md", "button"],
          ["cityPicker.md", "cityPicker"],
          ["dialog.md", "dialog"]
        ]
      }
    ]
  },
  lastUpdated: "Last Updated",
  // Assumes GitHub. Can also be a full GitLab url.
  repo: "dullarjs/wiki",
  // Customising the header label
  // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
  repoLabel: 'Contribute!',

  // Optional options for generating "Edit this page" link

  // if your docs are in a different repo from your main project:
  docsRepo: "dullarjs/wiki",
  // if your docs are not at the root of the repo:
  docsDir: "docs",
  docsBranch: "main",
  // defaults to false, set to true to enable
  editLinks: true,
  // custom text for edit link. Defaults to "Edit this page"
  editLinkText: "Help us improve this page!"
};