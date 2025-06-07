<script lang="ts">
    import TodoInput from "$lib/components/TodoInput.svelte";
    import {SimpleMapDB} from "$lib/db/SimpleMapDB.js"

    let db = new SimpleMapDB();
</script>

<h1>My TODO</h1>
<TodoInput {db}></TodoInput>

