<script lang="ts">
    import * as Table from "$lib/components/ui/table/index.js";
    import type {SimpleMapDB} from "$lib/db/SimpleMapDB";
    import {derived} from "svelte/store";
    import {Button} from "$lib/components/ui/button";
    import {Checkbox} from "$lib/components/ui/checkbox";
    import { Delete, Pen } from '@lucide/svelte/icons';

    let {db}: { db: SimpleMapDB } = $props();

    // DB 버전을 구독하여 반응형으로 만들기
    // Store가 뭐 전역으로 관리해주는거 같은데 잘 모르겠음.
    let taskStores = derived(db.version, () => db.getAll());
</script>

<Table.Root>
    <Table.Body>
        {#each $taskStores as task (task.id)}
            <Table.Row>
                <Table.Cell><Checkbox class="size-5"/></Table.Cell>
                <Table.Cell>{task.title}</Table.Cell>
                <Table.Cell class="text-right">
                    <Button variant="outline" size="icon">
                        <Pen />
                    </Button>
                    <Button variant="outline" size="icon">
                        <Delete />
                    </Button>
                </Table.Cell>
            </Table.Row>
        {/each}
    </Table.Body>
</Table.Root>

