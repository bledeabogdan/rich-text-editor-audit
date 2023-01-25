<script lang="ts">
  import Bold from "../../../packages/icons/Bold.svelte";
  import BulletedList from "../../../packages/icons/BulletedList.svelte";
  import Color from "../../../packages/icons/Color.svelte";
  import Italic from "../../../packages/icons/Italic.svelte";
  import Link from "../../../packages/icons/Link.svelte";
  import Quote from "../../../packages/icons/Quote.svelte";
  import Save from "../../../packages/icons/Save.svelte";
</script>

<div style:text-align="center" id="toolbar">
  <button class="ql-bold" title="Toggle bold">
    <Save />
  </button>
  <button class="ql-bold" title="Toggle bold">
    <Bold />
  </button>
  <button class="ql-italic" title="Toggle italic">
    <Italic />
  </button>
  <button class="ql-list" value="bullet" title="Toggle bullet list">
    <BulletedList />
  </button>
  <button class="ql-blockquote" title="Toggle quote">
    <Quote />
  </button>
  <button class="ql-link" title="Add link">
    <Link />
  </button>
  <button class="ql-color ql-colorpicker" value="red" title="Toggle red color">
    <Color />
  </button>
</div>

<style>
  button {
    background: transparent;
    box-sizing: border-box;
    border: unset;
    cursor: pointer;
    border-radius: 4px;
  }

  :global(button.ql-active) {
    background-color: rgb(223, 249, 255);
  }
</style>
