<script>
  import { onMount } from "svelte";

  let editor;

  onMount(async () => {
    const { default: Quill } = await import("quill");

    new Quill(editor, {
      theme: "bubble",
      placeholder: "Write your story...",
    });
  });
</script>

<div bind:this={editor} />

<style>
  @import "https://cdn.quilljs.com/1.3.6/quill.bubble.css";
</style>
