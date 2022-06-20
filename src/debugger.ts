interface BSTNode {
    val: number;
    left?: BSTNode | null;
    right?: BSTNode | null;
}

class BSTNode {
    constructor(
        public val: number,
        public left?: BSTNode | null,
        public right?: BSTNode | null
    ) {
        this.val = !val ? 0 : val;
        this.left = !left ? null : left;
        this.right = !right ? null : right;
    }
}

function S1_LowestCommonAncestorOfBST(
    root: BSTNode | null,
    p: BSTNode | null,
    q: BSTNode | null
): BSTNode | null {
    let curr = root;
    if (!p || !q) return null;

    while (curr) {
        if (p.val > curr.val && q.val > curr.val) {
            curr = curr.right ? curr.right : null;
        } else if (p.val < curr.val && q.val < curr.val) {
            curr = curr.left ? curr.left : null;
        } else {
            return curr;
        }
    }
    return root;
}

let t1 = {
    val: 6,
    left: {
        val: 2,
        left: {
            val: 0,
            left: null,
            right: null,
        },
        right: {
            val: 4,
            left: {
                val: 3,
                left: null,
                right: null,
            },
            right: {
                val: 5,
                left: null,
                right: null,
            },
        },
    },
    right: {
        val: 8,
        left: {
            val: 7,
            left: null,
            right: null,
        },
        right: {
            val: 9,
            left: null,
            right: null,
        },
    },
};

let p = {
    val: 2,
};

let q = {
    val: 8,
};

S1_LowestCommonAncestorOfBST(t1, p, q);
