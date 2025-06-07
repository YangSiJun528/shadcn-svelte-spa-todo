<script lang="ts">
    import TodoInput from "$lib/components/TodoInput.svelte";
    import TodoTaskTable from "$lib/components/TodoTaskTable.svelte";
    import {SimpleMapDB} from "$lib/db/SimpleMapDB.js"

    //DB를 반응형으로 정의해야 전파?가 됨.
    let db = $state(new SimpleMapDB())
</script>

<h1>My TODO</h1>
<TodoInput {db} />
<TodoTaskTable {db}/>

