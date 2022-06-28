function GenerateDocument(chars: string, doc: string): boolean {
    return false;
}

function S1_GenerateDocument(chars: string, doc: string): boolean {
    function countCharFreq(character: string, target: string) {
        let freq = 0;
        for (let char of target) {
            if (char == character) {
                freq++;
            }
        }
        return freq;
    }

    for (let char of doc) {
        let docFreq = countCharFreq(char, doc);
        let charFreq = countCharFreq(char, chars);

        if (docFreq > charFreq) {
            return false;
        }
    }
    return true;
}

function S2_GenerateDocument(chars: string, doc: string): boolean {
    function countCharFreq(character: string, target: string) {
        let freq = 0;
        for (let char of target) {
            if (char == character) {
                freq++;
            }
        }
        return freq;
    }

    let counted = new Set();

    for (let char of doc) {
        if (counted.has(char)) {
            continue;
        }
        let docFreq = countCharFreq(char, doc);
        let charFreq = countCharFreq(char, chars);

        if (docFreq > charFreq) {
            return false;
        }

        counted.add(char);
    }
    return true;
}

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
