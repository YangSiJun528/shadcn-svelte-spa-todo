export class SimpleMapDB {
    private store = new Map();

    // 추가/수정 (덮어씌우기)
    set(key: string, value: any) {
        this.store.set(key, value);
    }

    // 조회
    get(key: string) {
        return this.store.get(key);
    }

    // 전체 조회
    getAll() {
        return Array.from(this.store.values());
    }

    // 삭제
    delete(key: string) {
        return this.store.delete(key);
    }
}
