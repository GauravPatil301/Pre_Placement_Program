/*
💡 **Question 1**

Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.

**Example 1:**

**Input:** s1 = "sea", s2 = "eat"

**Output:** 231

**Explanation:** Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.

Deleting "t" from "eat" adds 116 to the sum.

At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

*/
/*
function minimumDeleteSum(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  
  // Create a 2D array to store the minimum delete sums
  const dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1);
    dp[i][0] = i > 0 ? dp[i - 1][0] + s1.charCodeAt(i - 1) : 0;
  }
  
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
  }
  
  // Fill in the rest of the dp array
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + s1.charCodeAt(i - 1),
          dp[i][j - 1] + s2.charCodeAt(j - 1)
        );
      }
    }
  }
  
  return dp[m][n];
}

// Example usage
const s1 = "sea";
const s2 = "eat";
const result = minimumDeleteSum(s1, s2);
console.log(result); // Output: 231

*/
//-----------------------------------------------------------------
/*
💡 **Question 2**

Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

The following rules define a **valid** string:

- Any left parenthesis '(' must have a corresponding right parenthesis ')'.
- Any right parenthesis ')' must have a corresponding left parenthesis '('.
- Left parenthesis '(' must go before the corresponding right parenthesis ')'.
- '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

**Example 1:**

**Input:** s = "()"

**Output:**

true

*/
/*
function isValid(s) {
  let openCount = 0; // Count of open parentheses '('
  let starCount = 0; // Count of asterisks '*'

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      openCount++;
    } else if (s[i] === '*') {
      starCount++;
    } else if (s[i] === ')') {
      if (openCount > 0) {
        openCount--;
      } else if (starCount > 0) {
        starCount--;
      } else {
        return false;
      }
    }
  }

  // At this point, all ')' symbols should be matched with '(' or '*'
  while (openCount > 0 && starCount > 0) {
    openCount--;
    starCount--;
  }

  return openCount === 0;
}

// Example usage
const s = "()";
const result = isValid(s);
console.log(result); // Output: true

*/
//-----------------------------------------------------------------
/*
💡 **Question 3**

Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

In one **step**, you can delete exactly one character in either string.

**Example 1:**

**Input:** word1 = "sea", word2 = "eat"

**Output:** 2

**Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

*/
/*
function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // Create a 2D array to store the minimum number of steps
  const dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1);
    dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  // Fill in the rest of the dp array
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1);
      }
    }
  }

  return dp[m][n];
}

// Example usage
const word1 = "sea";
const word2 = "eat";
const result = minDistance(word1, word2);
console.log(result); // Output: 2

*/
//-----------------------------------------------------------------
/*
Question 4
You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
You always start to construct the **left** child node of the parent first if it exists.

**Input:** s = "4(2(3)(1))(6(5))"

**Output:** [4,2,6,3,1,5]
*/
/*
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function str2tree(s) {
  if (s.length === 0) {
    return null;
  }

  // Find the index of the first parenthesis or the end of the string
  let i = 0;
  while (i < s.length && (s[i] !== '(' && s[i] !== ')')) {
    i++;
  }

  // Create the root node with the integer value
  const rootVal = parseInt(s.substring(0, i));
  const root = new TreeNode(rootVal);

  if (i === s.length) {
    return root; // No child nodes
  }

  // Find the index of the matching closing parenthesis
  let count = 0;
  let j = i;
  while (j < s.length) {
    if (s[j] === '(') {
      count++;
    } else if (s[j] === ')') {
      count--;
    }

    if (count === 0) {
      break;
    }

    j++;
  }

  // Recursively construct the left and right subtrees
  root.left = str2tree(s.substring(i + 1, j));
  root.right = str2tree(s.substring(j + 2, s.length - 1));

  return root;
}

function preorderTraversal(root) {
  const result = [];

  function traverse(node) {
    if (node === null) {
      return;
    }

    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);

  return result;
}

// Example usage
const s = "4(2(3)(1))(6(5))";
const tree = str2tree(s);
const result = preorderTraversal(tree);
console.log(result); // Output: [4, 2, 3, 1, 6, 5]

*/
//-----------------------------------------------------------------
/*
💡 **Question 5**

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of **consecutive repeating characters** in chars:

- If the group's length is 1, append the character to s.
- Otherwise, append the character followed by the group's length.

The compressed string s **should not be returned separately**, but instead, be stored **in the input character array chars**. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done **modifying the input array,** return *the new length of the array*.

You must write an algorithm that uses only constant extra space.

**Example 1:**

**Input:** chars = ["a","a","b","b","c","c","c"]

**Output:** Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

**Explanation:**

The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

*/
/*
function compress(chars) {
  let writeIndex = 0; // Index to write the compressed characters
  let count = 1; // Count of consecutive repeating characters

  for (let i = 1; i <= chars.length; i++) {
    if (i < chars.length && chars[i] === chars[i - 1]) {
      // If the current character is the same as the previous one
      count++;
    } else {
      // Append the character to the compressed array
      chars[writeIndex] = chars[i - 1];
      writeIndex++;

      // Append the count if it is greater than 1
      if (count > 1) {
        const countStr = count.toString();
        for (let j = 0; j < countStr.length; j++) {
          chars[writeIndex] = countStr[j];
          writeIndex++;
        }
      }

      // Reset the count for the next group of repeating characters
      count = 1;
    }
  }

  return writeIndex;
}

// Example usage
const chars = ["a", "a", "b", "b", "c", "c", "c"];
const length = compress(chars);
const compressedArray = chars.slice(0, length);
console.log(length); // Output: 6
console.log(compressedArray); // Output: ["a", "2", "b", "2", "c", "3"]

*/
//-----------------------------------------------------------------
/*
💡 **Question 6**

Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

**Input:** s = "cbaebabacd", p = "abc"

**Output:** [0,6]

**Explanation:**

The substring with start index = 0 is "cba", which is an anagram of "abc".

The substring with start index = 6 is "bac", which is an anagram of "abc".

*/
/*
function findAnagrams(s, p) {
  const result = [];
  const sCount = new Array(26).fill(0); // Count of characters in s
  const pCount = new Array(26).fill(0); // Count of characters in p

  // Calculate the initial count of characters in p
  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - 97]++; // 'a' has ASCII code 97
  }

  // Sliding window approach
  for (let i = 0; i < s.length; i++) {
    // Increment the count of the current character in s
    sCount[s.charCodeAt(i) - 97]++; // 'a' has ASCII code 97

    // Shrink the window if its size exceeds the length of p
    if (i >= p.length) {
      sCount[s.charCodeAt(i - p.length) - 97]--; // Decrement the count of the character going out of the window
    }

    // Compare the counts of characters in the window with p
    if (i >= p.length - 1 && areArraysEqual(sCount, pCount)) {
      result.push(i - p.length + 1); // Add the start index of the anagram
    }
  }

  return result;
}

// Helper function to compare two arrays for equality
function areArraysEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// Example usage
const s = "cbaebabacd";
const p = "abc";
const indices = findAnagrams(s, p);
console.log(indices); // Output: [0, 6]
*/
//-----------------------------------------------------------------
/*
💡 **Question 7**

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

**Example 1:**

**Input:** s = "3[a]2[bc]"

**Output:** "aaabcbc"

*/
/*
function decodeString(s) {
  const stack = [];
  let currNum = 0;
  let currStr = '';

  for (let char of s) {
    if (!isNaN(char)) {
      // Accumulate the digit to form the repetition count
      currNum = currNum * 10 + parseInt(char);
    } else if (char === '[') {
      // Push the current repetition count and current string to the stack
      stack.push(currNum);
      stack.push(currStr);

      // Reset the current repetition count and current string
      currNum = 0;
      currStr = '';
    } else if (char === ']') {
      // Pop the current string and repetition count from the stack
      const prevStr = stack.pop();
      const repetitionCount = stack.pop();

      // Repeat the current string the specified number of times
      currStr = prevStr + currStr.repeat(repetitionCount);
    } else {
      // Append the character to the current string
      currStr += char;
    }
  }

  return currStr;
}

// Example usage
const s = "3[a]2[bc]";
const decodedString = decodeString(s);
console.log(decodedString); // Output: "aaabcbc"

*/
//-----------------------------------------------------------------
/*
💡 **Question 8**

Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

- For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

**Example 1:**

**Input:** s = "ab", goal = "ba"

**Output:** true

**Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

*/
/*
function canAchieveGoal(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  let diffCount = 0;
  let diffIndices = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diffCount++;
      diffIndices.push(i);
    }
  }

  return diffCount === 2 && s[diffIndices[0]] === goal[diffIndices[1]] && s[diffIndices[1]] === goal[diffIndices[0]];
}

// Example usage
const s = "ab";
const goal = "ba";
const result = canAchieveGoal(s, goal);
console.log(result); // Output: true

*/
//-----------------------------------------------------------------
