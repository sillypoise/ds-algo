from collections import deque


def MaximumDepthOfBinaryTree(root) -> int:
    if not root:
        return 0
    queue = deque([root])
    depth = 0

    while queue:
        for i in range(len(queue)):
            node = queue.popleft()
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        depth += 1
    return depth