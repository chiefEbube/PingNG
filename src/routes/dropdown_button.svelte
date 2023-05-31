<script>
    export let title = "";
    export let dropDownOptions = [];
    import { fade } from "svelte/transition";

    let dropDownOpen = false;

    const handleDropDownClick = () => (dropDownOpen = !dropDownOpen);
    const focusOut = () => (dropDownOpen = false);
</script>

<div class="drop-down-container">
    <button
        class="add-contact-btn"
        on:click={handleDropDownClick}
        on:focusout={focusOut}
    >
        <div class="add-btn">
            {title}
            <i class="fa-solid fa-chevron-down" />
        </div>
    </button>

    {#if dropDownOpen}
        <div class="drop" transition:fade={{ delay: 250, duration: 300 }}>
            {#each dropDownOptions as option}
                <div class="drop-add">{option}</div>
            {/each}
        </div>
    {/if}
</div>