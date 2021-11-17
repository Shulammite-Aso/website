<script lang="ts">
  // Components
  import MenuItem from "./menu-item.svelte";

  // States
  import topicsState from "../states/topics-state";
  import subMenuState from "../states/sub-menu-state";

  import type { MenuEntry } from "../../../types/menu-entry.type";
  export let currentSection: MenuEntry = null;
</script>

<style lang="scss">
  .back-button {
    display: inline-flex;
    align-items: center;
    line-height: 138%;
    color: var(--black);
  }

  .back-button__icon {
    flex: 0 0 auto;
    margin-right: 1rem;
  }

  .back-button__icon-arrow {
    transform: rotate(90deg);
  }

  .sub-menu-container {
    margin-top: 1rem;
    border-radius: 0.75rem;
    box-shadow: var(--shadow);
  }

  .toggle-button {
    display: flex;
    align-items: center;
    padding: 0.8125rem 1rem;
    line-height: 138%;
    color: var(--black);
  }

  .toggle-button__label {
    flex: 1 1 auto;
    margin-right: 1rem;
    text-align: left;
  }

  .toggle-button__icon {
    flex: 0 0 auto;
  }

  .toggle-button__icon-arrow.open {
    transform: rotate(180deg);
  }

  .status {
    border-radius: 8px;
    padding: 3px 10px;
    font-size: var(--p-xsmall);
    font-weight: bold;
    height: 15px;
    line-height: 13px;
    width: 50px;
    margin-top: 10px;
    text-align: center;
    margin-left: 5px;
    color: var(--dark-grey);
  }

  .status-soon {
    line-height: 10px;
    background-color: var(--salmon);
  }

  .status-beta {
    border: none;
    background-color: var(--brand-light);
  }
</style>

<button
  class="back-button"
  type="button"
  on:click={() => {
    $topicsState = true;
    $subMenuState = false;
  }}
>
  <div class="back-button__icon">
    <img
      class="back-button__icon-arrow"
      src="/arrow.svg"
      alt="See all topics"
      width="12"
      height="7"
    />
  </div>
  All topics
</button>

{#if currentSection?.subMenu}
  <div class="sub-menu-container bg-white">
    <button
      class="toggle-button w-full"
      type="button"
      aria-controls="sub-menu"
      aria-expanded={$subMenuState}
      on:click={() => ($subMenuState = !$subMenuState)}
    >
      <div class="toggle-button__label">{currentSection?.title}</div>
      <div class="toggle-button__icon">
        <img
          class={`toggle-button__icon-arrow ${$subMenuState ? "open" : ""}`}
          src="/arrow.svg"
          alt="Toggle sub menu"
          width="12"
          height="7"
        />
      </div>
    </button>

    <div
      aria-label={currentSection?.title}
      role="navigation"
      class={`px-4 ${$subMenuState ? "block" : "hidden"}`}
      id="sub-menu"
    >
      <ul>
        {#each currentSection?.subMenu as sub}
          <MenuItem href={sub.path} onClick={() => ($subMenuState = false)}>
            {sub.title}
            {#if sub.status}
              <span class={sub.status ? `status status-${sub.status}` : ""}>
                {sub.status.charAt(0).toUpperCase() + sub.status.slice(1)}
              </span>
            {/if}
          </MenuItem>
        {/each}
      </ul>
    </div>
  </div>
{/if}
