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

function MaximumDepthOfBinaryTree(root: TreeNode | null): number {
    return;
}

function S1_MaximumDepthOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0;

    return (
        1 +
        Math.max(
            MaximumDepthOfBinaryTree(root.left ? root.left : null),
            MaximumDepthOfBinaryTree(root.right ? root.right : null)
        )
    );
}

function S2_MaximumDepthOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0;

    let queue: TreeNode[] = [root];
    let depth = 1;

    while (queue.length) {
        const children = [];
        for (const node of queue) {
            if (!node) continue;
            if (node.left) children.push(node.left);
            if (node.right) children.push(node.right);
        }
        if (children.length) {
            depth++;
        }
        queue = children;
    }
    return depth;
}

function S3_MaximumDepthOfBinaryTree(root: TreeNode | null): number {
    // TODO
}

export {};
