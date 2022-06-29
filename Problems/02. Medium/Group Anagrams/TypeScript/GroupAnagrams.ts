function GroupAnagrams(strs: string[]): string[] {
    return [];
}

function S1_GroupAnagrams(strs: string[]): string[][] {
    let map: Map<string, string[]> = new Map();

    for (let str of strs) {
        let key = keyGen(str);

        if (map.has(key)) {
            map.get(key)?.push(str);
        } else {
            map.set(key, [str]);
        }
    }
    return [...map.values()];
}

function keyGen(str: string): string {
    let key: number[] = new Array(26).fill(0);

    for (let c of str) {
        key[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    return key.join(",");
}

S1_GroupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
