<script>
    import Button from "./button.svelte";
    let contactInfo = [
        {
            firstName: "",
            lastName: "",
            phoneNumber: "",
        },
    ];

    const handleSubmit = () => {
        console.log(contactInfo)
        console.log("hello")
    };

    const addMoreContact = () => {
        contactInfo.push({
            firstName: "",
            lastName: "",
            phoneNumber: "",
        });

        contactInfo = contactInfo;
    };
</script>

<form class="my-10">
    {#each contactInfo as contact, index}
    <div class="mt-5">
        <label for="firstName">Enter Contact First Name</label>
        <input type="text" bind:value={contactInfo[index].firstName} class="border border-slate-400 p-3 my-2 w-full"/>
    </div>
    
    <div class="mt-5">
        <label for="lastName" >Enter Contact Last Name</label>
        <input type="text" bind:value={contactInfo[index].lastName} class="border border-slate-400 p-3 my-2 w-full"/>
    </div>
    
    <div class="mt-5">
        <label for="phoneNumber">Enter Contact Phone Number</label>
        <input type="text" bind:value={contactInfo[index].phoneNumber} class="border border-slate-400 p-3 my-2 w-full"/>
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
