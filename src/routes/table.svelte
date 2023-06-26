<script>
    export let headings = [];
</script>

<div
    class="bg-white flex flex-col w-11/12 mx-auto mt-10 min-h-screen rounded-md p-8"
>
    <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-y-scroll">
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
</div>
