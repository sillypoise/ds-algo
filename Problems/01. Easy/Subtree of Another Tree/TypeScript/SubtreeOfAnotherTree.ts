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

function SubtreeOfAnotherTree(s: TreeNode | null, t: TreeNode | null): boolean {
    return true;
}

function SameTree(s: TreeNode | null, t: TreeNode | null): boolean {
    if (!s && !t) return true;
    if (!s || !t) return false;

    if (s.val !== t.val) return false;

    return SameTree(s.left!, t.left!) && SameTree(s.right!, t.right!);
}

function S1_SubtreeOfAnotherTree(
    root: TreeNode | null,
    subRoot: TreeNode | null
): boolean {
    if (!subRoot) return true;
    if (!root) return false;

    if (SameTree(root, subRoot)) return true;

    return (
        S1_SubtreeOfAnotherTree(root.left!, subRoot) ||
        S1_SubtreeOfAnotherTree(root.right!, subRoot)
    );
}

export {};
