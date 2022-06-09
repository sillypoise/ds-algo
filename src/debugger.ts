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
    let stack: [TreeNode | null, number][] = [[root, 1]];
    let res = 0;

    while (stack.length) {
        let [node, depth] = stack.pop();
        if (node) {
            res = Math.max(res, depth);
            stack.push([node.left, depth++]);
            stack.push([node.right, depth++]);
        }
    }
    return res;
}

let c1 = new TreeNode(3);
let c2 = new TreeNode(8);
let root = new TreeNode(15, c1, c2);

MaximumDepthOfBinaryTree(root);
