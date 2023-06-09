/* Question 1
function sqrt(x) {
  if (x === 0) {
    return 0;
  }

  let left = 1;
  let right = Math.floor(x / 2) + 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

// Example usage:
console.log(sqrt(4)); // Output: 2
console.log(sqrt(16)); // Output: 4
console.log(sqrt(8)); // Output: 2 (rounded down)

*/
//--------------------------------------------------------------------
/* Question 2
function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[mid + 1]) {
      // The peak is on the right side
      left = mid + 1;
    } else {
      // The peak is on the left side or at the current index
      right = mid;
    }
  }

  return left;
}

// Example usage:
console.log(findPeakElement([1, 2, 3, 1])); // Output: 2 (peak element is 3)
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // Output: 5 or 6 (peak element is either 6 or 4)

*/
//--------------------------------------------------------------------
/* Question 3
function missingNumber(nums) {
  const n = nums.length;
  let missing = n;

  // Calculate the expected sum of numbers in the range [0, n]
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate the actual sum of numbers in the array
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  // The difference between the expected sum and the actual sum is the missing number
  missing = expectedSum - actualSum;

  return missing;
}

// Example usage:
console.log(missingNumber([3, 0, 1])); // Output: 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8

*/
//--------------------------------------------------------------------
/* Question 4
function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[0];

  // Find the intersection point of the two pointers
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) {
      break;
    }
  }

  // Move one pointer back to the start while keeping the other at the intersection point
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

// Example usage:
console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // Output: 3

*/
//--------------------------------------------------------------------
/* Question 5
function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const result = [];

  for (const num of nums2) {
    if (set1.has(num) && !result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

// Example usage:
console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]

*/
//--------------------------------------------------------------------
/* Question 6
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  // If the array is not rotated, the first element is the minimum
  if (nums[right] > nums[left]) {
    return nums[0];
  }

  // Perform binary search to find the minimum element
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // If the mid element is greater than the rightmost element,
    // the minimum element lies to the right
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    }
    // If the mid element is less than or equal to the rightmost element,
    // the minimum element lies to the left (including mid itself)
    else {
      right = mid;
    }
  }

  // The minimum element is at index 'left' after the binary search
  return nums[left];
}

// Example usage:
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0
console.log(findMin([7, 0, 1, 2, 4, 5, 6])); // Output: 0
console.log(findMin([2, 4, 5, 6, 7, 0, 1])); // Output: 0

*/
//--------------------------------------------------------------------
/* Question 7
function searchRange(nums, target) {
  const result = [-1, -1];
  const startIndex = findIndex(nums, target, true);

  // If the target value is not found, return [-1, -1]
  if (startIndex === -1) {
    return result;
  }

  const endIndex = findIndex(nums, target, false);
  result[0] = startIndex;
  result[1] = endIndex;
  return result;
}

// Helper function to find the starting or ending index of the target value
function findIndex(nums, target, isStartIndex) {
  let low = 0;
  let high = nums.length - 1;
  let index = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      index = mid;

      if (isStartIndex) {
        high = mid - 1; // Continue searching towards the left
      } else {
        low = mid + 1; // Continue searching towards the right
      }
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return index;
}

// Example usage:
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
console.log(searchRange([1, 2, 3, 4, 5], 3)); // Output: [2, 2]

*/
//--------------------------------------------------------------------
/* Question 8
function intersect(nums1, nums2) {
  const map = new Map();
  const result = [];

  // Create a frequency map for nums1
  for (const num of nums1) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  // Check the frequency map while iterating through nums2
  for (const num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }

  return result;
}

// Example usage:
console.log(intersect([1, 2, 2, 1], [2, 2])); // Output: [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [9, 4]
console.log(intersect([1, 2, 3], [4, 5, 6])); // Output: []


*/
//--------------------------------------------------------------------
