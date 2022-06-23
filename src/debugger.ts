let t = {
    val: 10,
    left: {
        val: 5,
        left: {
            val: 2,
            left: {
                val: 1,
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
        val: 15,
        left: {
            val: 13,
            left: null,
            right: {
                val: 14,
                left: null,
                right: null,
            },
        },
        right: {
            val: 22,
            left: null,
            right: null,
        },
    },
};

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

function FindClosestValueInBST(root: TreeNode | null, target: number): number {
    return 0;
}

function S1_FindClosestValueInBST(
    root: TreeNode | null,
    target: number
): number {
    let closest = Infinity;
    let curr = root;

    while (curr) {
        if (Math.abs(target - curr.val) < Math.abs(target - closest)) {
            closest = curr.val;
        }

        if (target < curr.val) {
            curr = curr.left;
        } else if (target > curr.val) {
            curr = curr.right;
        } else {
            break;
        }
    }

    return closest;
}

function S2_FindClosestValueInBST(
    root: TreeNode | null,
    target: number
): number {
    function recursiveHelper(
        node: TreeNode | null,
        target: number,
        closest: number = Infinity
    ): number {
        if (!node) return closest;
        if (Math.abs(target - node.val) < Math.abs(target - closest)) {
            closest = node.val;
        }
        if (target < node.val) {
            return recursiveHelper(node.left, target, closest);
        } else if (target > node.val) {
            return recursiveHelper(node.right, target, closest);
        } else {
            return closest;
        }
    }

    return recursiveHelper(root, target, Infinity);
}

S1_FindClosestValueInBST(t, 12);
S2_FindClosestValueInBST(t, 12);
