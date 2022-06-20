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

function LowestCommonAncestorOfBST(
    root: BSTNode | null,
    p: BSTNode | null,
    q: BSTNode | null
): BSTNode | null {
    return null;
}

// ITERATIVE
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

// RECURSIVE
function S2_LowestCommonAncestorOfBST(
    root: BSTNode | null,
    p: BSTNode | null,
    q: BSTNode | null
): BSTNode | null {
    let curr = root;
    if (!p || !q) return null;

    if (curr) {
        if (p.val > curr.val && q.val > curr.val)
            return S2_LowestCommonAncestorOfBST(
                curr.right ? curr.right : null,
                p,
                q
            );
        else if (p.val < curr.val && q.val < curr.val)
            return S2_LowestCommonAncestorOfBST(
                curr.left ? curr.left : null,
                p,
                q
            );
        else return root;
    }

    return root;
}

export {};
