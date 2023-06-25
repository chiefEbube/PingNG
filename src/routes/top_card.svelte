<script>
    import DropdownButton from "./dropdown_button.svelte";
    import AddCard from "./addCard.svelte";
    import AddForm from "./addForm.svelte";
    import ImportCard from "./importCard.svelte";
    import { createEventDispatcher } from "svelte";
    const dispatch  = createEventDispatcher();

    let showCard = false;
    let showImport = false;
    let title = "";

    const addContact = (e) => {
        dispatch('add_contact', e.detail)
    }

    const closeCard = () => (showCard = false);

    const handleShowCard = (e) => {

        if(e.detail.value === 'add'){
            showCard = true;
        }

        else if(e.detail.value === 'import'){
            showImport = true
        }
    }

    let dropDownOptions = [
        { value: "add", label: "Add Contacts" },
        { value: "import", label: "Import from CSV" },
    ];
</script>

<div
    class="flex items-center bg-white w-11/12 mx-auto mt-10 py-4 px-6 rounded-md text-sm"
>
    <div class="mr-auto">Contacts</div>
    <DropdownButton
        on:option-clicked={ (e) => handleShowCard(e) }
        title="Add Contacts"
        {dropDownOptions}
    />

    {#if showCard}
        <AddCard title="Add New Contact" on:close-card={closeCard}>
            <AddForm on:addContact={addContact}/>
        </AddCard>
    {/if}

    {#if showImport}
        <AddCard title="Import Contact" on:close-card={closeCard}>
            <ImportCard />
        </AddCard>
    {/if}
</div>









<!-- <script>
    import DropdownButton from "./dropdown_button.svelte";
    import AddCard from "./addCard.svelte";
    import AddForm from "./addForm.svelte";
    import ImportCard from "./importCard.svelte";

    let showCard = false;
    let showImport = false;
    let title = "";

    const handleShowCard = () => (showCard = !showCard);
    const handleShowImportCard = () => (showImport = !showImport);

    let dropDownOptions = [
        { value: "add", label: "Add Contacts" },
        { value: "import", label: "Import from CSV" },
    ];
</script>

<div
    class="flex items-center bg-white w-11/12 mx-auto mt-10 py-4 px-6 rounded-md text-sm"
>
    <div class="mr-auto">Contacts</div>
    <DropdownButton
        on:add-card={handleShowCard}
        on:import-card={handleShowImportCard}
        title="Add Contacts"
        {dropDownOptions}
    />

    {#if showCard}
        <AddCard title="Add New Contact" on:close-card={handleShowCard}>
            <AddForm />
        </AddCard>
    {/if}

    {#if showImport}
        <AddCard title="Import Contact" on:close-card={handleShowImportCard}>
            <ImportCard />
        </AddCard>
    {/if}
</div> -->
