/*
💡 **Question 1**

Given an integer `n`, return *`true` if it is a power of two. Otherwise, return `false`*.

An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.

**Example 1:**
Input: n = 1 

Output: true

**Example 2:**
Input: n = 16 

Output: true

**Example 3:**
Input: n = 3 

Output: false

*/
/*
function isPowerOfTwo(n) {
  if (n <= 0) {
    return false;
  }

  // Check if n is a power of two by bitwise ANDing n and (n-1)
  // If n is a power of two, it will have only one bit set to 1
  // and (n-1) will have all bits set after that bit to 1.
  // So, the bitwise AND will result in 0.
  return (n & (n - 1)) === 0;
}

// Example usage:
console.log(isPowerOfTwo(1));  // Output: true
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(3));  // Output: false

*/
//----------------------------------------------------------------
/*
💡 **Question 2**

Given a number n, find the sum of the first natural numbers.

**Example 1:**

Input: n = 3 

Output: 6

**Example 2:**

Input  : 5 

Output : 15

*/
/*
function sumOfNaturalNumbers(n) {
  if (n <= 0) {
    return 0;
  }

  // Use the formula for the sum of the first n natural numbers:
  // sum = (n * (n + 1)) / 2
  return (n * (n + 1)) / 2;
}

// Example usage:
console.log(sumOfNaturalNumbers(3)); // Output: 6
console.log(sumOfNaturalNumbers(5)); // Output: 15

*/
//----------------------------------------------------------------
/*
💡 **Question 3**

****Given a positive integer, N. Find the factorial of N. 

**Example 1:**

Input: N = 5 

Output: 120

**Example 2:**

Input: N = 4

Output: 24

*/
/*
function factorial(N) {
  if (N === 0 || N === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= N; i++) {
    result *= i;
  }

  return result;
}

// Example usage:
console.log(factorial(5)); // Output: 120
console.log(factorial(4)); // Output: 24

*/
//----------------------------------------------------------------
/*
💡 **Question 4**

Given a number N and a power P, the task is to find the exponent of this number raised to the given power, i.e. N^P.

**Example 1 :** 

Input: N = 5, P = 2

Output: 25

**Example 2 :**
Input: N = 2, P = 5

Output: 32

*/
/*
function calculateExponent(N, P) {
  let result = 1;
  
  for (let i = 1; i <= P; i++) {
    result *= N;
  }
  
  return result;
}

// Example usage:
console.log(calculateExponent(5, 2)); // Output: 25
console.log(calculateExponent(2, 5)); // Output: 32

*/
//----------------------------------------------------------------
/*
💡 **Question 5**

Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

**Example 1:**

Input: arr = {1, 4, 3, -5, -4, 8, 6};
Output: 8

**Example 2:**

Input: arr = {1, 4, 45, 6, 10, -8};
Output: 45

*/
/*
function findMaxElement(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const mid = Math.floor(arr.length / 2);
  const leftMax = findMaxElement(arr.slice(0, mid));
  const rightMax = findMaxElement(arr.slice(mid));

  return Math.max(leftMax, rightMax);
}

// Example usage:
console.log(findMaxElement([1, 4, 3, -5, -4, 8, 6]));    // Output: 8
console.log(findMaxElement([1, 4, 45, 6, 10, -8]));     // Output: 45

*/
//----------------------------------------------------------------
/*
💡 **Question 6**

Given first term (a), common difference (d) and a integer N of the Arithmetic Progression series, the task is to find Nth term of the series.

**Example 1:**

Input : a = 2 d = 1 N = 5
Output : 6
The 5th term of the series is : 6

**Example 2:**

Input : a = 5 d = 2 N = 10
Output : 23
The 10th term of the series is : 23

*/
/*
function findNthTerm(a, d, N) {
  // Calculate the Nth term of the AP using the formula:
  // NthTerm = a + (N - 1) * d
  return a + (N - 1) * d;
}

// Example usage:
console.log(findNthTerm(2, 1, 5)); // Output: 6
console.log(findNthTerm(5, 2, 10)); // Output: 23

*/
//----------------------------------------------------------------
/*
💡 **Question 7**

Given a string S, the task is to write a program to print all permutations of a given string.

**Example 1:**

***Input:***

*S = “ABC”*

***Output:***

*“ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”*

**Example 2:**

***Input:***

*S = “XY”*

***Output:***

*“XY”, “YX”*

*/
/*
function generatePermutations(str) {
  const result = [];

  function backtrack(chars, permutation = '') {
    if (chars.length === 0) {
      result.push(permutation);
    } else {
      for (let i = 0; i < chars.length; i++) {
        const remainingChars = chars.slice(0, i) + chars.slice(i + 1);
        backtrack(remainingChars, permutation + chars[i]);
      }
    }
  }

  backtrack(str);

  return result;
}

// Example usage:
console.log(generatePermutations("ABC")); // Output: ["ABC", "ACB", "BAC", "BCA", "CBA", "CAB"]
console.log(generatePermutations("XY"));  // Output: ["XY", "YX"]

*/
//----------------------------------------------------------------
/*
💡 **Question 8**

Given an array, find a product of all array elements.

**Example 1:**

Input  : arr[] = {1, 2, 3, 4, 5}
Output : 120
**Example 2:**

Input  : arr[] = {1, 6, 3}
Output : 18

*/
/*
function getProductOfArray(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
}

// Example usage:
console.log(getProductOfArray([1, 2, 3, 4, 5])); // Output: 120
console.log(getProductOfArray([1, 6, 3]));       // Output: 18

*/
//----------------------------------------------------------------
