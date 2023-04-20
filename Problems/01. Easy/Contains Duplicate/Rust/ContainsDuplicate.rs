
fn contains_dulicate(nums: &mut Vec<i32>) -> bool {
    false
}

// Solution 2: Sort the array and check if any adjacent elements are equal

fn S2_contains_duplicate(nums: &mut Vec<i32>) -> bool {
    nums.sort(); // O(n log n)

    for i in 0..nums.len() - 1 {
        if nums[i] == nums[i + 1] {
            return true
        }
    }

    false

    // you can also use slice.windows method
    // for win in nums[..].windows(2) {
    //     if win[0] == win[1] {
    //         return true
    //     }
    // }
    
}


// Main

fn main() {
    let mut nums = vec![1, 5, 3, 2, 5, 4];


    if S2_contains_duplicate(&mut nums) {
        println!("Vector contains duplicates.");
    } else {
        println!("Vector does not containe duplicates.")
    }
}


