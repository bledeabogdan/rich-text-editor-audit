import { keymap as createKeymap } from "prosemirror-keymap";
import { wrapInList } from "prosemirror-schema-list";
import {
  baseKeymap,
  toggleMark,
  wrapIn,
  chainCommands,
  exitCode,
  selectAll,
} from "prosemirror-commands";
import { schema } from "./schema.js";

const insertBreak = (state, dispatch) => {
  const br = schema.nodes.hard_break.create();
  dispatch(state.tr.replaceSelectionWith(br).scrollIntoView());
  return true;
};

const keymap = {
  "Ctrl-l": wrapInList(schema.nodes.bullet_list),
  "Ctrl-b": toggleMark(schema.marks.strong),
  "Ctrl-i": toggleMark(schema.marks.em),
  "Ctrl-Shift-.": wrapIn(schema.nodes.blockquote),
  "Shift-Enter": chainCommands(exitCode, insertBreak),
  "Ctrl-Enter": chainCommands(exitCode, insertBreak),
  "Ctrl-A": selectAll,
};

Object.keys(baseKeymap).forEach((key) => {
  if (keymap[key]) {
    keymap[key] = chainCommands(keymap[key], baseKeymap[key]);
  } else {
    keymap[key] = baseKeymap[key];
  }
});

export const keys = createKeymap(keymap);
