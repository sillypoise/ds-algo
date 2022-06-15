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

function DiameterOfBinaryTree(root: TreeNode | null): number {
    return 0;
}

function S1_DiameterOfBinaryTree(root: TreeNode | null): number {
    return 0;
}
