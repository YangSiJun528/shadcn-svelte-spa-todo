<script lang="ts">
    import * as Table from "$lib/components/ui/table/index.js";
    import type {SimpleMapDB, Task} from "$lib/db/SimpleMapDB";
    import {derived} from "svelte/store";
    import {Button} from "$lib/components/ui/button";
    import {Checkbox} from "$lib/components/ui/checkbox";
    import {Delete, Pen} from '@lucide/svelte/icons';

    let {db}: { db: SimpleMapDB } = $props();

    // DB 버전을 구독하여 반응형으로 만들기
    let taskStores = derived(db.version, () => db.getAll());

    // 편집 중인 할 일들의 ID - 배열로 관리하여 반응성 보장
    let updateToggleTaskIds: number[] = $state([]);

    function toggleUpdateTaskForm(event: Event, task: Task) {
        event.preventDefault();

        if (updateToggleTaskIds.includes(task.id)) {
            // 배열에서 제거 - 새 배열 생성으로 반응성 보장
            updateToggleTaskIds = updateToggleTaskIds.filter(id => id !== task.id);
        } else {
            // 배열에 추가 - 새 배열 생성으로 반응성 보장
            updateToggleTaskIds = [...updateToggleTaskIds, task.id];
        }
    }

    function updateTask(event: Event, task: Task) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const newTitle = formData.get('title') as string;

        if (newTitle && newTitle.trim() !== task.title) {
            db.set(task.id, {...task, title: newTitle.trim()});
        }

        // 폼 닫기
        updateToggleTaskIds = updateToggleTaskIds.filter(id => id !== task.id);
    }

    function deleteTask(event: Event, task: Task) {
        event.preventDefault();
        db.delete(task.id);
    }

    function toggleTask(event: Event, task: Task) {
        event.preventDefault();
        const updated = {...task, isDone: !task.isDone};
        db.set(task.id, updated);
    }
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
                                <Checkbox
                                        checked={task.isDone}
                                        onclick={(event) => toggleTask(event, task)}
                                        class="size-5"
                                />
                            </div>
                        </Table.Cell>
                        <Table.Cell class="font-medium py-4">
                            <div
                                    class="min-w-0 truncate"
                                    class:line-through={task.isDone}
                                    class:text-muted-foreground={task.isDone}
                            >
                                {task.title}
                            </div>
                        </Table.Cell>
                        <Table.Cell class="text-center">
                            <div class="flex justify-center gap-2">
                                <Button
                                        onclick={(event) => toggleUpdateTaskForm(event, task)}
                                        variant="outline"
                                        size="icon"
                                        class="h-8 w-8"
                                >
                                    <Pen class="h-4 w-4"/>
                                </Button>
                                <Button
                                        onclick={(event) => deleteTask(event, task)}
                                        variant="outline"
                                        size="icon"
                                        class="h-8 w-8 hover:text-destructive-foreground"
                                >
                                    <Delete class="h-4 w-4"/>
                                </Button>
                            </div>
                        </Table.Cell>
                    </Table.Row>

                    {#if updateToggleTaskIds.includes(task.id)}
                        <Table.Row class="bg-muted/10">
                            <Table.Cell></Table.Cell>
                            <Table.Cell colspan="2" class="py-2">
                                <form onsubmit={(e) => updateTask(e, task)} class="flex items-center gap-2">
                                    <input
                                            type="text"
                                            name="title"
                                            value={task.title}
                                            class="flex-1 border rounded p-1"
                                            placeholder="새 제목 입력"
                                    />
                                    <Button type="submit" size="icon" class="h-8 w-8">
                                        저장
                                    </Button>
                                    <Button
                                            type="button"
                                            onclick={(event) => toggleUpdateTaskForm(event, task)}
                                            size="icon"
                                            class="h-8 w-8"
                                    >
                                        취소
                                    </Button>
                                </form>
                            </Table.Cell>
                        </Table.Row>
                    {/if}
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
