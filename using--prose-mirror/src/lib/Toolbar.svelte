<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Bold from "./icons/Bold.svelte";
  import BulletedList from "./icons/BulletedList.svelte";
  import Color from "./icons/Color.svelte";
  import Italic from "./icons/Italic.svelte";
  import Link from "./icons/Link.svelte";
  import Quote from "./icons/Quote.svelte";

  const dispatch = createEventDispatcher();

  let open: boolean = false;
  let link = {
    title: "",
    url: "",
  };

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
</script>

<div style:text-align="center" id="toolbar">
  <button class="action" on:click={handleBoldClick} title="Toggle bold">
    <Bold />
  </button>
  <button class="action" on:click={handleItalicClick} title="Toggle italic">
    <Italic />
  </button>
  <button
    class="action"
    on:click={handleBulletedListClick}
    title="Toggle bullet list"
  >
    <BulletedList />
  </button>
  <button class="action" on:click={handleQuoteClick} title="Toggle quote">
    <Quote />
  </button>
  <button class="action" on:click={handleLinkClick} title="Add link">
    <Link />
  </button>
  <button class="action" on:click={handleColorSelect} title="Toggle red color">
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

  dialog {
    z-index: 8;
  }
</style>
