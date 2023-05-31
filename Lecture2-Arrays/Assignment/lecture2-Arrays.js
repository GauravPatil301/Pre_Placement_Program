/*Question 1
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

Example 1:
Input: nums = [1,4,3,2]
Output: 4

Explanation: All possible pairings (ignoring the ordering of elements) are:
(1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
(1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
(1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4   
*/

// function arrayPairSum(nums) {
//     // Sort the array in ascending order
//     nums.sort((a, b) => a - b);

//     let sum = 0;
//     for (let i = 0; i < nums.length; i += 2) {
//         // Pair the elements and add the smaller value to the sum
//         sum += nums[i];
//     }

//     return sum;
// }

// // Example usage
// const nums = [1, 4, 3, 2];
// const result = arrayPairSum(nums);
// console.log(result); // Output: 4

//----------------------------------------------------------------------------

/*
Question 2
Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. 

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice. 

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

Example 1:
Input: candyType = [1,1,2,2,3,3]
Output: 3

Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.
*/

/*
function distributeCandies(candyType) {
    // Calculate the maximum number of unique candies Alice can eat
    const maxUniqueCandies = Math.min(new Set(candyType).size, candyType.length / 2);

    return maxUniqueCandies;
}

// Example usage
const candyType = [1, 1, 2, 2, 3, 3];
const result = distributeCandies(candyType);
console.log(result); // Output: 3

*/

//----------------------------------------------------------------------------

/*
Question 3
We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.

A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

Example 1:
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5

Explanation: The longest harmonious subsequence is [3,2,2,2,3].
*/
/*
function findLHS(nums) {
    // Create a frequency map of numbers in the array
    const frequencyMap = new Map();
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    let longestSubsequence = 0;
    for (let [num, count] of frequencyMap) {
        if (frequencyMap.has(num + 1)) {
            // Calculate the length of the harmonious subsequence
            const subsequenceLength = count + frequencyMap.get(num + 1);
            longestSubsequence = Math.max(longestSubsequence, subsequenceLength);
        }
    }

    return longestSubsequence;
}

// Example usage
const nums = [1, 3, 2, 2, 5, 2, 3, 7];
const result = findLHS(nums);
console.log(result); // Output: 5

*/

//----------------------------------------------------------------------------

/*
Question 4
You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
*/

/*
function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    let i = 0;

    while (i < flowerbed.length) {
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            // Plant a flower in the current plot
            flowerbed[i] = 1;
            count++;

            // Check if required number of flowers are already planted
            if (count >= n) {
                return true;
            }
        }

        i++;
    }

    return false;
}

// Example usage
const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
const result = canPlaceFlowers(flowerbed, n);
console.log(result); // Output: true

*/

//----------------------------------------------------------------------------
/*
Question 5
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6
*/
/*
function maximumProduct(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    const n = nums.length;

    // Maximum product can be either the product of the three largest elements
    // or the product of the two smallest elements and the largest element
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const product2 = nums[0] * nums[1] * nums[n - 1];

    // Return the maximum of the two products
    return Math.max(product1, product2);
}

// Example usage
const nums = [1, 2, 3];
const result = maximumProduct(nums);
console.log(result); // Output: 6

*/

//----------------------------------------------------------------------------
/*
Question 6
Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise,
return -1.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4

Explanation: 9 exists in nums and its index is 4
*/
/*
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// Example usage
const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
const result = search(nums, target);
console.log(result); // Output: 4

*/

//----------------------------------------------------------------------------

/*
Question 7
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:
Input: nums = [1,2,2,3]
Output: true
*/
/*
function isMonotonic(nums) {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            increasing = false;
        }
        if (nums[i] > nums[i - 1]) {
            decreasing = false;
        }
    }

    return increasing || decreasing;
}

// Example usage
const nums = [1, 2, 2, 3];
const result = isMonotonic(nums);
console.log(result); // Output: true

*/

//----------------------------------------------------------------------------

/*
Question 8
You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

Example 1:
Input: nums = [1], k = 0
Output: 0

Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
*/
/*
function minimumScore(nums, k) {
    const n = nums.length;
    nums.sort((a, b) => a - b);

    const minVal = nums[0];
    const maxVal = nums[n - 1];

    if (maxVal - minVal <= 2 * k) {
        return 0;
    } else {
        return maxVal - minVal - 2 * k;
    }
}

// Example usage
const nums = [1];
const k = 0;
const result = minimumScore(nums, k);
console.log(result); // Output: 0

*/

//----------------------------------------------------------------------------
