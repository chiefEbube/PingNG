<script>
    import { onMount } from "svelte";
    import Navbar from "./navbar.svelte";
    import Sidebar from "./sidebar.svelte";
    import Table from "./table.svelte";
    import TopCard from "./top_card.svelte";

    let headings = [
        'First Name',
        'Last Name',
        'Phone Number'
    ]

    let contacts = []

    const updateContact = (contactArray, contact) => {
                contactArray = contact
            }

    const updateTable = async () =>{
            let request = await fetch(
            'http://localhost:8000/api/contact-list?sort={"first_name":"desc"}&perPage=10'
        );

        let response = await request.json();
        contacts = response.data;
        }

    

   onMount(updateTable)

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
            <TopCard on:add_contact={updateContact(contacts, e.detail)} />

            <!-- Table -->
            <Table {headings}>
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
