<script>
    export let btnName = ""
    let working = false
</script>

<button on:click disabled={working} class="bg-green-700 text-white p-3 rounded w-full h-fit cursor-pointer">
    {btnName}
</button>