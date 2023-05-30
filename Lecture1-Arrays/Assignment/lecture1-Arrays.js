/*
Q1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example:**
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]

**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1][

*/

function twoSum(nums, target) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (map.has(complement)) {
      return [map.get(complement), i]
    }

    map.set(nums[i], i)
  }

  return [] // No two numbers found that add up to the target
}

// Example usage
const nums = [2, 7, 11, 15]
const target = 9
const result = twoSum(nums, target)

console.log(result)

// Time complexity O(n)

//----------------------------------------------------

/*
💡 **Q2.** Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

- Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
- Return k.

**Example :**
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_*,_*]

**Explanation:** Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)[

*/

function removeElement(nums, val) {
  let k = 0 // Number of elements not equal to val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k++
    }
  }

  return k
}

// Example usage
const nums = [3, 2, 2, 3]
const val = 3
const result = removeElement(nums, val)

console.log(result)
console.log(nums.slice(0, result))

// Time complexity = O(n)

//------------------------------------------------------------

/*
💡 **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [1,3,5,6], target = 5

Output: 2

*/

function searchInsert(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return left
}

// Example usage
const nums = [1, 3, 5, 6]
const target = 5
const result = searchInsert(nums, target)

console.log(result)

//----------------------------------------------------------------

/*
💡 **Q4.** You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.

Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

*/
function plusOne(digits) {
  const n = digits.length

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
    } else {
      digits[i]++
      return digits
    }
  }

  // If we reach here, it means all digits were 9
  digits.unshift(1)
  return digits
}

// Example usage
const digits = [1, 2, 3]
const result = plusOne(digits)

console.log(result)

//-------------------------------------------------------------------

/*
💡 **Q5.** You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

**Example 1:**
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

**Explanation:** The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

*/

function merge(nums1, m, nums2, n) {
  let i = m - 1 // Pointer for nums1
  let j = n - 1 // Pointer for nums2
  let k = m + n - 1 // Pointer for merged array

  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i]
      i--
    } else {
      nums1[k] = nums2[j]
      j--
    }
    k--
  }

  // Copy remaining elements from nums2 if any
  while (j >= 0) {
    nums1[k] = nums2[j]
    j--
    k--
  }
}

// Example usage
const nums1 = [1, 2, 3, 0, 0, 0]
const m = 3
const nums2 = [2, 5, 6]
const n = 3

merge(nums1, m, nums2, n)
console.log(nums1)

//--------------------------------------------------------------------
/*
💡 **Q6.** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**
Input: nums = [1,2,3,1]

Output: true

*/

function containsDuplicate(nums) {
  const set = new Set()

  for (let num of nums) {
    if (set.has(num)) {
      return true
    }
    set.add(num)
  }

  return false
}

// Example usage
const nums = [1, 2, 3, 1]
const result = containsDuplicate(nums)

console.log(result)

//---------------------------------------------------------------
/*
💡 **Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

Note that you must do this in-place without making a copy of the array.

**Example 1:**
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

*/

function moveZeroes(nums) {
  let i = 0 // Pointer for non-zero elements

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      // Swap non-zero element with element at position i
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      i++
    }
  }
}

// Example usage
const nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums)

//-------------------------------------------------------------------

/*
💡 **Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

**Example 1:**
Input: nums = [1,2,2,4]
Output: [2,3]

*/

function findErrorNums(nums) {
  nums.sort((a, b) => a - b)

  let duplicate, missing
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      duplicate = nums[i]
    } else if (nums[i] + 1 !== nums[i + 1]) {
      missing = nums[i] + 1
    }
  }

  return [duplicate, missing]
}

// Example usage
const nums = [1, 2, 2, 4]
const result = findErrorNums(nums)

console.log(result)
