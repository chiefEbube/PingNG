<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let headings = [];
    export let links = [];

    const goto = (param) => {
        console.log("clicked");
        dispatch("paginationClick", { url: param });
    };
</script>

<div class="bg-white w-11/12 mx-auto mt-10 min-h-screen rounded-md p-8">
    <div class="-m-1.5 overflow-x-auto mb-5">
        <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-hidden">
                <table class="w-full">
                    <thead class="min-w-full divide-y divide-gray-300">
                        <tr>
                            {#each headings as heading}
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase"
                                    >{heading}</th
                                >
                            {/each}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-300">
                        <slot />
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <nav class="flex justify-center items-center">
        {#each links as link, index}
            {#if index == 0 && link.url != null}
                <a
                    on:click|preventDefault={() => goto(link.url)}
                    class="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md cursor-pointer"
                >
                    <span aria-hidden="true">«</span>
                    <span class="sr-only">Previous</span>
                </a>
            {:else if index != 0 && index != 5}
                <a
                    class={`w-10 h-1 text-gray-500 hover:text-green-600 p-4 inline-flex items-center text-sm font-medium rounded-full cursor-pointer ${
                        link.active ? "active" : ""
                    }`}
                    on:click|preventDefault={() => goto(link.url)}
                    aria-current="page">{link.label}</a
                >
            {:else if index == 5 && link.url != null}
                <a
                    class="text-gray-500 hover:text-green-600 p-4 inline-flex items-center gap-2 rounded-md cursor-pointer"
                    on:click|preventDefault={() => goto(link.url)}
                >
                    <span class="sr-only">Next</span>
                    <span aria-hidden="true">»</span>
                </a>
            {/if}
        {/each}
    </nav>
</div>

<style>
    .active {
        background-color: rgb(3, 96, 3);
        color: white;
    }
</style>
