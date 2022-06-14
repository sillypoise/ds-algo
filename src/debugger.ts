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

let t = new TreeNode(3);
let v = new TreeNode(5);
let u = new TreeNode(8, t, v);

function S2_MaximumDepthOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0;

    let stack: [TreeNode, number][] = [[root, 1]];
    let depth = 0;

    while (stack.length) {
        let node = stack.pop();
        if (node) {
            depth = Math.max(depth, node[1]);
            if (node[0].left) {
                stack.push([node[0].left, node[1] + 1]);
            }
            if (node[0].right) {
                stack.push([node[0].right, node[1] + 1]);
            }
        }
    }
    return depth;
}

function S3_MaximumDepthOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0;

    let stack: TreeNode[] = [root];
    let depth = 1;

    while (stack.length) {
        let node = stack.pop();

        if (node) {
            if (node.left) {
                stack.push(node.left);
                depth++;
            }
            if (node.right) {
                stack.push(node.right);
                depth++;
            }
        }
    }
    return depth;
}

S3_MaximumDepthOfBinaryTree(u);
