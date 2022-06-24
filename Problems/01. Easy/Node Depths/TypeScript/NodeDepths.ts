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

function NodeDepths(root: TreeNode | null): number {
    return 0;
}

function S1_NodeDepths(root: TreeNode | null): number {
    if (!root) return 0;

    let depthSum = 0;

    const stack: [TreeNode | null, number][] = [[root, 0]];

    while (stack.length) {
        let [node, depth]: [TreeNode | null, number] = stack.pop()!;
        if (!node) continue;

        depthSum += depth;

        stack.push([node.left, depth + 1]);
        stack.push([node.right, depth + 1]);
    }

    return depthSum;
}

function S2_NodeDepths(root: TreeNode | null): number {
    function dfs(node: TreeNode | null, depth: number = 0): number {
        if (!node) return 0;

        return depth + dfs(node.left, depth + 1) + dfs(node.right, depth + 1);
    }

    return dfs(root, 0);
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
        left: {
            val: 6,
            left: null,
            right: {
                val: 14,
                left: null,
                right: null,
            },
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
};

S1_NodeDepths(t);

export {};
