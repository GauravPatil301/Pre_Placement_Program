/*Question 1
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  detectAndRemoveLoop() {
    let slow = this.head;
    let fast = this.head;
    let loopExists = false;

    // Find if a loop exists
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        loopExists = true;
        break;
      }
    }

    // If a loop exists, find the loop starting point and remove the loop
    if (loopExists) {
      slow = this.head;
      while (slow.next !== fast.next) {
        slow = slow.next;
        fast = fast.next;
      }
      fast.next = null; // Remove the loop by breaking the link
    }
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(3);
linkedList.addNode(4);

// Creating a loop
linkedList.head.next.next.next = linkedList.head.next;

// Remove the loop
linkedList.detectAndRemoveLoop();

// Print the linked list after removing the loop
let current = linkedList.head;
while (current) {
  console.log(current.value);
  current = current.next;
}

*/
//----------------------------------------------------------------------
/*Question 2
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  addOne() {
    this.reverse();

    let current = this.head;
    let carry = 1;

    while (current) {
      const sum = current.value + carry;
      carry = Math.floor(sum / 10);
      current.value = sum % 10;

      if (!carry) {
        break;
      }

      current = current.next;
    }

    if (carry) {
      const newNode = new Node(carry);
      current.next = newNode;
    }

    this.reverse();
  }

  getNumber() {
    let number = '';
    let current = this.head;

    while (current) {
      number += current.value;
      current = current.next;
    }

    return number;
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.addNode(4);
linkedList.addNode(5);
linkedList.addNode(6);

console.log('Original Number:', linkedList.getNumber());

linkedList.addOne();

console.log('Number after adding 1:', linkedList.getNumber());

*/
//----------------------------------------------------------------------
/*Question 3
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.bottom = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  mergeSortedList(a, b) {
    if (!a) return b;
    if (!b) return a;

    let result = null;
    if (a.data <= b.data) {
      result = a;
      result.bottom = this.mergeSortedList(a.bottom, b);
    } else {
      result = b;
      result.bottom = this.mergeSortedList(a, b.bottom);
    }

    result.next = null;
    return result;
  }

  flattenLinkedList() {
    if (!this.head || !this.head.next) {
      return this.head;
    }

    this.head.next = this.flattenLinkedListUtil(this.head.next);
    return this.head;
  }

  flattenLinkedListUtil(right) {
    if (!right) {
      return null;
    }

    right = this.flattenLinkedListUtil(right.next);
    this.head = this.mergeSortedList(this.head, right);

    return this.head;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.bottom;
    }
  }
}

// Example usage
const linkedList = new LinkedList();

// Creating the sub-linked lists
const sublist1 = new Node(5);
sublist1.bottom = new Node(7);
sublist1.bottom.bottom = new Node(8);
sublist1.bottom.bottom.bottom = new Node(30);

const sublist2 = new Node(10);
sublist2.bottom = new Node(20);

const sublist3 = new Node(19);
sublist3.bottom = new Node(22);
sublist3.bottom.bottom = new Node(50);

const sublist4 = new Node(28);
sublist4.bottom = new Node(35);
sublist4.bottom.bottom = new Node(40);
sublist4.bottom.bottom.bottom = new Node(45);

// Connecting the sub-linked lists
linkedList.head = sublist1;
sublist1.next = sublist2;
sublist2.next = sublist3;
sublist3.next = sublist4;

// Flatten the linked list
linkedList.flattenLinkedList();

// Print the flattened list
linkedList.printList();

*/
//----------------------------------------------------------------------
/*Question 4
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.random = null;
  }
}

const copyRandomList = (head) => {
  if (!head) return null;

  // Step 1: Create a copy of each node and link it to the next node
  let current = head;
  while (current) {
    const newNode = new Node(current.data);
    newNode.next = current.next;
    current.next = newNode;
    current = current.next.next;
  }

  // Step 2: Update the random pointers of the copied nodes
  current = head;
  while (current) {
    if (current.random) {
      current.next.random = current.random.next;
    }
    current = current.next.next;
  }

  // Step 3: Separate the original list from the copied list
  const dummy = new Node(0);
  let newCurrent = dummy;
  current = head;

  while (current) {
    newCurrent.next = current.next;
    current.next = current.next.next;
    current = current.next;
    newCurrent = newCurrent.next;
  }

  // Step 4: Return the head of the copied list
  return dummy.next;
};

// Example usage
const head = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

head.next = node2;
head.random = node3;
node2.next = node3;
node2.random = node5;
node3.next = node4;
node3.random = node2;
node4.next = node5;
node4.random = node4;
node5.random = node3;

const copiedList = copyRandomList(head);

// Print the copied list
let current = copiedList;
while (current) {
  console.log('Node:', current.data);
  console.log('Random Node:', current.random ? current.random.data : null);
  current = current.next;
}

*/
//----------------------------------------------------------------------
/*Question 5
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const oddEvenList = (head) => {
  if (!head || !head.next) {
    return head;
  }

  let oddHead = head;
  let evenHead = head.next;
  let oddTail = oddHead;
  let evenTail = evenHead;

  let current = evenHead.next;
  let index = 3;

  while (current) {
    if (index % 2 === 1) {
      oddTail.next = current;
      oddTail = oddTail.next;
    } else {
      evenTail.next = current;
      evenTail = evenTail.next;
    }

    current = current.next;
    index++;
  }

  oddTail.next = evenHead;
  evenTail.next = null;

  return oddHead;
};

// Example usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const reorderedList = oddEvenList(head);

// Print the reordered list
let current = reorderedList;
while (current) {
  console.log(current.val);
  current = current.next;
}

*/
//----------------------------------------------------------------------
/*Question 6
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const leftShiftLinkedList = (head, k) => {
  if (!head || !head.next || k <= 0) {
    return head;
  }

  let current = head;
  let count = 1;

  while (count < k && current) {
    current = current.next;
    count++;
  }

  if (!current) {
    return head;
  }

  const newHead = current.next;
  current.next = null;

  let tail = newHead;
  while (tail.next) {
    tail = tail.next;
  }

  tail.next = head;

  return newHead;
};

// Example usage
const head = new ListNode(2);
head.next = new ListNode(4);
head.next.next = new ListNode(7);
head.next.next.next = new ListNode(8);
head.next.next.next.next = new ListNode(9);

const k = 3;

const shiftedList = leftShiftLinkedList(head, k);

// Print the shifted list
let current = shiftedList;
while (current) {
  console.log(current.val);
  current = current.next;
}

*/
//----------------------------------------------------------------------
/*Question 7
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const nextLargerNodes = (head) => {
  const arr = [];

  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  const stack = [];
  const result = new Array(arr.length).fill(0);

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
    }

    stack.push(arr[i]);
  }

  return result.reverse();
};

// Example usage
const head = new ListNode(2);
head.next = new ListNode(1);
head.next.next = new ListNode(5);

const result = nextLargerNodes(head);

console.log(result);

*/
//----------------------------------------------------------------------
/*Question 8
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeZeroSumSublists = (head) => {
  const dummy = new ListNode(0);
  dummy.next = head;

  let prefixSum = 0;
  const prefixSumMap = new Map();
  prefixSumMap.set(0, dummy);

  let current = head;

  while (current) {
    prefixSum += current.val;

    if (prefixSumMap.has(prefixSum)) {
      const prev = prefixSumMap.get(prefixSum);
      let node = prev.next;
      let sum = prefixSum;

      while (node !== current) {
        sum += node.val;
        prefixSumMap.delete(sum);
        node = node.next;
      }

      prev.next = current.next;
    } else {
      prefixSumMap.set(prefixSum, current);
    }

    current = current.next;
  }

  return dummy.next;
};

// Example usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(-3);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(1);

const result = removeZeroSumSublists(head);

// Print the modified list
let current = result;
while (current) {
  console.log(current.val);
  current = current.next;
}

*/
//----------------------------------------------------------------------
