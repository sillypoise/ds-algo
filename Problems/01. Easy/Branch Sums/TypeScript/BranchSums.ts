interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

class TreeNode {
    constructor(
        public val: number,
        public left: TreeNode | null,
        public right: TreeNode | null
    ) {
        this.val = !val ? 0 : val;
        this.left = !left ? null : left;
        this.right = !right ? null : right;
    }
}

function BranchSums(root: TreeNode | null): number[] {
    return [];
}

function S1_BranchSums(root: TreeNode | null): number[] {
    const sums: number[] = [];

    function dfs(
        node: TreeNode | null,
        pathSum: number,
        sums: number[]
    ): number[] | void {
        if (!node) return;

        let newPathSum = pathSum + node.val;

        if (!node.left && !node.right) {
            sums.push(newPathSum);
            return;
        }

        dfs(node.left, newPathSum, sums);
        dfs(node.right, newPathSum, sums);
    }

    dfs(root, 0, sums);
    return sums;
}

let t: TreeNode = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 8,
                left: null,
                right: null,
            },
            right: {
                val: 9,
                left: null,
                right: null,
            },
        },
        right: {
            val: 5,
            left: {
                val: 10,
                left: null,
                right: null,
            },
            right: null,
        },
    },
    right: {
        val: 3,
        left: {
            val: 6,
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

S1_BranchSums(t);
