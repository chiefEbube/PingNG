<script>
    import FormFields from "./formFields.svelte";
    import Button from "./button.svelte";
    let contactInfo = [];

    const handleSubmit = () => {
        
    }
</script>

<form class="my-10" on:submit|preventDefault={handleSubmit}>
    <FormFields />
    <div class="flex items-center gap-5">
        <i class="fa-solid fa-plus bg-slate-200 py-2 px-4 text-lg rounded-md text-slate-400 cursor-pointer" />
        <Button btnName="Save Contact" />
    </div>
</form>
