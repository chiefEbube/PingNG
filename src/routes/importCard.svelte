<script>
    import DropdownButton from "./dropdown_button.svelte";
    import Button from "./button.svelte";

    let dropDownOptions = [];
    let headingRows = []

    let showUploadFileField = true;
    let showNext = false;
    let title = "Choose file to import";
    let isFile = false;

    let file;

    const handleFileChange = (event) => {
        file = event.target.files[0];
    };

    $: if (file) {
        title = `${file.name}: ${(file.size / (1000 * 1000)).toFixed(2)} MB`;
        isFile = true;
    }

    const uploadFile = async () => {
        const formData = new FormData();
        formData.append("file", file);

        try {
            const request = await fetch("http://localhost:8000/api/contact/import", {
                method: "POST",
                // headers: {
                //     'Content-Type': 'application/form-data'
                // },
                body: formData,
            });

            if (request.ok) {
                let response = await request.json()
                let dropdown = []
        
                for (const key in response.mappings){
                    let dropObj = {
                        label: response.mappings[key],
                        value: key,
                        selected: response.mappings[key]
                    }
                    dropdown.push(dropObj)
                    
                }

                dropDownOptions = dropdown
                headingRows = response.row_headings
            } else {
                console.error("Failed to upload file");
            }
        } catch (error) {
            console.error("Error occurred while uploading file", error);
        }
    };

    const handleShowUploadFileField = () => {
        showUploadFileField = true;
        showNext = false;
    };

    const handleNext = async() => {
        await uploadFile();
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

        <div
            class={`border-dashed border-2 grid gap-5 py-5 ${
                isFile ? "active" : ""
            }`}
        >
            <input
                disabled={isFile}
                type="file"
                accept=".csv"
                on:change={handleFileChange}
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

                <div class="flex mb-3">
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
                <button
                    disabled={!isFile}
                    on:click={handleNext}
                    class="bg-green-700 text-white p-3 rounded w-full h-fit cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                </button>
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
                        {#each Object.entries(headingRows) as [index, heading], key}
                            <tr>
                                <td>{index}</td>
                                <td>{heading}</td>
                                <td>
                                    <DropdownButton
                                        on:option-clicked={(e) =>
                                            setSelectedValue(e.detail.label, key)}
                                        title={dropDownOptions[key].selected}
                                        {dropDownOptions}
                                    />
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>

            <Button btnName="Finish" />
        </div>
    {/if}
</div>

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
        border: 1px dashed green;
        background-color: rgb(239, 255, 239);
    }
</style>
