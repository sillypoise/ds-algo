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
    return 0;
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

// BFS
function S2_MaximumDepthOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0;

    let queue: TreeNode[] = [root];
    let depth = 0;

    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (node) {
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }
        depth++;
    }
    return depth;
}

// BFS V2
function V2_S2_MaximumDepthOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0;

    let queue: TreeNode[] = [root];
    let depth = 0;

    while (queue.length) {
        const children: TreeNode[] = [];
        for (let node of queue) {
            if (!node) continue;
            if (node.left) children.push(node.left);
            if (node.right) children.push(node.right);
        }
        depth++;
        queue = children;
    }
    return depth;
}

// Iterative DFS

function S3_MaximumDepthOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0;

    let stack: [TreeNode, number][] = [[root, 1]];
    let maxDepth = 1;

    while (stack.length) {
        let [node, depth] = stack.pop()!;

        if (node) {
            maxDepth = Math.max(maxDepth, depth);
            if (node.left) stack.push([node.left, depth + 1]);

            if (node.right) stack.push([node.right, depth + 1]);
        }
    }
    return maxDepth;
}

export {};
