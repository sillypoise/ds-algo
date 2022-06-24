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

function InvertBinaryTree(root: TreeNode | null): TreeNode | null {
    return root;
}

function S1_InvertBinaryTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    let temp = root.left ? root.left : null;
    root.left = root.right ? root.right : null;
    root.right = temp;

    InvertBinaryTree(root.left);
    InvertBinaryTree(root.right);

    return root;
}

function S2_InvertBinaryTree(root: TreeNode | null): TreeNode | null {
    let queue = [root];
    while (queue.length) {
        let child: TreeNode[] = [];
        for (let node of queue) {
            if (!node) continue;
            let temp = node.left;
            node.left = node.right;
            node.right = temp;
            if (node.left) {
                child.push(node.left);
            }
            if (node.right) {
                child.push(node.right);
            }
        }
        queue = child;
    }
    return root;
}

export {};
