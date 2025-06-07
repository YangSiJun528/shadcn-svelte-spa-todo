import {writable, type Writable} from "svelte/store";

export class SimpleMapDB {
    private _store = new Map<number, any>();
    private _version: Writable<number> = writable(0);

    get version() {
        return this._version;
    }

    set(key: number, value: any) {
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
        this._version.update(v => v + 1);
    }
}
