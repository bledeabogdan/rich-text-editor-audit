<script lang="ts">
  import { EditorState } from "prosemirror-state";
  import Toolbar from "./Toolbar.svelte";
  import { EditorView } from "prosemirror-view";
  import { Node } from "prosemirror-model";
  import { onMount } from "svelte";
  import { plugins } from "../prosemirror/plugins";
  import { schema } from "../prosemirror/schema";
  import { toggleMark, wrapIn } from "prosemirror-commands";
  import { wrapInList } from "prosemirror-schema-list";
  import { sample } from "./sample";

  let editorRef: HTMLDivElement = undefined;
  const state = EditorState.create({
    doc: Node.fromJSON(schema, sample),
    schema,
    plugins,
  });
  let view: EditorView;

  function handleBold() {
    toggleMark(schema.marks["strong"])(view.state, view.dispatch);
  }

  function handleItalic() {
    toggleMark(schema.marks["em"])(view.state, view.dispatch);
  }

  function handleBulletedList() {
    wrapInList(schema.nodes.bullet_list)(view.state, view.dispatch);
  }

  function handleAddLink(event) {
    const { href } = event.detail;

    toggleMark(schema.marks["link"], { href })(view.state, view.dispatch);
  }

  function handleQuote() {
    wrapIn(schema.nodes.blockquote)(view.state, view.dispatch);
  }

  function handleColorSelect() {
    toggleMark(schema.marks["color"], { color: "red" })(
      view.state,
      view.dispatch
    );
  }

  onMount(() => {
    view = new EditorView(document.querySelector("#editor"), {
      state,
      dispatchTransaction(transaction) {
        let newState = view.state.apply(transaction);

        view.updateState(newState);

        if (editorRef) {
          editorRef.focus();
        }
      },
    });
  });

  function handleCopy() {
    if (!view.state.selection.empty) {
      const selection = view.state.selection;
      const selectionText = view.state.selection
        .content()
        .content.textBetween(selection.from, selection.to);

      navigator.clipboard.writeText(selectionText);
    }
  }

  function handleCut() {
    if (!view.state.selection.empty) {
      const selection = view.state.selection;
      const selectionText = view.state.selection
        .content()
        .content.textBetween(selection.from, selection.to);

      navigator.clipboard.writeText(selectionText);

      view.dispatch(view.state.tr.deleteSelection());
    }
  }
</script>

<Toolbar
  on:bold={handleBold}
  on:italic={handleItalic}
  on:bulleted-list={handleBulletedList}
  on:quote={handleQuote}
  on:color={handleColorSelect}
  on:link={handleAddLink}
  on:copy={handleCopy}
  on:cut={handleCut}
/>
<div bind:this={editorRef} id="editor" />

<style>
  div#editor {
    box-sizing: border-box;
    margin-top: 50px;
    width: 100%;
  }
</style>
