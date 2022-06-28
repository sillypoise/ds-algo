function S3_GenerateDocument(chars: string, doc: string): boolean {
    let hash: Record<string, number> = {};

    for (let char of chars) {
        if (!hash[char]) {
            hash[char] = 0;
        }

        hash[char] += 1;
    }

    for (let char of doc) {
        if (!hash[char] || hash[char] === 0) {
            return false;
        }

        hash[char] - +1;
    }

    return true;
}

S3_GenerateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!");
