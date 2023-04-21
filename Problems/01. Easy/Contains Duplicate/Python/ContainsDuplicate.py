from typing import List

def contains_duplicate(nums):
    return
    

# Solution 1: Brute Force
def S1_contains_duplicate(nums: List[int]) -> bool:
    for i in range(len(nums)):
        num_to_compare = nums[i]
        for j in range(i + 1, len(nums)):
            compare_against = nums[j]
            if num_to_compare == compare_against:
                return True
    return False

# Solution 2: Sort and Compare
def S2_contains_duplicate(nums: List[int]) -> bool:
    nums.sort()  # O(n log(n))
    for i in range(len(nums) - 1):  # O(n)
        p1 = i
        p2 = i + 1
        if nums[p1] == nums[p2]:
            return True
    return False

# Solution 3: Set (Hash Table)
def S3_contains_duplicate(nums: List[int]) -> bool:
    hash = set()
    for num in nums:
        if num in hash:
            return True
        hash.add(num)
    return False
