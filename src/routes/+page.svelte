<script>
    import Navbar from "./navbar.svelte";
    import Sidebar from "./sidebar.svelte";
    import Table from "./table.svelte";
    import TopCard from "./top_card.svelte";
</script>

<main class="w-full min-h-screen relative">
    <div>
        <Navbar />
    </div>

    <div class="flex w-full">
        <Sidebar />

        <!-- main content -->
        <div class="w-full">
            <!-- top_card -->
            <TopCard />

            <!-- Table -->
            <Table />
        </div>
    </div>
</main>
