<script lang="ts">
    import * as Table from "$lib/components/ui/table/index.js";
    import type {SimpleMapDB} from "$lib/db/SimpleMapDB";
    import {derived} from "svelte/store";
    import {Button} from "$lib/components/ui/button";
    import {Checkbox} from "$lib/components/ui/checkbox";
    import { Delete, Pen } from '@lucide/svelte/icons';

    let {db}: { db: SimpleMapDB } = $props();

    // DB 버전을 구독하여 반응형으로 만들기
    let taskStores = derived(db.version, () => db.getAll());
</script>

<div class="w-full max-w-2xl mx-auto">
    <div class="rounded-lg border shadow-sm overflow-hidden">
        <Table.Root>
            <Table.Header>
                <Table.Row class="bg-muted/50">
                    <Table.Head class="w-12 text-center">완료</Table.Head>
                    <Table.Head class="text-left">할 일</Table.Head>
                    <Table.Head class="w-32 text-center">작업</Table.Head>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {#each $taskStores as task (task.id)}
                    <Table.Row class="hover:bg-muted/30 transition-colors">
                        <Table.Cell class="text-center">
                            <div class="flex justify-center">
                                <Checkbox class="size-5"/>
                            </div>
                        </Table.Cell>
                        <Table.Cell class="font-medium py-4">
                            <div class="min-w-0 truncate">
                                {task.title}
                            </div>
                        </Table.Cell>
                        <Table.Cell class="text-center">
                            <div class="flex justify-center gap-2">
                                <Button variant="outline" size="icon" class="h-8 w-8">
                                    <Pen class="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon" class="h-8 w-8 hover:bg-destructive hover:text-destructive-foreground">
                                    <Delete class="h-4 w-4" />
                                </Button>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                {/each}
                {#if $taskStores.length === 0}
                    <Table.Row>
                        <Table.Cell colspan="3" class="text-center py-8 text-muted-foreground">
                            아직 할 일이 없습니다. 새로운 할 일을 추가해보세요!
                        </Table.Cell>
                    </Table.Row>
                {/if}
            </Table.Body>
        </Table.Root>
    </div>
</div>
