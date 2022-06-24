function MeetingRooms(intervals: number[]): boolean {
    return false;
}

function S1_MeetingRooms(intervals: [number, number][]): boolean {
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < intervals.length; i++) {
        let i1 = intervals[i - 1];
        let i2 = intervals[i];

        if (i1[1] > i2[0]) return false;
    }
    return true;
}

S1_MeetingRooms([
    [5, 10],
    [0, 30],
    [15, 20],
]);
S1_MeetingRooms([
    [5, 8],
    [9, 15],
]);
