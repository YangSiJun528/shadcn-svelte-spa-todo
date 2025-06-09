export class SimpleMapDBSvelte {
    private _store = new Map<number, Task>();
    private _version: number = $state(0);

    get version() {
        return this._version;
    }

    set(key: number, value: Task) {
        this._store.set(key, value);
        this.updateVersion();
    }

    get(key: number) {
        return this._store.get(key);
    }

    getAll() {
        return Array.from(this._store.values());
    }

    delete(key: number) {
        this._store.delete(key);
        this.updateVersion();
    }

    clear() {
        this._store.clear();
        this.updateVersion();
    }

    private updateVersion() {
        this._version = this._version + 1;
    }
}

export type Task = {
    id: number;
    title: string;
    isDone: boolean;
};
