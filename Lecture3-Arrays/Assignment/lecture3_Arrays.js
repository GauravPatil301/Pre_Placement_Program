/*
Question 1
Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2

Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2). write code in javascript with code explanation
*/

/*
function threeSumClosest(nums, target) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  let closestSum = Infinity; // Variable to store the closest sum to the target

  // Iterate through each number as the potential first number in the triplet
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1; // Pointer for the second number
    let right = nums.length - 1; // Pointer for the third number

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]; // Calculate the sum

      if (sum === target) {
        // If the sum is equal to the target, return the target itself
        return target;
      }

      // Update the closestSum if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++; // Increment left pointer if the sum is less than the target
      } else {
        right--; // Decrement right pointer if the sum is greater than the target
      }
    }
  }

  return closestSum;
}

// Test the function
const nums = [-1, 2, 1, -4];
const target = 1;
const result = threeSumClosest(nums, target);
console.log(result);

*/

//----------------------------------------------------------------
/* 
Question 2
Given an array nums of n integers, return an array of all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d]] such that:
           ● 0 <= a, b, c, d < n
           ● a, b, c, and d are distinct.
           ● nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]] write code in javascript with code explanation
*/

/* 
function fourSum(nums, target) {
  const result = [];

  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  const n = nums.length;

  // Fix the first element
  for (let i = 0; i < n - 3; i++) {
    // Skip duplicates for the first element
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Fix the second element
    for (let j = i + 1; j < n - 2; j++) {
      // Skip duplicates for the second element
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let left = j + 1; // Pointer for the third element
      let right = n - 1; // Pointer for the fourth element

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]; // Calculate the sum

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]); // Found a quadruplet
          
          // Skip duplicates for the third and fourth elements
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          
          left++; // Move the left pointer
          right--; // Move the right pointer
        } else if (sum < target) {
          left++; // Increment left pointer if the sum is less than the target
        } else {
          right--; // Decrement right pointer if the sum is greater than the target
        }
      }
    }
  }

  return result;
}

// Test the function
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
const result = fourSum(nums, target);
console.log(result);

*/

//----------------------------------------------------------------
/*
 **Question 3**
A permutation of an array of integers is an arrangement of its members into a
sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr:
[1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

The next permutation of an array of integers is the next lexicographically greater
permutation of its integer. More formally, if all the permutations of the array are
sorted in one container according to their lexicographical order, then the next
permutation of that array is the permutation that follows it in the sorted container.

If such an arrangement is not possible, the array must be rearranged as the
lowest possible order (i.e., sorted in ascending order).

● For example, the next permutation of arr = [1,2,3] is [1,3,2].
● Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
● While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not
have a lexicographical larger rearrangement.

Given an array of integers nums, find the next permutation of nums.
The replacement must be in place and use only constant extra memory.

**Example 1:**
Input: nums = [1,2,3]
Output: [1,3,2]

*/

/* 
function nextPermutation(nums) {
  const n = nums.length;
  
  // Find the first decreasing element from the right
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  
  if (i >= 0) {
    // Find the element just larger than the first decreasing element
    let j = n - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    
    // Swap the elements
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  
  // Reverse the elements after the first decreasing element
  let left = i + 1;
  let right = n - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

// Test the function
const nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums);

*/

//----------------------------------------------------------------
/*
Question 4
Given a sorted array of distinct integers and a target value, return the index if the
target is found. If not, return the index where it would be if it were inserted in
order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2 write code in javascript with code explanation
*/

/* 
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // Calculate the middle index
    
    if (nums[mid] === target) {
      return mid; // Found the target, return the index
    } else if (nums[mid] < target) {
      left = mid + 1; // Target is in the right half, move the left pointer
    } else {
      right = mid - 1; // Target is in the left half, move the right pointer
    }
  }
  
  return left; // Target not found, return the index where it should be inserted
}

// Test the function
const nums = [1, 3, 5, 6];
const target = 5;
const result = searchInsert(nums, target);
console.log(result);

*/

//----------------------------------------------------------------
/* 
**Question 5**
You are given a large integer represented as an integer array digits, where each
digits[i] is the ith digit of the integer. The digits are ordered from most significant
to least significant in left-to-right order. The large integer does not contain any
leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/

/* 
function plusOne(digits) {
  const n = digits.length;
  
  // Iterate the digits from right to left
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++; // Increment the current digit
      return digits; // No carry, return the updated array
    } else {
      digits[i] = 0; // Set the current digit to 0
    }
  }
  
  // If all digits are 9, add a leading 1
  digits.unshift(1);
  return digits;
}

// Test the function
const digits = [1, 2, 3];
const result = plusOne(digits);
console.log(result);

*/

//----------------------------------------------------------------
/* 
Question 6
Given a non-empty array of integers nums, every element appears twice except
for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only
constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1 write code in javascript with code explanation
*/

/*
function singleNumber(nums) {
  let result = 0;
  
  for (const num of nums) {
    result ^= num; // Perform bitwise XOR operation
  }
  
  return result;
}

// Test the function
const nums = [2, 2, 1];
const result = singleNumber(nums);
console.log(result);

*/

//----------------------------------------------------------------
/*
Question 7
You are given an inclusive range [lower, upper] and a sorted unique integer array
nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in
nums.

Return the shortest sorted list of ranges that exactly covers all the missing
numbers. That is, no element of nums is included in any of the ranges, and each
missing number is covered by one of the ranges.

Example 1:
Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]

Explanation: The ranges are:
[2,2]
[4,49]
[51,74]
[76,99]
*/

/* 
function findMissingRanges(nums, lower, upper) {
  const result = [];
  
  let prev = lower - 1;
  
  for (let i = 0; i <= nums.length; i++) {
    let curr = (i === nums.length) ? upper + 1 : nums[i];
    
    if (curr - prev > 1) {
      result.push(formatRange(prev + 1, curr - 1));
    }
    
    prev = curr;
  }
  
  return result;
}

function formatRange(start, end) {
  if (start === end) {
    return `${start}`;
  } else {
    return `${start}->${end}`;
  }
}

// Test the function
const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;
const result = findMissingRanges(nums, lower, upper);
console.log(result);

*/

//----------------------------------------------------------------
/* 
Question 8
Given an array of meeting time intervals where intervals[i] = [starti, endi],
determine if a person could attend all meetings.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false write code in javascript with code explanation
*/

/* 
function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // Sort the intervals by start time
  
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false; // Overlapping meetings, cannot attend all
    }
  }
  
  return true; // No overlapping meetings, can attend all
}

// Test the function
const intervals = [[0, 30], [5, 10], [15, 20]];
const result = canAttendMeetings(intervals);
console.log(result);

*/

//----------------------------------------------------------------
