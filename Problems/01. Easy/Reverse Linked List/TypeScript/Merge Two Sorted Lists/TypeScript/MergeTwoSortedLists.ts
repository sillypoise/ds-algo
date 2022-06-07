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

function MergeTwoSortedLists(list1: ListNode | null, list2: ListNode | null) {
    return;
}

function S1_MergeTwoSortedLists(
    list1: ListNode | null,
    list2: ListNode | null
) {
    let dummy = new ListNode();
    let tail = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    if (list1) {
        tail.next = list1;
    } else if (list2) {
        tail.next = list2;
    }
    return dummy.next;
}

export {};
