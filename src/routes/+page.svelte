<script>
    import { onMount } from "svelte";
    import Navbar from "./navbar.svelte";
    import Sidebar from "./sidebar.svelte";
    import Table from "./table.svelte";
    import TopCard from "./top_card.svelte";

    let links = [];

    let perPage = 10;
    let sort = {"first_name":"desc"};
    let initialUrl = "http://localhost:8000/api/contact-list?page=1"

    let headings = ["First Name", "Last Name", "Phone Number"];

    let contacts = [];

    const updateTable = async (url) => {
        let request = await fetch(
            `${url}&sort=${JSON.stringify(sort)}&perPage=${perPage}`
        );

        let response = await request.json();
        contacts = response.data;
        links = response.links;
        
    };

    onMount(() => updateTable(initialUrl));
</script>

<main class="relative w-full min-h-screen">
    <div>
        <Navbar />
    </div>

    <div class="flex w-full">
        <Sidebar />

        <!-- main content -->
        <div class="w-full">
            <!-- top_card -->
            <TopCard on:add_contact={updateTable} />

            <!-- Table -->
            <Table {headings} {links} on:paginationClick={ (e) => updateTable(e.detail.url) }>
                {#each contacts as contact}
                    <tr>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                            >{contact.first_name}</td
                        >
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                            >{contact.last_name}</td
                        >
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                            >{contact.phone_no}</td
                        >
                    </tr>
                {/each}
            </Table>
        </div>
    </div>
</main>

<!-- 
    hint: event to update contact array
 -->
