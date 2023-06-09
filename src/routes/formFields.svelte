<script>
    let firstName;
    let lastName;
    let phoneNumber;
</script>

<div class="mt-5">
    <label for="firstName">Enter Contact First Name</label>
    <input type="text" bind:value={firstName} class="border border-slate-400 p-3 my-2 w-full"/>
</div>

<div class="mt-5">
    <label for="lastName" >Enter Contact Last Name</label>
    <input type="text" bind:value={lastName} class="border border-slate-400 p-3 my-2 w-full"/>
</div>

<div class="mt-5">
    <label for="phoneNumber">Enter Contact Phone Number</label>
    <input type="text" bind:value={phoneNumber} class="border border-slate-400 p-3 my-2 w-full"/>
</div>

<div class="bg-slate-300 w-full h-0.5 mt-10 rounded-md"></div>