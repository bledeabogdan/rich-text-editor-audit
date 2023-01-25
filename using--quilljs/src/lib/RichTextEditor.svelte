<script>
  import { onMount } from "svelte";
  import { bindings } from "./quill/bindings";
  import { toolbar } from "./quill/toolbar";
  import { sample } from "./sample";
  import Toolbar from "./Toolbar.svelte";

  let editor;

  let quill;

  onMount(async () => {
    const { default: Quill } = await import("quill");

    quill = new Quill(editor, {
      modules: {
        toolbar,
        keyboard: {
          bindings,
        },
      },
    });

    quill.setContents(sample);
  });

  function handleSave() {
    console.log(quill.getContents());
  }
</script>

<Toolbar on:save={handleSave} />

<div bind:this={editor} id="editor" />

<style>
  div#editor {
    box-sizing: border-box;
    margin-top: 50px;
    width: 100%;
  }
</style>
