<script>
    import DropdownButton from "./dropdown_button.svelte";
    import AddCard from "./addCard.svelte";
    import AddForm from "./addForm.svelte";

    let showCard = false;
    let title = ""

    const handleShowCard = () => showCard = ! showCard;

    let dropDownOptions = [{"value" : "add","label":"Add Contacts"}, {"value":"import","label":"Import from CSV"}]

</script> 

<div class="flex items-center bg-white w-11/12 mx-auto mt-10 py-4 px-6 rounded-md text-sm">
    <div class="mr-auto">Contacts</div>
    <DropdownButton on:add-card={ handleShowCard } title="Add Contacts" {dropDownOptions}/>
    

    { #if showCard}
        <AddCard title="Add New Contact" on:close-card={ handleShowCard } >
        <AddForm />
        </AddCard>
    {/if}

</div>