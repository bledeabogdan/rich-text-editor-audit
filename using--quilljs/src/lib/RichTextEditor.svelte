<script>
  import { onMount } from "svelte";
  import { bindings } from "./quill/bindings";
  import { toolbar } from "./quill/toolbar";
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
  });
</script>

<Toolbar />
<div bind:this={editor} style:margin-top="30px" />
