<script>
  import { createEventDispatcher } from "svelte";

    const dispatch  = createEventDispatcher();

    const handleShowCard = (value) => dispatch('close-card')

</script>


<div class="absolute z-20 w-80 h-screen top-0 right-0 bg-white p-4 shadow-2xl">
    <div class="w-full flex items-center justify-between text-md">
        <h2 class="">Add New Contact</h2>
        <button id="x-btn" class="cursor-pointer" on:click= { handleShowCard }><i class="fa-solid fa-xmark"></i></button>
    </div>
    <slot>
        
    </slot>
</div>