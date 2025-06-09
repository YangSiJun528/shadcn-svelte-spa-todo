<script lang="ts">
    import TodoInput from "$lib/components/TodoInput.svelte";
    import TodoTaskTable from "$lib/components/TodoTaskTable.svelte";
    import {SimpleMapDBSvelte} from "$lib/db/SimpleMapDB.svelte"

    let db = new SimpleMapDBSvelte();
</script>

<div class="container mx-auto px-4 py-8 max-w-6xl">
    <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-foreground mb-2">TODO</h1>
    </div>

    <TodoInput {db} />
    <TodoTaskTable {db}/>
</div>
