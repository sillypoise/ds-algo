class TimeMap {
    constructor() {}

    set(key: string, value: string, timestamp: number): void {}

    get(key: string, timestamp: number): string {
        return "";
    }
}

class S1_TimeMap {
    store: Record<string, [string, number][]>;
    constructor() {
        this.store = {};
    }

    set(key: string, value: string, timestamp: number): void {
        if (!(key in this.store)) {
            this.store[key] = [];
        }
        this.store[key].push([value, timestamp]);
    }

    get(key: string, timestamp: number): string {
        let res = "";

        let values = this.store[key] ? this.store[key] : [];

        let left = 0;
        let right = values.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (values[mid][1] <= timestamp) {
                res = values[mid][0];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return res;
    }
}

let obj = new S1_TimeMap();
obj.set("foo", "bar", 1);
obj.get("foo", 1);
obj.get("foo", 3);
obj.set("foo", "bar2", 4);
obj.get("foo", 4);
obj.get("foo", 5);
