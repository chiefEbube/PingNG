<script>
    import Button from "./button.svelte";
    let contacts = []
    let contactInfo = [
        {
            first_name: "",
            last_name: "",
            phone_no: "",
            country_code_id: 1
        },
    ];

    const handleSubmit = async() => {

        console.log(contactInfo)
        let request = await fetch("http://localhost:8000/api/contact/create", {
            method: "POST",
            body: JSON.stringify(contactInfo),
            headers: {
                "Content-Type": "application/json"
            }
        })

        // let request = await fetch('http://localhost:8000/api/contact-list?sort={"first_name":"desc"}&perPage=10')

        let response = await request.json()
        contacts = response.data
        console.log(contacts)
    };

    const addMoreContact = () => {
        contactInfo.push({
            first_name: "",
            last_name: "",
            phone_no: "",
            country_code_id: 1
        });

        contactInfo = contactInfo;
    };
</script>

<div class="flex flex-col space-y-4">
    {#each contacts as contact}
        <div>
            {contact.first_name}
        </div>
    {/each}
</div>
<form class="my-10">
    {#each contactInfo as contact, index}
    <div class="mt-5">
        <label for="firstName">Enter Contact First Name</label>
        <input type="text" bind:value={contactInfo[index].first_name} class="border border-slate-400 p-3 my-2 w-full"/>
    </div>
    
    <div class="mt-5">
        <label for="lastName" >Enter Contact Last Name</label>
        <input type="text" bind:value={contactInfo[index].last_name} class="border border-slate-400 p-3 my-2 w-full"/>
    </div>
    
    <div class="mt-5">
        <label for="phoneNumber">Enter Contact Phone Number</label>
        <input type="text" bind:value={contactInfo[index].phone_no} class="border border-slate-400 p-3 my-2 w-full"/>
    </div>
    
    <div class="bg-slate-300 w-full h-0.5 mt-10 rounded-md"></div>
    {/each}


    <div class="flex items-center gap-5">
        <button type="button" on:click={addMoreContact}
            class="fa-solid fa-plus bg-slate-200 py-2 px-4 text-lg rounded-md text-slate-400 cursor-pointer"
        ></button>
        <Button btnName="Save Contact" on:click={handleSubmit}/>
    </div>
</form>
