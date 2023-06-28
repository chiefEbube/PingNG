<script>
    // import Button from "./button.svelte";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let isDisabled = true;
    let contactInfo = [
        {
            first_name: "",
            last_name: "",
            phone_no: "",
            country_code_id: 1,
        },
    ];

    const handleSubmit = async () => {
        let request = await fetch("http://localhost:8000/api/contact/create", {
            method: "POST",
            body: JSON.stringify(contactInfo),
            headers: {
                "Content-Type": "application/json",
            },
        });

        contactInfo[0].first_name = "";
        contactInfo[0].last_name = "";
        contactInfo[0].phone_no = "";

        dispatch("addContact");
    };
</script>

<form class="my-10">
    {#each contactInfo as contact, index}
        <div class="mt-5">
            <label for="first_name">Enter Contact First Name</label>
            <input
                required
                type="text"
                bind:value={contactInfo[index].first_name}
                class="border border-slate-400 p-3 my-2 w-full"
            />
        </div>

        <div class="mt-5">
            <label for="last_name">Enter Contact Last Name</label>
            <input
                required
                type="text"
                bind:value={contactInfo[index].last_name}
                class="border border-slate-400 p-3 my-2 w-full"
            />
        </div>

        <div class="mt-5">
            <label for="phone_no">Enter Contact Phone Number</label>
            <input
                required
                type="text"
                bind:value={contactInfo[index].phone_no}
                class="border border-slate-400 p-3 my-2 w-full"
            />
        </div>

        <div class="mt-5">
            <label for="country_code_id">Enter Country Code ID</label>
            <input
                required
                type="text"
                bind:value={contactInfo[index].country_code_id}
                class="border border-slate-400 p-3 my-2 w-full"
            />
        </div>
    {/each}

    <div class="mt-10">
        <button
            disabled={isDisabled}
            on:click={handleSubmit}
            class="bg-green-700 text-white p-3 rounded w-full h-fit cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >Save Contact</button
        >
    </div>
    <!-- <div
        class="animate-spin block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
        role="status"
        aria-label="loading"
    >
        <span class="sr-only">Loading...</span>
    </div> -->
</form>
