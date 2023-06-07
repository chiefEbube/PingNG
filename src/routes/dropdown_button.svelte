<script>
    import { fade } from "svelte/transition";
    import { createEventDispatcher } from "svelte";

    export let title = "";
    export let dropDownOptions = [];

    let dropDownOpen = false;
    
    const handleDropDownClick = () => (dropDownOpen = !dropDownOpen);
    const focusOut = () => (dropDownOpen = false);
    
    const dispatch  = createEventDispatcher();

    const handleShowCard = (value) => {

        if(value === 'add'){
            dispatch('add-card');
        }
    }
</script>

<div class="relative">
    <button
        class="bg-green-700 text-white p-3 rounded-md flex items-center gap-2 z-20 hover:bg-green-800"
        on:click={handleDropDownClick}
        on:focusout={focusOut}
    >
        {title}
        <i class="fa-solid fa-chevron-down border-l pl-2" />
    </button>

    {#if dropDownOpen}
        <div transition:fade={{ delay: 250, duration: 300 }}
        class="absolute top-15 w-40 left-0 px-2 pt-2 bg-white z-40 drop-shadow-md rounded-sm">
            {#each dropDownOptions as option}
                <button class="p-2 mb-2 rounded-sm hover:bg-gray-100 w-full text-left" on:click={ () => handleShowCard(option.value) }>
                {option.label}</button>
            {/each}
        </div>
    {/if}
</div>
