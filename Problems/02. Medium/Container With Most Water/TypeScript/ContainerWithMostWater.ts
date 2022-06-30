function ContainerWithMostWater(heights: number[]): number {
    return -1;
}

function S1_ContainerWithMostWater(heights: number[]): number {
    // BRUTE FORCE
    let max = 0;
    for (let i = 0; i < heights.length; i++) {
        for (let j = i; j < heights.length; j++) {
            max = Math.max(max, (j - i) * Math.min(heights[i], heights[j]));
        }
    }
    return max;
}

function S2_ContainerWithMostWater(heights: number[]): number {
    let max = 0;
    let left = 0;
    let right = heights.length - 1;

    while (left < right) {
        let area = (right - left) * Math.min(heights[left], heights[right]);
        max = Math.max(max, area);

        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
}

S2_ContainerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]);
