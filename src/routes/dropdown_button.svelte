<script>
    export let title = "";
    export let dropDownOptions = [];
    import { fade } from "svelte/transition";

    let dropDownOpen = false;

    const handleDropDownClick = () => (dropDownOpen = !dropDownOpen);
    const focusOut = () => (dropDownOpen = false);
</script>

<div>
    <button
        class="bg-green-800 text-white p-3 rounded-md flex items-center gap-2 z-20"
        on:click={handleDropDownClick}
        on:focusout={focusOut}
    >
        {title}
        <i class="fa-solid fa-chevron-down border-l pl-2" />
    </button>

    {#if dropDownOpen}
        <div transition:fade={{ delay: 250, duration: 300 }}>
            {#each dropDownOptions as option}
                <div class="drop-add">{option}</div>
            {/each}
        </div>
    {/if}
</div>
