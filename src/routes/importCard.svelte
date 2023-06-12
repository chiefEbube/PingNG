<script>
    import Button from "./button.svelte";

</script>

<div class="my-10">
    <h1>Choose CSV File to Import</h1>

    <div class="border-dashed border-2 mt-5 grid gap-5 py-5">
        <input type="file" id="importBtn" class="hidden">
        <img src="./src/images/file-icon.png" alt="" class="w-1/6 mx-auto">
        <label for="importBtn" class="border-2 mx-auto px-2 py-1 cursor-pointer rounded-md text-xs bg-gray-300">Choose file to import</label>
    </div>
    <Button btnName="Import CSV"/>


    
</div>