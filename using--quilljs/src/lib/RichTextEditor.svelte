<script>
  import { onMount } from "svelte";
  import { toolbarOptions } from "./quill/toolbar-options";
  import Toolbar from "./Toolbar.svelte";

  let editor;

  let quill;

  onMount(async () => {
    const { default: Quill } = await import("quill");

    quill = new Quill(editor, {
      modules: {
        toolbar: toolbarOptions,
      },
    });
  });
</script>

<Toolbar />
<div bind:this={editor} />
