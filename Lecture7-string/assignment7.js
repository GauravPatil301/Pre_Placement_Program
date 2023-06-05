/*
💡 **Question 1**

Given two strings s and t, *determine if they are isomorphic*.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example 1:**

**Input:** s = "egg", t = "add"

**Output:** true

*/
/*
function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sToTMap = new Map();
  const tToSMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if ((!sToTMap.has(charS) && tToSMap.has(charT)) || (sToTMap.has(charS) && sToTMap.get(charS) !== charT) || (tToSMap.has(charT) && tToSMap.get(charT) !== charS)) {
      return false;
    }

    sToTMap.set(charS, charT);
    tToSMap.set(charT, charS);
  }

  return true;
}

// Test cases
console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true

*/
//----------------------------------------------------------
/*
💡 **Question 2**

Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

**Example 1:**

**Input:** num = "69"

**Output:**

true

*/
/*
function isStrobogrammatic(num) {
  const map = {
    '0': '0',
    '1': '1',
    '6': '9',
    '8': '8',
    '9': '6'
  };

  let strobogrammaticNum = '';

  for (let i = num.length - 1; i >= 0; i--) {
    const digit = num[i];
    if (!map.hasOwnProperty(digit)) {
      return false;
    }
    strobogrammaticNum += map[digit];
  }

  return strobogrammaticNum === num;
}

// Test cases
console.log(isStrobogrammatic("69")); // true
console.log(isStrobogrammatic("88")); // true
console.log(isStrobogrammatic("962")); // false

*/
//--------------------------------------------------------------
/*
💡 **Question 3**

Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

**Example 1:**

**Input:** num1 = "11", num2 = "123"

**Output:**

"134"

*/
/*
function addStrings(num1, num2) {
  let sum = '';
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(num2[j]) : 0;

    const currentSum = digit1 + digit2 + carry;
    const digitSum = currentSum % 10;
    carry = Math.floor(currentSum / 10);

    sum = digitSum + sum;

    i--;
    j--;
  }

  return sum;
}

// Test case
console.log(addStrings("11", "123")); // "134"

*/
//--------------------------------------------------------------
/*
💡 **Question 4**

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

**Input:** s = "Let's take LeetCode contest"

**Output:** "s'teL ekat edoCteeL tsetnoc"

*/
/*
function reverseWords(s) {
  const words = s.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = reverseWord(words[i]);
  }

  return words.join(' ');
}

function reverseWord(word) {
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}

// Test case
console.log(reverseWords("Let's take LeetCode contest")); // "s'teL ekat edoCteeL tsetnoc"

*/
//--------------------------------------------------------------
/*
💡 **Question 5**

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

**Example 1:**

**Input:** s = "abcdefg", k = 2

**Output:**

"bacdfeg"

*/
/*
function reverseStr(s, k) {
  const arr = Array.from(s); // Convert string to array for easier manipulation

  for (let i = 0; i < arr.length; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, arr.length - 1); // Handle case when there are fewer than k characters left

    while (left < right) {
      // Reverse the characters within the window [left, right]
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join('');
}

// Test case
console.log(reverseStr("abcdefg", 2)); // "bacdfeg"

*/
//--------------------------------------------------------------
/*
💡 **Question 6**

Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

A **shift** on s consists of moving the leftmost character of s to the rightmost position.

- For example, if s = "abcde", then it will be "bcdea" after one shift.

**Example 1:**

**Input:** s = "abcde", goal = "cdeab"

**Output:**

true

*/
/*
function rotateString(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  const doubleS = s + s; // Concatenate s with itself to cover all possible rotations

  return doubleS.includes(goal);
}

// Test case
console.log(rotateString("abcde", "cdeab")); // true

*/
//--------------------------------------------------------------
/*
💡 **Question 7**

Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

**Example 1:**

**Input:** s = "ab#c", t = "ad#c"

**Output:** true

**Explanation:**

Both s and t become "ac".

*/
/*
function buildString(str) {
  const result = [];

  for (const char of str) {
    if (char === '#') {
      result.pop();
    } else {
      result.push(char);
    }
  }

  return result.join('');
}

function backspaceCompare(s, t) {
  const processedS = buildString(s);
  const processedT = buildString(t);

  return processedS === processedT;
}

// Test case
console.log(backspaceCompare("ab#c", "ad#c")); // true

*/
//--------------------------------------------------------------
/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

**Example 1:**
**Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

**Output:** true
*/
/*
function checkStraightLine(coordinates) {
  if (coordinates.length <= 2) {
    return true; // If there are 2 or fewer points, they always form a straight line
  }

  const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];
  const deltaX = x1 - x0;
  const deltaY = y1 - y0;

  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];
    if (deltaX * (y - y1) !== deltaY * (x - x1)) {
      return false;
    }
  }

  return true;
}

// Test case
console.log(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]])); // true

*/
//--------------------------------------------------------------
