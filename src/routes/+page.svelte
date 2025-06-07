<script lang="ts">
    import TodoInput from "$lib/components/TodoInput.svelte";
    import TodoTaskTable from "$lib/components/TodoTaskTable.svelte";
    import {SimpleMapDB} from "$lib/db/SimpleMapDB.js"

    //DB를 반응형 상태로 정의해야 변화가 감지됨.
    let db = $state(new SimpleMapDB())
</script>

<div class="container mx-auto px-4 py-8 max-w-6xl">
    <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-foreground mb-2">나의 TODO</h1>
        <p class="text-muted-foreground">할 일을 효율적으로 관리하세요</p>
    </div>

    <TodoInput {db} />
    <TodoTaskTable {db}/>
</div>
