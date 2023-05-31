<script>
    import Navbar from "./navbar.svelte";
    import Random from "./random.svelte";
    import Sidebar from "./sidebar.svelte";
    import Table from "./table.svelte";
    import TopCard from "./top_card.svelte";
</script>

<main>
    <div class="container absolute">

        <div>
            <Navbar />
        </div>

        <div>
            <Sidebar />

            <!-- main content -->
            <div>
                
                <!-- top_card -->
                <TopCard />
                
                <!-- Table -->
                <Table />
            </div>
            
        </div>

        <Random><p>Hello</p></Random>
    </div>
</main>