/*
💡 **Question 1**

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

**Example 1:**

**Input:** s = "IDID"

**Output:**

[0,4,1,3,2] write code in javascript with code explanation
*/
/*
function findPermutation(s) {
  const n = s.length;
  let perm = [];
  let low = 0;
  let high = 0;

  for (let i = 0; i <= n; i++) {
    if (i === n || s[i] === 'I') {
      for (let j = high; j >= low; j--) {
        perm.push(j);
      }
      high++;
      low = high;
    } else {
      high++;
    }
  }

  return perm;
}

// Test case
const s = "IDID";
const perm = findPermutation(s);
console.log(perm);

*/
//----------------------------------------------------------
/*
💡 **Question 2**

You are given an m x n integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

You must write a solution in O(log(m * n)) time complexity.

**Example 1:**

**Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

**Output:** true write code in javascript with code explanation
*/
/*
function searchMatrix(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const num = matrix[Math.floor(mid / n)][mid % n];

    if (num === target) {
      return true;
    } else if (num < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

// Test case
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
];
const target = 3;
const result = searchMatrix(matrix, target);
console.log(result);

*/
//----------------------------------------------------------
/*
Question 3
Given an array of integers arr, return *true if and only if it is a valid mountain array*.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1] **Example 1:**

**Input:** arr = [2,1]

**Output:**

false write code in javascript with code explanation
*/
/*
function validMountainArray(arr) {
  const n = arr.length;
  let i = 0;

  // Step 1: Check for increasing sequence
  while (i < n - 1 && arr[i] < arr[i + 1]) {
    i++;
  }

  // Step 2: Check for peak existence
  if (i === 0 || i === n - 1) {
    return false;
  }

  // Step 3: Check for decreasing sequence
  while (i < n - 1 && arr[i] > arr[i + 1]) {
    i++;
  }

  // Step 4: Check if i reached the end of the array
  return i === n - 1;
}

// Test case
const arr = [2, 1];
const result = validMountainArray(arr);
console.log(result);

*/
//----------------------------------------------------------
/*
💡 **Question 4**

Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

**Example 1:**

**Input:** nums = [0,1]

**Output:** 2

**Explanation:**

[0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

write code in javascript with code explanation
*/
/*
function findMaxLength(nums) {
  const map = new Map();
  let maxLength = 0;
  let count = 0;

  map.set(0, -1); // Initialize the map with count 0 at index -1

  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 0 ? -1 : 1;

    if (map.has(count)) {
      // If the count is already present in the map, calculate the length of subarray
      maxLength = Math.max(maxLength, i - map.get(count));
    } else {
      // If the count is not in the map, add it with the current index
      map.set(count, i);
    }
  }

  return maxLength;
}

// Test case
const nums = [0, 1];
const maxLength = findMaxLength(nums);
console.log(maxLength);

*/
//----------------------------------------------------------
/*
💡 **Question 5**

The **product sum** of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (**0-indexed**).

- For example, if a = [1,2,3,4] and b = [5,2,3,1], the **product sum** would be 1*5 + 2*2 + 3*3 + 4*1 = 22.

Given two arrays nums1 and nums2 of length n, return *the **minimum product sum** if you are allowed to **rearrange** the **order** of the elements in* nums1.

**Example 1:**

**Input:** nums1 = [5,3,4,2], nums2 = [4,2,2,5]

**Output:** 40

**Explanation:**

We can rearrange nums1 to become [3,5,4,2]. The product sum of [3,5,4,2] and [4,2,2,5] is 3*4 + 5*2 + 4*2 + 2*5 = 40.

*/
/*
function minProductSum(nums1, nums2) {
  nums1.sort((a, b) => a - b); // Sort nums1 in ascending order
  nums2.sort((a, b) => b - a); // Sort nums2 in descending order

  let minProductSum = 0;
  const n = nums1.length;

  for (let i = 0; i < n; i++) {
    minProductSum += nums1[i] * nums2[i];
  }

  return minProductSum;
}

// Test case
const nums1 = [5, 3, 4, 2];
const nums2 = [4, 2, 2, 5];
const result = minProductSum(nums1, nums2);
console.log(result);

*/
//----------------------------------------------------------
/*
💡 **Question 6**

An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

**Example 1:**

**Input:** changed = [1,3,4,2,6,8]

**Output:** [1,3,4]

**Explanation:** One possible original array could be [1,3,4]:

- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.

Other original arrays could be [4,3,1] or [3,1,4].

*/
/*
function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    // If the length is odd, it cannot be a doubled array
    return [];
  }

  const original = [];
  const countMap = new Map();

  // Count the occurrences of each element in changed
  for (const num of changed) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  // Iterate over each unique element in changed
  for (const num of countMap.keys()) {
    if (countMap.get(num) === 0) {
      // If the current element is already used or its count is 0, skip it
      continue;
    }

    const doubledNum = num * 2;

    if (!countMap.has(doubledNum) || countMap.get(doubledNum) === 0) {
      // If the double of the current element is not present or its count is 0, return an empty array
      return [];
    }

    // Decrement the counts of the current element and its double
    countMap.set(num, countMap.get(num) - 1);
    countMap.set(doubledNum, countMap.get(doubledNum) - 1);

    // Add the current element to the original array
    original.push(num);
  }

  return original;
}

// Test case
const changed = [1, 3, 4, 2, 6, 8];
const original = findOriginalArray(changed);
console.log(original);

*/
//----------------------------------------------------------
/*
💡 **Question 7**

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

**Example 1:**
**Input:** n = 3

**Output:** [[1,2,3],[8,9,4],[7,6,5]]
*/
/*
function generateMatrix(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0)); // Create an empty matrix of size n x n
  let num = 1; // Initialize the starting number
  let top = 0; // Top boundary
  let bottom = n - 1; // Bottom boundary
  let left = 0; // Left boundary
  let right = n - 1; // Right boundary

  while (num <= n * n) {
    // Fill the top row from left to right
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    // Fill the right column from top to bottom
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    // Fill the bottom row from right to left
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }
    bottom--;

    // Fill the left column from bottom to top
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }
    left++;
  }

  return matrix;
}

// Test case
const n = 3;
const matrix = generateMatrix(n);
console.log(matrix);

*/
//----------------------------------------------------------
/*
💡 **Question 8**

Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

**Example 1:**
**Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

**Output:**

[[7,0,0],[-7,0,3]]
*/
/*
function multiplySparseMatrices(mat1, mat2) {
  const m = mat1.length; // Number of rows in mat1
  const k = mat1[0].length; // Number of columns in mat1 / Number of rows in mat2
  const n = mat2[0].length; // Number of columns in mat2

  const result = Array.from({ length: m }, () => Array(n).fill(0)); // Initialize the result matrix with zeros

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let p = 0; p < k; p++) {
        // Multiply the corresponding elements and accumulate the result
        result[i][j] += mat1[i][p] * mat2[p][j];
      }
    }
  }

  return result;
}

// Test case
const mat1 = [[1, 0, 0], [-1, 0, 3]];
const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
const result = multiplySparseMatrices(mat1, mat2);
console.log(result);

*/
//----------------------------------------------------------
