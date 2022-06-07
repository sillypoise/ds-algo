interface ListNode {
    val: number;
    next: ListNode | null;
}

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = !val ? 0 : val;
        this.next = !next ? null : next;
    }
}

// ITERATIVE
function S1_ReverseLinkedList(head: ListNode | null): ListNode | null {
    let curr = head;
    let prev = null;

    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// RECURSIVE
function S2_ReverseLinkedList(head: ListNode | null): ListNode | null {
    return recursiveHelper(head, null);

    function recursiveHelper(
        curr: ListNode | null,
        prev: ListNode | null
    ): ListNode | null {
        if (!curr) return prev;

        const next = curr.next;
        curr.next = prev;

        return recursiveHelper(next, curr);
    }
}
