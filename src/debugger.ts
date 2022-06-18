interface TreeNode {
    val?: number;
    left?: TreeNode | null;
    right?: TreeNode | null;
}

class TreeNode {
    constructor(
        public val?: number,
        public left?: TreeNode | null,
        public right?: TreeNode | null
    ) {
        this.val = !val ? 0 : val;
        this.left = !left ? null : left;
        this.right = !right ? null : right;
    }
}

function S1_SameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true;
    if (!p || !q) return false;

    if (p.val !== q.val) return false;

    return S1_SameTree(p.left!, q.left!) && S1_SameTree(p.right!, q.right!);
}

let t1 = {
    val: 10,
    left: {
        val: 7,
        left: null,
        right: {
            val: 5,
            left: null,
            right: null,
        },
    },
    right: {
        val: 3,
        left: null,
        right: null,
    },
};

let t2 = {
    val: 10,
    left: {
        val: 7,
        left: null,
        right: {
            val: 5,
            left: null,
            right: null,
        },
    },
    right: {
        val: 3,
        left: null,
        right: null,
    },
};

S1_SameTree(t1, t2);
