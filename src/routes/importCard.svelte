<script>
    import DropdownButton from "./dropdown_button.svelte";
    import Button from "./button.svelte";

    let dropDownOptions = [
        { value: "firstName", label: "First Name", selected: "First Name" },
        { value: "lastName", label: "Last name", selected: "Last Name" },
        { value: "phone", label: "Phone Number", selected: "Phone Number" },
    ];

    let showUploadFileField = true;
    let showNext = false;
    let title = "Choose file to import";

    let files;
    $: if (files) {
        for (const file of files) {
            title = `${file.name}: ${file.size} bytes`;
        }
    }

    const handleShowUploadFileField = () => {
        showUploadFileField = true;
        showNext = false;
    };

    const handleNext = () => {
        showNext = true;
        showUploadFileField = false;
    };

    const setSelectedValue = (value, key) => {
        dropDownOptions[key].selected = value;
    };
</script>

<div class="my-5 text-center grid gap-5">
    <div class="text-center flex items-center justify-around w-full">
        <div class="border-b-2 border-green-300 w-1/2">
            <button
                on:click={handleShowUploadFileField}
                class="w-8 aspect-square border-2 border-green-200 rounded-full bg-green-50 m-3 font-bold"
                >1</button
            >
            <h4 class="text-gray-500 mb-2">Upload</h4>
        </div>
        <div class="border-b-2 w-1/2">
            <button
                on:click={handleNext}
                class="w-8 aspect-square border-2 border-green-200 rounded-full bg-green-50 m-3 font-bold"
                >2</button
            >
            <h4 class="text-gray-500 mb-2">Map</h4>
        </div>
    </div>

    {#if showUploadFileField}
        <!-- Upload Files Field -->
        <div class="px-5">
            <h1 class="font-bold text-lg">Upload your file</h1>
            <p class="text-gray-500 text-xs mx-auto">
                By importing your file, you can add and update contacts Lorem
                ipsum.
            </p>
        </div>
        <div class="bg-red-50 border border-orange-300 p-5">
            <h4 class="font-bold text-xs">
                <i class="fa-solid fa-triangle-exclamation text-yellow-400" /> Include
                Country Code
            </h4>
            <small class="text-gray-500"
                >Your file must include Country Code for all your phone numbers</small
            >
            <small class=""
                >(E.g 08012345678 should be 2348012345678 for Nigeria)</small
            >
        </div>

        <div class="border-dashed border-2 grid gap-5 py-5">
            <input
                type="file"
                bind:files
                required
                id="importBtn"
                class="hidden"
            />
            <img
                src="./src/images/file-icon.png"
                alt=""
                class="w-1/6 mx-auto"
            />
            <label
                for="importBtn"
                class="border-2 mx-auto px-2 py-1 cursor-pointer rounded-md text-xs bg-gray-300"
                >{title}</label
            >
        </div>

        <div class="text-left -mb-2">
            <h4 class="font-bold text-xs">
                What should we do with the contact information
            </h4>

            <form class="flex flex-col gap-y-3 mt-3">
                <div class="flex">
                    <input
                        required
                        type="radio"
                        name="hs-radio-vertical-group"
                        class="shrink-0 mt-0.5 border-gray-200 rounded-full text-green-600 focus:ring-green-500 checked:bg-green-800"
                        id="hs-radio-vertical-group-1"
                        checked
                    />
                    <label
                        for="hs-radio-vertical-group-1"
                        class="text-sm text-gray-800 ml-2"
                        >Add new contacts and update existing ones</label
                    >
                </div>

                <div class="flex">
                    <input
                        required
                        type="radio"
                        name="hs-radio-vertical-group"
                        class="shrink-0 mt-0.5 border-gray-200 rounded-full text-green-600 focus:ring-green-500 checked:bg-green-800"
                        id="hs-radio-vertical-group-2"
                    />
                    <label
                        for="hs-radio-vertical-group-2"
                        class="text-sm text-gray-800 ml-2"
                        >Only add new contacts</label
                    >
                </div>

                <div class="flex">
                    <input
                        required
                        type="radio"
                        name="hs-radio-vertical-group"
                        class="shrink-0 mt-0.5 border-gray-200 rounded-full text-green-600 focus:ring-green-500 checked:bg-green-800"
                        id="hs-radio-vertical-group-3"
                    />
                    <label
                        for="hs-radio-vertical-group-3"
                        class="text-sm text-gray-800 ml-2"
                        >Only update existing ones</label
                    >
                </div>
                <Button btnName="Next" on:click={handleNext} />
            </form>
        </div>
        <!-- End of upload files field -->
    {/if}

    <!-- Map field -->

    {#if showNext}
        <div>
            <div class="px-5">
                <h1 class="font-bold text-lg">Map your contact properties</h1>
                <p class="text-gray-500 text-xs mx-auto">
                    Each header below should be matched to a property.
                </p>
            </div>

            <div class="w-full my-8 border p-5 text-left">
                <table class="w-full">
                    <thead>
                        <tr>
                            <th>Header</th>
                            <th>Column Info</th>
                            <th>Select properties</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>First name</td>
                            <td>Mayorkun</td>
                            <td>
                                <DropdownButton
                                    on:option-clicked={(e) =>
                                        setSelectedValue(e.detail.label, 0)}
                                    title={dropDownOptions[0].selected}
                                    {dropDownOptions}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Second name</td>
                            <td>Saludeen</td>
                            <td>
                                <DropdownButton
                                    on:option-clicked={(e) =>
                                        setSelectedValue(e.detail.label, 1)}
                                    title={dropDownOptions[1].selected}
                                    {dropDownOptions}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Phone Number</td>
                            <td>23480123456789</td>
                            <td>
                                <DropdownButton
                                    on:option-clicked={(e) =>
                                        setSelectedValue(e.detail.label, 2)}
                                    title={dropDownOptions[2].selected}
                                    {dropDownOptions}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Button btnName="Finish" />
        </div>
    {/if}
</div>

<!--
<script>
    import DropdownButton from "./dropdown_button.svelte";
    import Button from "./button.svelte";

    let dropDownOptions = [
        { value: "firstName", label: "First Name" },
        { value: "lastName", label: "Last name" },
        { value: "phone", label: "Phone Number" },
    ];

    let showUploadFileField = true;
    let showNext = false;

    const handleShowUploadFileField = () => {
        showUploadFileField = true;
        showNext = false;
    };

    const handleNext = () => {
        showNext = true;
        showUploadFileField = false;
    };
</script>

<div class="my-5 text-center grid gap-5">
    <div class="text-center flex items-center justify-around w-full">
        <div class="border-b-2 border-green-300 w-1/2">
            <button
                on:click={handleShowUploadFileField}
                class="w-8 aspect-square border-2 border-green-300 rounded-full bg-green-300 m-3 font-bold"
                >1</button
            >
            <h4 class="text-gray-500 mb-2">Upload</h4>
        </div>
        <div class="border-b-2 w-1/2">
            <button
                on:click={handleNext}
                class="w-8 aspect-square border-2 border-green-200 rounded-full bg-green-50 m-3 font-bold"
                >2</button
            >
            <h4 class="text-gray-500 mb-2">Map</h4>
        </div>
    </div>

    {#if showUploadFileField}
        // Upload Files Field
        <div class="px-5">
            <h1 class="font-bold text-lg">Upload your file</h1>
            <p class="text-gray-500 text-xs mx-auto">
                By importing your file, you can add and update contacts Lorem
                ipsum.
            </p>
        </div>
        <div class="bg-red-50 border border-orange-300 p-5">
            <h4 class="font-bold text-xs">
                <i class="fa-solid fa-triangle-exclamation text-yellow-400" /> Include
                Country Code
            </h4>
            <small class="text-gray-500"
                >Your file must include Country Code for all your phone numbers</small
            >
            <small class=""
                >(E.g 08012345678 should be 2348012345678 for Nigeria)</small
            >
        </div>

        <div class="border-dashed border-2 grid gap-5 py-5">
            <input type="file" id="importBtn" class="hidden" />
            <img
                src="./src/images/file-icon.png"
                alt=""
                class="w-1/6 mx-auto"
            />
            <label
                for="importBtn"
                class="border-2 mx-auto px-2 py-1 cursor-pointer rounded-md text-xs bg-gray-300"
                >Choose file to import</label
            >
        </div>

        <div class="text-left -mb-2">
            <h4 class="font-bold text-xs">
                What should we do with the contact information
            </h4>
            <div class="text-gray-500 flex gap-2 items-center py-1">
                <input type="radio" checked />
                <label for="">Add new contacts and update existing ones</label>
            </div>
            <div class="text-gray-500 flex gap-2 items-center py-1">
                <input type="radio" />
                <label for="">Only add new contacts</label>
            </div>
            <div class="text-gray-500 flex gap-2 items-center pt-1">
                <input type="radio" />
                <label for="">Only update existing ones</label>
            </div>
        </div>
        <Button btnName="Next" on:click={handleNext} />

        // End of upload files field
    {/if}

    // Map field

    {#if showNext}
        <div>
            <div class="px-5">
                <h1 class="font-bold text-lg">Map your contact properties</h1>
                <p class="text-gray-500 text-xs mx-auto">
                    Each header below should be matched to a property.
                </p>
            </div>

            <div class="w-full text-left my-5 text-xs border p-5">
            <table  class="w-full">
                <thead>
                    <tr>
                        <th>Header</th>
                        <th>Column Info</th>
                        <th>Select properties</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>First name</td>
                        <td>Mayorkun</td>
                        <td>
                            <DropdownButton
                                title="First Name"
                                {dropDownOptions}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>Second name</td>
                        <td>Saludeen</td>
                        <td>
                            <DropdownButton
                                title="First Name"
                                {dropDownOptions}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>Phone Number</td>
                        <td>23480123456789</td>
                        <td>
                            <DropdownButton
                                title="First Name"
                                {dropDownOptions}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <Button btnName="Finish"/>

        </div>
    {/if}
</div>
-->

<style>
    table tbody td {
        height: 4.5rem;
        border-bottom: 1px solid rgba(192, 192, 192, 0.809);
        margin-top: 2rem;
        font-size: 0.65rem;
        font-weight: 600;
    }

    table tbody tr:last-child td {
        border: none;
    }

    table tbody td:nth-child(2),
    table tbody td:first-child {
        width: 33%;
    }

    .active {
        /* w-8 aspect-square border-2 border-green-300 rounded-full bg-green-300 m-3 font-bold */
        border: 1px solid green;
        background-color: green;
    }

    input[type="radio"] {
        padding: 0.5em;
        appearance: none;
        border: solid;
        border-radius: 3em;
    }
</style>
