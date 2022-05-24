def contains_duplicate(nums):
    return
    

def S1_contains_duplicate(nums):
    for i in range(len(nums)):
        num_to_compare = nums[i]
        for j in range(i + 1, len(nums)):
            compare_against = nums[j]
            if num_to_compare == compare_against:
                return True;
    return False;

def S2_contains_duplicate(nums):
    nums.sort()
    for i in range(len(nums)):
        first_pointer = nums[i]
        second_pointer = nums[i + 1]
        if first_pointer == second_pointer:
            return True
    return False

def S3_contains_duplicate(nums):
    hash = set()
    for num in nums:
        if num in hash:
            return True
        hash.add(num)
    return false