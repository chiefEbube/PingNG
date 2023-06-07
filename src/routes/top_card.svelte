<script>
    import DropdownButton from "./dropdown_button.svelte";
    import Random from "./random.svelte";

    let showCard = false;

    const handleShowCard = () => showCard = ! showCard;

    let dropDownOptions = [{"value" : "add","label":"Add Contacts"}, {"value":"import","label":"Import from CSV"}]

</script> 

<div class="flex items-center bg-white w-11/12 mx-auto mt-10 py-4 px-6 rounded-md text-sm">
    <div class="mr-auto">Contacts</div>
    <DropdownButton on:add-card={ handleShowCard } title="Add Contacts" {dropDownOptions}/>
    

    { #if showCard}
        <Random on:close-card={ handleShowCard } ></Random>
    {/if}

</div>