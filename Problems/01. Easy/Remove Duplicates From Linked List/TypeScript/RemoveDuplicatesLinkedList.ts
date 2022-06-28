class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = !val ? 0 : val;
        this.next = !next ? null : next;
    }
}

function RemoveDuplicatesLinkedList(head: ListNode | null): ListNode | null {
    return head;
}

function S1_RemoveDuplicatesLinkedList(head: ListNode | null): ListNode | null {
    let curr = head;

    while (curr !== null) {
        let nextDistinct = curr.next;
        while (nextDistinct !== null && nextDistinct.val == curr.val) {
            nextDistinct = nextDistinct.next;
        }
        curr.next = nextDistinct;
        curr = nextDistinct;
    }
    return head;
}

let ll = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 4,
                    next: {
                        val: 4,
                        next: {
                            val: 5,
                            next: {
                                val: 6,
                                next: {
                                    val: 6,
                                    next: null,
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};

S1_RemoveDuplicatesLinkedList(ll);
