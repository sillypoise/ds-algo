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

function RemoveNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    return null;
}

function S1_RemoveNthFromEnd(
    head: ListNode | null,
    n: number
): ListNode | null {
    let dummy = new ListNode(0, head);
    let left: ListNode | null = dummy;
    let right = head;

    while (n > 0 && right) {
        right = right.next;
        n--;
    }

    while (right) {
        left = left && left.next;
        right = right.next;
    }

    if (left) left.next = left.next && left.next.next;
    return dummy.next;
}

let t = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                },
            },
        },
    },
};

S1_RemoveNthFromEnd(t, 2);
export {};
