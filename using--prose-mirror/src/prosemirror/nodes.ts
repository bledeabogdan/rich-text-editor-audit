import { bulletList, listItem } from "prosemirror-schema-list";

const listGroup = "block";

const listNodes = {
  bullet_list: {
    ...bulletList,
    content: "list_item+",
    group: listGroup,
  },
  list_item: {
    ...listItem,
    content: "paragraph block*",
  },
};

const pDOM = ["p", 0];
const blockquoteDOM = ["blockquote", 0];
const hrDOM = ["hr"];
const preDOM = ["pre", ["code", 0]];
const brDOM = ["br"];

export const nodes = {
  doc: {
    content: "block+",
  },

  paragraph: {
    attrs: { alignment: { default: null } },
    content: "inline*",
    group: "block",
    parseDOM: [
      {
        tag: "p",
      },
    ],
    toDOM() {
      return pDOM;
    },
  },

  blockquote: {
    content: "block+",
    group: "block",
    defining: true,
    parseDOM: [{ tag: "blockquote" }],
    toDOM() {
      return blockquoteDOM;
    },
  },

  text: {
    group: "inline",
  },

  hard_break: {
    inline: true,
    group: "inline",
    selectable: false,
    parseDOM: [{ tag: "br" }],
    toDOM() {
      return brDOM;
    },
  },
  ...listNodes,
};
