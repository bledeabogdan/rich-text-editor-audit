<script lang="ts">
  import { EditorState } from "prosemirror-state";
  import Toolbar from "./Toolbar.svelte";
  import { EditorView } from "prosemirror-view";
  import { onMount } from "svelte";
  import { plugins } from "../prosemirror/plugins";
  import { schema } from "../prosemirror/schema";
  import { toggleMark } from "prosemirror-commands";
  import { wrapInList } from "prosemirror-schema-list";

  let editorRef: HTMLDivElement = undefined;

  const state = EditorState.create({ schema, plugins });
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
    const { url: href, title } = event.detail;

    toggleMark(schema.marks["link"], { href, title })(
      view.state,
      view.dispatch
    );
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
</script>

<Toolbar
  on:bold={handleBold}
  on:italic={handleItalic}
  on:bulleted-list={handleBulletedList}
  on:color={handleColorSelect}
  on:link={handleAddLink}
/>
<div bind:this={editorRef} id="editor" />

<style>
  div {
    height: 90vh;
    width: 100%;
  }
</style>
