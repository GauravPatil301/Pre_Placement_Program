/*
Given an integer `n`, return *`true` if it is a power of three. Otherwise, return `false`*.

An integer `n` is a power of three, if there exists an integer `x` such that `n == 3x`.Input: n = 27
Output: true
Explanation: 27 = 33 write code in javascript
*/
/*
function isPowerOfThree(n) {
  if (n <= 0) {
    return false; // Negative numbers and zero are not powers of three
  }

  while (n % 3 === 0) {
    n /= 3; // Divide n by 3 until it is no longer divisible by 3
  }

  return n === 1; // If n becomes 1, it is a power of three; otherwise, it's not
}

// Example usage:
console.log(isPowerOfThree(27)); // Output: true
console.log(isPowerOfThree(9)); // Output: true
console.log(isPowerOfThree(45)); // Output: false
console.log(isPowerOfThree(0)); // Output: false
console.log(isPowerOfThree(-27)); // Output: false

*/
//--------------------------------------------------------------------
/*
💡 **Question 2**

You have a list `arr` of all integers in the range `[1, n]` sorted in a strictly increasing order. Apply the following algorithm on `arr`:

- Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
- Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
- Keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Given the integer `n`, return *the last number that remains in* `arr`.

*/
/*
function lastRemaining(n) {
  let leftToRight = true; // Flag to indicate the direction of traversal
  let remaining = n; // Number of remaining elements in the array
  let step = 1; // Step size

  let head = 1; // Head of the array
  while (remaining > 1) {
    if (leftToRight || remaining % 2 === 1) {
      // If traversing from left to right or there are odd remaining elements
      head += step;
    }

    step *= 2; // Double the step size
    remaining = Math.floor(remaining / 2); // Halve the number of remaining elements
    leftToRight = !leftToRight; // Toggle the direction of traversal
  }

  return head;
}

// Example usage:
console.log(lastRemaining(9)); // Output: 6
console.log(lastRemaining(6)); // Output: 4
console.log(lastRemaining(10)); // Output: 8
console.log(lastRemaining(1)); // Output: 1

*/
//--------------------------------------------------------------------
/*
Question 3 
Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

**Example 1:**

Input :  set = “abc”

Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}

**Example 2:**

Input : set = “abcd”

Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }
*/
/*
function printSubsets(set, subset = "", index = 0) {
  if (index === set.length) {
    console.log(subset); // Print the subset
    return;
  }

  // Include the current character in the subset
  printSubsets(set, subset + set[index], index + 1);

  // Exclude the current character from the subset
  printSubsets(set, subset, index + 1);
}

// Example usage:
console.log("Example 1:");
printSubsets("abc");
console.log("\nExample 2:");
printSubsets("abcd");

*/
//--------------------------------------------------------------------
/*
💡 **Question 4**

Given a string calculate length of the string using recursion.

**Examples:**

*/
/*
function calculateLength(str) {
  // Base case: when the string is empty, return 0
  if (str === "") {
    return 0;
  }
  
  // Recursive case: remove the first character and calculate the length of the remaining string
  return 1 + calculateLength(str.slice(1));
}

// Example usage:
console.log(calculateLength("abcd")); // Output: 4
console.log(calculateLength("GEEKSFORGEEKS")); // Output: 13

*/
//--------------------------------------------------------------------
/*
💡 **Question 5**

We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.

**Examples :**
Input  : S = "abcab"
Output : 7
There are 15 substrings of "abcab"
a, ab, abc, abca, abcab, b, bc, bca
bcab, c, ca, cab, a, ab, b
Out of the above substrings, there
are 7 substrings : a, abca, b, bcab,
c, a and b.

Input  : S = "aba"
Output : 4
The substrings are a, b, a and aba
*/
/*
function countSubstrings(S) {
  let count = 0;
  const n = S.length;

  // Iterate through each character in the string
  for (let i = 0; i < n; i++) {
    let j = i;
    // Increment count for each individual character
    count++;

    // Expand around the center character to find all substrings
    while (j > 0 && S[i] === S[j - 1]) {
      count++;
      j--;
    }
  }

  return count;
}

// Example usage:
console.log(countSubstrings("abcab")); // Output: 7
console.log(countSubstrings("aba")); // Output: 4

*/
//--------------------------------------------------------------------
/*
💡 **Question 6**

The [tower of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi) is a famous puzzle where we have three rods and **N** disks. The objective of the puzzle is to move the entire stack to another rod. You are given the number of discs **N**. Initially, these discs are in the rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also, you need to find the total moves.**Note:** The discs are arranged such that the **top disc is numbered 1** and the **bottom-most disc is numbered N**. Also, all the discs have **different sizes** and a bigger disc **cannot** be put on the top of a smaller disc. Refer the provided link to get a better clarity about the puzzle.

*/
/*
function towerOfHanoi(n, source, destination, auxiliary) {
  if (n === 1) {
    console.log(`Move disk 1 from rod ${source} to rod ${destination}`);
    return 1;
  }

  let moves = 0;

  moves += towerOfHanoi(n - 1, source, auxiliary, destination);

  console.log(`Move disk ${n} from rod ${source} to rod ${destination}`);
  moves++;

  moves += towerOfHanoi(n - 1, auxiliary, destination, source);

  return moves;
}

// Example usage:
const n = 3; // Number of discs
const sourceRod = 1;
const destinationRod = 3;
const auxiliaryRod = 2;

console.log(`Number of moves: ${towerOfHanoi(n, sourceRod, destinationRod, auxiliaryRod)}`);

*/
//--------------------------------------------------------------------
/*
💡 **Question 7**

Given a string **str**, the task is to print all the permutations of **str**. A **permutation** is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.

**Examples:**

> Input: str = “cd”
> 
> 
> **Output:** cd dc
> 
> **Input:** str = “abb”
> 
> **Output:** abb abb bab bba bab bba
> 
*/
/*
function permute(str) {
  const result = [];

  // Convert the string to an array to easily swap characters
  const arr = str.split("");

  // Helper function to generate permutations using backtracking
  function backtrack(startIndex) {
    if (startIndex === arr.length - 1) {
      // Reached the end of the array, add the current permutation to the result
      result.push(arr.join(""));
      return;
    }

    for (let i = startIndex; i < arr.length; i++) {
      // Swap characters at startIndex and i
      [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]];

      // Recursively generate permutations for the remaining characters
      backtrack(startIndex + 1);

      // Undo the swap to backtrack and try other combinations
      [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]];
    }
  }

  // Start the backtracking process from index 0
  backtrack(0);

  return result;
}

// Example usage:
console.log(permute("cd")); // Output: [ 'cd', 'dc' ]
console.log(permute("abb")); // Output: [ 'abb', 'bab', 'bba' ]

*/
//--------------------------------------------------------------------
/*
💡 **Question 8**

Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.

**Examples :**
Input : abc de
Output : 3
There are three consonants b, c and d.

Input : geeksforgeeks portal
Output : 12
*/
/*
function countConsonants(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let consonantCount = 0;

  // Convert the string to lowercase for case-insensitive comparison
  str = str.toLowerCase();

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Check if the character is an alphabet and not a vowel
    if (/[a-z]/.test(char) && !vowels.includes(char)) {
      consonantCount++;
    }
  }

  return consonantCount;
}

// Example usage:
console.log(countConsonants("abc de")); // Output: 3
console.log(countConsonants("geeksforgeeks portal")); // Output: 12

*/
//--------------------------------------------------------------------
