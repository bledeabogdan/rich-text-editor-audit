<script lang="ts">
  import Bold from "./icons/Bold.svelte";
  import BulletedList from "./icons/BulletedList.svelte";
  import Color from "./icons/Color.svelte";
  import Italic from "./icons/Italic.svelte";
  import Link from "./icons/Link.svelte";
  import Quote from "./icons/Quote.svelte";
</script>

<div style:text-align="center" id="toolbar">
  <button class="action ql-bold" title="Toggle bold">
    <Bold />
  </button>
  <button class="action ql-italic" title="Toggle italic">
    <Italic />
  </button>
  <button class="action ql-list" value="bullet" title="Toggle bullet list">
    <BulletedList />
  </button>
  <button class="action ql-blockquote" title="Toggle quote">
    <Quote />
  </button>
  <button class="action ql-link" title="Add link">
    <Link />
  </button>
  <button
    class="action ql-color ql-colorpicker"
    value="red"
    title="Toggle red color"
  >
    <Color />
  </button>
</div>

<style>
  button.action {
    background: transparent;
    box-sizing: border-box;
    border: unset;
    cursor: pointer;
    border-radius: 4px;
  }

  :global(button.action.ql-active) {
    background-color: rgb(223, 249, 255);
  }
</style>
