<script>
    import Button from "./button.svelte";
    import { createEventDispatcher } from "svelte";
    const dispatch  = createEventDispatcher();

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

        
        let newRequest = await fetch(
            'http://localhost:8000/api/contact-list?sort={"first_name":"desc"}&perPage=10'
        );

        let response = await newRequest.json();
        const contacts = response.data;

        dispatch('addContact, contacts')
    };

</script>
    
<form class="my-10">
    {#each contactInfo as contact, index}
        <div class="mt-5">
            <label for="first_name">Enter Contact First Name</label>
            <input
                type="text"
                bind:value={contactInfo[index].first_name}
                class="border border-slate-400 p-3 my-2 w-full"
            />
        </div>

        <div class="mt-5">
            <label for="last_name">Enter Contact Last Name</label>
            <input
                type="text"
                bind:value={contactInfo[index].last_name}
                class="border border-slate-400 p-3 my-2 w-full"
            />
        </div>

        <div class="mt-5">
            <label for="phone_no">Enter Contact Phone Number</label>
            <input
                type="text"
                bind:value={contactInfo[index].phone_no}
                class="border border-slate-400 p-3 my-2 w-full"
            />
        </div>

        <div class="mt-5">
            <label for="country_code_id">Enter Country Code ID</label>
            <input
                type="text"
                bind:value={contactInfo[index].country_code_id}
                class="border border-slate-400 p-3 my-2 w-full"
            />
        </div>
    {/each}

    <div class="mt-10">
        <Button btnName="Save Contact" on:click={handleSubmit} />
    </div>
</form>