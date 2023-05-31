<script>
    import DropdownButton from "./dropdown_button.svelte";
    import Random from "./random.svelte";

    let dropDownOptions = ["Add Contacts", "Import from CSV"]

</script>
<div class="absolute top-32 left-56">
    <div class="bg-white h-20">Contacts</div>
    <DropdownButton title="Add Contacts" {dropDownOptions}/>
    <!-- <Random><p>Slot in drop down</p></Random> -->

</div>