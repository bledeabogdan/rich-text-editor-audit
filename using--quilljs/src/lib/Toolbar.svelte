<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Bold from "../../../packages/icons/Bold.svelte";
  import BulletedList from "../../../packages/icons/BulletedList.svelte";
  import Color from "../../../packages/icons/Color.svelte";
  import Italic from "../../../packages/icons/Italic.svelte";
  import Link from "../../../packages/icons/Link.svelte";
  import Quote from "../../../packages/icons/Quote.svelte";
  import Save from "../../../packages/icons/Save.svelte";

  const dispatch = createEventDispatcher();

  function handleSave() {
    dispatch("save");
  }
</script>

<div id="toolbar">
  <button title="Save" on:click={handleSave}>
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
  div {
    position: fixed;
    background: white;
    width: 100%;
    box-sizing: border-box;
    padding: 8px 0;
    top: 0;
    z-index: 8;
  }

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
