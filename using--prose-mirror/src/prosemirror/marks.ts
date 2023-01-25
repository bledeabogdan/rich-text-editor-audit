export let fgColor = "#000000";

const color = {
  attrs: {
    color: { default: fgColor },
  },
  parseDOM: [
    {
      tag: "span[data-cecolor]",
      getAttrs(dom) {
        return dom.hasAttribute("data-cecolor")
          ? { color: dom.getAttribute("data-cecolor").replace(/\"/g, "") }
          : null;
      },
    },
  ],
  toDOM: (node) => [
    "span",
    {
      style: `color: ${node.attrs.color.replace(/\"/g, "")}`,
      "data-cecolor": node.attrs.color.replace(/\"/g, ""),
    },
    0,
  ],
};

const emDOM = ["em", 0];
const strongDOM = ["strong", 0];

export const marksBasic = {
  link: {
    attrs: {
      href: {},
    },
    inclusive: false,
    editable: false,
    parseDOM: [
      {
        tag: "a[href]",
        getAttrs(dom) {
          return {
            href: dom.getAttribute("href"),
          };
        },
      },
    ],
    toDOM(node) {
      const { href } = node.attrs;
      return ["a", { href }, 0];
    },
  },

  em: {
    parseDOM: [{ tag: "i" }, { tag: "em" }, { style: "font-style=italic" }],
    toDOM() {
      return emDOM;
    },
  },

  strong: {
    parseDOM: [
      { tag: "strong" },
      {
        tag: "b",
        getAttrs: (node) => node.style.fontWeight !== "normal" && null,
      },
      {
        style: "font-weight",
        getAttrs: (value) => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null,
      },
    ],
    toDOM() {
      return strongDOM;
    },
  },
};

export const marks = {
  ...marksBasic,
  color,
};
