<script>
    let userName = "Rick Adam";
</script>

<nav class="bg-white w-full py-4 px-8 flex text-slate-950">
    <div class="mr-auto">
        <h2 class="font-semibold text-xl pl-8 cursor-pointer">LOGO</h2>
    </div>
    <div class="flex gap-6 items-center text-base">
        <i class="fa-solid fa-magnifying-glass cursor-pointer" />
        <div class="relative cursor-pointer">
            <i class="fa-regular fa-bell" />
            <div
                class="bg-red-500 w-2.5 aspect-square rounded-full absolute top-0 -right-1 z-20 m-0.5 border-2 border-white"
            />
        </div>
        <div class="cursor-pointer">
            <img
                src="./src/images/user-profile-photo.jpg"
                alt=""
                class="w-5 rounded-full"
            />
        </div>
        <span class="cursor-pointer">{userName}</span>
        <i class="fa-solid fa-chevron-down cursor-pointer" />
    </div>
</nav>
