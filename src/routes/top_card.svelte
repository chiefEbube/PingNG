<script>
    import DropdownButton from "./dropdown_button.svelte";
    import Random from "./random.svelte";

    let dropDownOptions = ["Add Contacts", "Import from CSV"]

</script> 
<div class="flex items-center bg-white w-11/12 mx-auto mt-10 py-4 px-6 rounded-md text-sm">
    <div class="mr-auto">Contacts</div>
    <DropdownButton title="Add Contacts" {dropDownOptions}/>
    <!-- <Random><p>Slot in drop down</p></Random> -->

</div>