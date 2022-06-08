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
function InvertBinaryTree(root: TreeNode | null): TreeNode | null {
    let queue = [root];
    while (queue.length) {
        let child = [];
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

let c1 = new TreeNode(3);
let c2 = new TreeNode(8);
let root = new TreeNode(15, c1, c2);

InvertBinaryTree(root);
