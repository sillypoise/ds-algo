interface TreeNode {
    val: number;
    left?: TreeNode | null;
    right?: TreeNode | null;
}

class TreeNode {
    constructor(
        public val: number,
        public left?: TreeNode | null,
        public right?: TreeNode | null
    ) {
        this.val = !val ? 0 : val;
        this.left = !left ? null : left;
        this.right = !right ? null : right;
    }
}

function S1_BalancedBinaryTree(root: TreeNode | null): boolean {
    let balanced = true;

    function dfs(node: TreeNode | null): number {
        if (!node) return 0;

        let left = 0;
        let right = 0;

        if (node.left) left = dfs(node.left);
        if (node.right) right = dfs(node.right);

        if (Math.abs(left - right) > 1) {
            balanced = false;
        }
        return 1 + Math.max(left, right);
    }

    dfs(root);

    return balanced;
}

let t1 = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null,
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
};

S1_BalancedBinaryTree(t1);
