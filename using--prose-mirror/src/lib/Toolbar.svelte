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

  function handleBoldClick() {
    dispatch("bold");
  }

  function handleItalicClick() {
    dispatch("italic");
  }

  function handleBulletedListClick() {
    dispatch("bulleted-list");
  }

  function handleQuoteClick() {
    dispatch("quote");
  }

  function handleLinkClick() {
    const href = prompt("Href:");

    dispatch("link", { href });
  }

  function handleColorSelect() {
    dispatch("color");
  }

  function handleSave() {
    dispatch("save");
  }
</script>

<div id="toolbar">
  <button on:click={handleSave} title="Save">
    <Save />
  </button>
  <button on:click={handleBoldClick} title="Toggle bold">
    <Bold />
  </button>
  <button on:click={handleItalicClick} title="Toggle italic">
    <Italic />
  </button>
  <button on:click={handleBulletedListClick} title="Toggle bullet list">
    <BulletedList />
  </button>
  <button on:click={handleQuoteClick} title="Toggle quote">
    <Quote />
  </button>
  <button on:click={handleLinkClick} title="Add link">
    <Link />
  </button>
  <button on:click={handleColorSelect} title="Toggle red color">
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
</style>
