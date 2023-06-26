<script>
    import DropdownButton from "./dropdown_button.svelte";
    import AddCard from "./addCard.svelte";
    import AddForm from "./addForm.svelte";
    import ImportCard from "./importCard.svelte";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let showCard = false;
    let showImport = false;
    let showAdd = false;
    let title = "";

    const addContact = (e) => {
        dispatch("add_contact");
    };

    const closeCard = () =>{
        showCard = false
        showImport = false
        showAdd = false
    }

    const handleShowCard = (e) => {
        showCard = true
        if (e.detail.value === "add") {
            showAdd = true;
            title = "Add Contact"
        } else if (e.detail.value === "import") {
            showImport = true;
            title = "Import Contact"
        }
    };

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
        on:option-clicked={(e) => handleShowCard(e)}
        title="Add Contacts"
        {dropDownOptions}
    />

    {#if showCard}
        <AddCard {title} on:close-card={closeCard}>
            {#if showAdd}
                <AddForm on:addContact={addContact} />
            {/if}

            {#if showImport}
                <ImportCard />
            {/if}
        </AddCard>
    {/if}
</div>