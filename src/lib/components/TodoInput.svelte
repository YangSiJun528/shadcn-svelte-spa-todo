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

<div class="flex justify-center mb-6">
    <form {onsubmit} class="flex w-full max-w-md items-center space-x-2">
        <Input
                type="text"
                placeholder="할 일을 입력하세요..."
                bind:value={inputValue}
                class="flex-1"
        />
        <Button type="submit" class="px-6">추가</Button>
    </form>
</div>
