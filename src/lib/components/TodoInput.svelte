<script lang="ts">
    import {Button} from "$lib/components/ui/button/index.js";
    import {Input} from "$lib/components/ui/input/index.js";
    import type {SimpleMapDB} from "$lib/db/SimpleMapDB";

    let {db}: { db: SimpleMapDB } = $props();

    let inputValue = $state('');

    function onsubmit(event: Event) {
        event.preventDefault();

        if (inputValue.trim()) {
            const id = Date.now()
            db.set(id, {
                id: id,
                title: inputValue,
                isDone: false
            });
            inputValue = ''; // 입력창 초기화
        }
        console.log(db);
    }
</script>

<form {onsubmit} class="flex w-full max-w-sm items-center space-x-2">
    <Input type="text" placeholder="todo" bind:value={inputValue}/>
    <Button type="submit">Add</Button>
</form>
