/*Question 1
function deleteMiddleNode(head) {
  if (!head || !head.next) {
    return null; // Return null if the linked list is empty or has only one node
  }

  let slowPtr = head;
  let fastPtr = head;
  let prev = null;

  while (fastPtr && fastPtr.next) {
    fastPtr = fastPtr.next.next;
    prev = slowPtr;
    slowPtr = slowPtr.next;
  }

  prev.next = slowPtr.next; // Skip the middle node(s)

  return head;
}

// Example usage:
// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const node5 = { value: 5, next: null };
const node4 = { value: 4, next: node5 };
const node3 = { value: 3, next: node4 };
const node2 = { value: 2, next: node3 };
const node1 = { value: 1, next: node2 };

console.log(deleteMiddleNode(node1)); // Output: { value: 1, next: { value: 2, next: { value: 4, next: { value: 5, next: null } } } }

*/
//----------------------------------------------------------------
/*Question 2
function hasLoop(head) {
  let slowPtr = head;
  let fastPtr = head;

  while (fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;

    if (slowPtr === fastPtr) {
      return true; // Loop detected
    }
  }

  return false; // No loop found
}

// Example usage:
// Create a sample linked list with a loop: 1 -> 2 -> 3 -> 4 -> 5 -> 2
const node5 = { value: 5, next: null };
const node4 = { value: 4, next: node5 };
const node3 = { value: 3, next: node4 };
const node2 = { value: 2, next: node3 };
const node1 = { value: 1, next: node2 };
node5.next = node2; // Connect the tail to the 2nd node

console.log(hasLoop(node1)); // Output: true

*/
//----------------------------------------------------------------
/*Question 3
function getNthNodeFromEnd(head, N) {
  let mainPtr = head;
  let refPtr = head;

  // Move the refPtr N positions ahead
  for (let i = 0; i < N; i++) {
    if (refPtr === null) {
      return null; // The list has fewer than N nodes
    }
    refPtr = refPtr.next;
  }

  // Move both pointers simultaneously until refPtr reaches the end
  while (refPtr !== null) {
    mainPtr = mainPtr.next;
    refPtr = refPtr.next;
  }

  return mainPtr.value;
}

// Example usage:
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
const node9 = { value: 9, next: null };
const node8 = { value: 8, next: node9 };
const node7 = { value: 7, next: node8 };
const node6 = { value: 6, next: node7 };
const node5 = { value: 5, next: node6 };
const node4 = { value: 4, next: node5 };
const node3 = { value: 3, next: node4 };
const node2 = { value: 2, next: node3 };
const node1 = { value: 1, next: node2 };

console.log(getNthNodeFromEnd(node1, 2)); // Output: 8

*/
//----------------------------------------------------------------
/*Question 4
function isLinkedListPalindrome(head) {
  let current = head;
  let characters = [];

  // Traverse the linked list and store the characters
  while (current !== null) {
    characters.push(current.value);
    current = current.next;
  }

  // Reverse the stored characters
  let reversed = characters.slice().reverse();

  // Compare each character with the reversed characters
  for (let i = 0; i < characters.length; i++) {
    if (characters[i] !== reversed[i]) {
      return false; // Not a palindrome
    }
  }

  return true; // Palindrome
}

// Node definition for the linked list
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Example usage:
// Create the linked list: R -> A -> D -> A -> R -> NULL
const node5 = new ListNode('R');
const node4 = new ListNode('A');
const node3 = new ListNode('D');
const node2 = new ListNode('A');
const node1 = new ListNode('R');

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(isLinkedListPalindrome(node1)); // Output: true

// Create the linked list: C -> O -> D -> E -> NULL
const node8 = new ListNode('C');
const node7 = new ListNode('O');
const node6 = new ListNode('D');
const node9 = new ListNode('E');

node6.next = node7;
node7.next = node8;
node8.next = node9;

console.log(isLinkedListPalindrome(node6)); // Output: false

*/
//----------------------------------------------------------------
/*Question 5
function removeLoop(head) {
  let slow = head;
  let fast = head;

  // Check if there is a loop
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break; // Loop detected
    }
  }

  // If there is no loop, return the original linked list
  if (fast === null || fast.next === null) {
    return head;
  }

  // Move slow back to the head and find the meeting point
  slow = head;
  while (slow.next !== fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove the loop by setting the next pointer of the last node to null
  fast.next = null;

  return head;
}

// Node definition for the linked list
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create the linked list: 1 -> 3 -> 4 -> 3 (loop)
const node3 = new ListNode(4);
const node2 = new ListNode(3);
const node1 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node2; // Loop

// Remove the loop
removeLoop(node1);

// Print the modified linked list
let current = node1;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}

*/
//----------------------------------------------------------------
/*Question 6
function retainAndDelete(head, M, N) {
  if (M === 0) {
    return null; // No nodes to retain
  }

  let current = head;
  let previous = null;
  let mCount = 0;
  let nCount = 0;

  while (current !== null) {
    mCount++;

    if (mCount < M) {
      previous = current;
      current = current.next;
    } else if (mCount === M) {
      previous = current;
      current = current.next;
      mCount = 0;
    }

    if (current !== null && mCount === 0) {
      nCount++;

      if (nCount < N) {
        current = current.next;
      } else if (nCount === N) {
        previous.next = current.next;
        current = current.next;
        nCount = 0;
      }
    }
  }

  return head;
}

// Node definition for the linked list
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
const node8 = new ListNode(8);
const node7 = new ListNode(7);
const node6 = new ListNode(6);
const node5 = new ListNode(5);
const node4 = new ListNode(4);
const node3 = new ListNode(3);
const node2 = new ListNode(2);
const node1 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;

// Retain 2 nodes, delete 2 nodes
const M = 2;
const N = 2;

// Modify the linked list
const modifiedHead = retainAndDelete(node1, M, N);

// Print the modified linked list
let current = modifiedHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}

*/
//----------------------------------------------------------------
/*Question 7
function insertAlternate(firstHead, secondHead) {
  let firstPtr = firstHead;
  let secondPtr = secondHead;
  let prev = null;

  while (firstPtr !== null && secondPtr !== null) {
    if (firstPtr.next === null) {
      firstPtr.next = secondPtr;
      break;
    }

    let temp = secondPtr;
    secondPtr = secondPtr.next;
    temp.next = firstPtr.next;
    firstPtr.next = temp;
    firstPtr = firstPtr.next.next;
  }

  return firstHead;
}

// Node definition for the linked list
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create the first linked list: 5 -> 7 -> 17 -> 13 -> 11
const node11 = new ListNode(11);
const node13 = new ListNode(13);
const node17 = new ListNode(17);
const node7 = new ListNode(7);
const node5 = new ListNode(5);

node5.next = node7;
node7.next = node17;
node17.next = node13;
node13.next = node11;

// Create the second linked list: 12 -> 10 -> 2 -> 4 -> 6
const node6 = new ListNode(6);
const node4 = new ListNode(4);
const node2 = new ListNode(2);
const node10 = new ListNode(10);
const node12 = new ListNode(12);

node12.next = node10;
node10.next = node2;
node2.next = node4;
node4.next = node6;

// Insert nodes of the second list into the first list
const modifiedHead = insertAlternate(node5, node12);

// Print the modified first list
let current = modifiedHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}

// Print the modified second list (should be empty)
console.log(node12); // null

*/
//----------------------------------------------------------------
/*Question 8
function isCircular(head) {
  if (head === null) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    if (fast === slow) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
}

// Node definition for the linked list
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create a circular linked list: 1 -> 2 -> 3 -> 4 -> 2 (points back to the second node)
const node2 = new ListNode(2);
const node4 = new ListNode(4);
const node3 = new ListNode(3);
const node1 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

// Check if the linked list is circular
const isCircularList = isCircular(node1);
console.log(isCircularList); // true

*/
//----------------------------------------------------------------
