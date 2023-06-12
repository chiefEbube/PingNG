<script>
    import { fade } from "svelte/transition";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    const handleShowCard = (value) => dispatch("close-card");
    export let title = "";
</script>

<div
    transition:fade={{ delay: 250, duration: 300 }}
    class="absolute z-20 w-96 h-screen top-0 right-0 bg-white py-8 px-6 shadow-2xl overflow-y-scroll"
>
    <div class="w-full flex items-center justify-between">
        <h2 class="text-2xl">{title}</h2>
        <button id="x-btn" class="cursor-pointer" on:click={handleShowCard}
            ><i class="fa-solid fa-xmark" /></button
        >
    </div>
    <slot />
</div>
