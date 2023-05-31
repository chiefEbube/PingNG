<script>
    let userName = "Rick Adam";
</script>

<nav class="bg-white w-screen py-4 px-8 flex text-slate-950">
    <div class="mr-auto">
        <h2 class="font-semibold text-xl pl-8">LOGO</h2>
    </div>
    <div class="flex gap-6 items-center text-xs">
        <i class="fa-solid fa-magnifying-glass" />
        <i class="fa-regular fa-bell" />
        <div>
            <img src="./src/images/user-profile-photo.jpg" alt="" class="w-5 rounded-full"/>
        </div>
        <span >{userName}</span>
        <i class="fa-solid fa-chevron-down" />
    </div>
</nav>