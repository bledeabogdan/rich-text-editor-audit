import { Schema } from "prosemirror-model";

import { nodes } from "./nodes.js";
import { marks } from "./marks.js";

//@ts-ignore
export const schema = new Schema({ nodes: nodes, marks: marks });
