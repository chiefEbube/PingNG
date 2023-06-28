<script>
    export let headings = [];
</script>

<div
    class="bg-white w-11/12 mx-auto mt-10 min-h-screen rounded-md p-8"
>
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
    <nav class="flex justify-center items-center space-x-2">
        <a class="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md" href="#">
          <span aria-hidden="true">«</span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="w-10 h-10 bg-green-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full" href="#" aria-current="page">1</a>
        <a class="w-10 h-10 text-gray-500 hover:text-green-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">2</a>
        <a class="w-10 h-10 text-gray-500 hover:text-green-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">3</a>
        <a class="text-gray-500 hover:text-green-600 p-4 inline-flex items-center gap-2 rounded-md" href="#">
          <span class="sr-only">Next</span>
          <span aria-hidden="true">»</span>
        </a>
      </nav>
</div>
