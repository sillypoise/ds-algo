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

let t: TreeNode = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null,
        },
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

function S1_DiameterOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0;
    let maxLength = 0;

    function dfs(node: TreeNode): number {
        if (!node) return 0;

        let left = 0;
        let right = 0;

        if (node.left) left = dfs(node.left);
        if (node.right) right = dfs(node.right);

        maxLength = Math.max(maxLength, left + right);
        return Math.max(left, right) + 1;
    }
    dfs(root);
    return maxLength;
}

S1_DiameterOfBinaryTree(t);
