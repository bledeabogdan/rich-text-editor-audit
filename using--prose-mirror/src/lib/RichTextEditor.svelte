<script lang="ts">
  import { Schema } from "prosemirror-model";
  import { EditorState } from "prosemirror-state";
  import { EditorView } from "prosemirror-view";
  import { onMount } from "svelte";

  let ref: HTMLDivElement = undefined;

  const schema = new Schema({
    nodes: {
      doc: { content: "block+" },
      paragraph: { group: "block", content: "text*", marks: "_" },
      heading: { group: "block", content: "text*", marks: "" },
      text: { inline: true },
    },
    marks: {
      strong: {},
      em: {},
    },
  });

  let state = EditorState.create({ schema });
  let view: EditorView;

  onMount(() => {
    if (ref) {
      view = new EditorView(ref, {
        state,
        dispatchTransaction(transaction) {
          console.log(
            "Document size went from",
            transaction.before.content.size,
            "to",
            transaction.doc.content.size
          );
          let newState = view.state.apply(transaction);
          view.updateState(newState);
        },
      });
    }
  });
</script>

<div bind:this={ref}>Text editor</div>

<style>
  div {
    height: 100vh;
    width: 100%;
  }
</style>
