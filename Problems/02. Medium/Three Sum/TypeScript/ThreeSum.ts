function ThreeSum(nums: number[]): number[][] {
    return [];
}

function S1_ThreeSum(nums: number[]): number[][] {
    let res: number[][] = [];
    nums.sort((a, b) => a - b);

    for (let [i, num] of nums.entries()) {
        if (i > 0 && num === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let threeSum = num + nums[left] + nums[right];

            if (threeSum > 0) {
                right--;
            } else if (threeSum < 0) {
                left++;
            } else {
                res.push([num, nums[left], nums[right]]);
                left++;

                while (nums[left] === nums[left - 1] && left < right) {
                    left++;
                }
            }
        }
    }
    return res;
}

S1_ThreeSum([-1, 0, 1, 2, -1, -4]);
S1_ThreeSum([]);
S1_ThreeSum([0]);
