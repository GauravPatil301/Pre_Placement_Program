/*Question 1

*/
//-----------------------------------------------------------------
/*Question 1
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  addNode(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  
  displayList() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + '->';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
  
  compareAndCreateNewList(list1, list2) {
    let current1 = list1.head;
    let current2 = list2.head;
    const newList = new LinkedList();
    
    while (current1 !== null && current2 !== null) {
      if (current1.data >= current2.data) {
        newList.addNode(current1.data);
        current1 = current1.next;
      } else {
        newList.addNode(current2.data);
        current2 = current2.next;
      }
    }
    
    while (current1 !== null) {
      newList.addNode(current1.data);
      current1 = current1.next;
    }
    
    while (current2 !== null) {
      newList.addNode(current2.data);
      current2 = current2.next;
    }
    
    return newList;
  }
}

// Example usage
const list1 = new LinkedList();
list1.addNode(5);
list1.addNode(2);
list1.addNode(3);
list1.addNode(8);

const list2 = new LinkedList();
list2.addNode(1);
list2.addNode(7);
list2.addNode(4);
list2.addNode(5);

const newList = list1.compareAndCreateNewList(list1, list2);
newList.displayList(); // Output: 5->7->4->8

*/
//-----------------------------------------------------------------
/*Question 2
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  addNode(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  
  removeDuplicates() {
    let current = this.head;
    
    while (current !== null) {
      let nextDistinctNode = current.next;
      
      while (nextDistinctNode !== null && nextDistinctNode.data === current.data) {
        nextDistinctNode = nextDistinctNode.next;
      }
      
      current.next = nextDistinctNode;
      current = nextDistinctNode;
    }
  }
  
  displayList() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + '->';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.addNode(11);
linkedList.addNode(11);
linkedList.addNode(11);
linkedList.addNode(21);
linkedList.addNode(43);
linkedList.addNode(43);
linkedList.addNode(60);

linkedList.displayList(); // Output: 11->11->11->21->43->43->60
linkedList.removeDuplicates();
linkedList.displayList(); // Output: 11->21->43->60

*/
//-----------------------------------------------------------------
/*Question 3
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  addNode(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  
  reverseKNodes(k) {
    this.head = this.reverseKNodesUtil(this.head, k);
  }
  
  reverseKNodesUtil(head, k) {
    let current = head;
    let next = null;
    let prev = null;
    let count = 0;
    
    // Reverse the first k nodes
    while (count < k && current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count++;
    }
    
    // If there are remaining nodes, recursively reverse them
    if (next !== null) {
      head.next = this.reverseKNodesUtil(next, k);
    }
    
    // prev is the new head of the reversed group
    return prev;
  }
  
  displayList() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + '->';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(2);
linkedList.addNode(4);
linkedList.addNode(5);
linkedList.addNode(6);
linkedList.addNode(7);
linkedList.addNode(8);

linkedList.displayList(); // Output: 1->2->2->4->5->6->7->8
linkedList.reverseKNodes(4);
linkedList.displayList(); // Output: 4->2->2->1->8->7->6->5

*/
//-----------------------------------------------------------------
/*Question 4
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  addNode(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  
  reverseAlternateKNodes(k) {
    this.head = this.reverseAlternateKNodesUtil(this.head, k, true);
  }
  
  reverseAlternateKNodesUtil(head, k, reverse) {
    if (head === null) {
      return null;
    }
    
    let current = head;
    let next = null;
    let prev = null;
    let count = 0;
    
    // Reverse k nodes if reverse is true
    if (reverse) {
      while (count < k && current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
      }
    }
    // Skip k nodes if reverse is false
    else {
      while (count < k && current !== null) {
        prev = current;
        current = current.next;
        count++;
      }
    }
    
    // Reverse the next k nodes recursively
    if (reverse) {
      head.next = this.reverseAlternateKNodesUtil(current, k, !reverse);
    }
    // Connect the next k nodes without reversing
    else {
      prev.next = this.reverseAlternateKNodesUtil(current, k, !reverse);
    }
    
    // prev is the new head of the reversed group
    return prev;
  }
  
  displayList() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + '->';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);
linkedList.addNode(6);
linkedList.addNode(7);
linkedList.addNode(8);
linkedList.addNode(9);

linkedList.displayList(); // Output: 1->2->3->4->5->6->7->8->9->null
linkedList.reverseAlternateKNodes(3);
linkedList.displayList(); // Output: 3->2->1->4->5->6->9->8->7->null

*/
//-----------------------------------------------------------------
/*Question 5
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  addNode(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  
  deleteLastOccurrence(key) {
    let toDelete = null;
    let current = this.head;
    let prev = null;
    
    while (current !== null) {
      if (current.data === key) {
        toDelete = current;
      }
      current = current.next;
    }
    
    if (toDelete === null) {
      return;
    }
    
    current = this.head;
    
    while (current !== null) {
      if (current === toDelete) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        break;
      }
      prev = current;
      current = current.next;
    }
  }
  
  displayList() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + '->';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(5);
linkedList.addNode(2);
linkedList.addNode(10);

linkedList.displayList(); // Output: 1->2->3->5->2->10
linkedList.deleteLastOccurrence(2);
linkedList.displayList(); // Output: 1->2->3->5->10

*/
//-----------------------------------------------------------------
/*Question 6
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergeSortedLists(headA, headB) {
  // Create a dummy node as the head of the merged list
  const dummyNode = new Node(0);
  let tail = dummyNode;

  while (headA !== null && headB !== null) {
    if (headA.data <= headB.data) {
      tail.next = headA;
      headA = headA.next;
    } else {
      tail.next = headB;
      headB = headB.next;
    }
    tail = tail.next;
  }

  // Append remaining nodes of list A, if any
  if (headA !== null) {
    tail.next = headA;
  }

  // Append remaining nodes of list B, if any
  if (headB !== null) {
    tail.next = headB;
  }

  return dummyNode.next; // Return the head of the merged list
}

// Example usage
const listA = new Node(5);
listA.next = new Node(10);
listA.next.next = new Node(15);

const listB = new Node(2);
listB.next = new Node(3);
listB.next.next = new Node(20);

const mergedList = mergeSortedLists(listA, listB);
console.log(mergedList);

*/
//-----------------------------------------------------------------
/*Question 7
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  
  addNode(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
    }
  }
  
  reverse() {
    let current = this.head;
    let temp = null;
    
    while (current !== null) {
      // Swap prev and next pointers of the current node
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      
      // Move to the next node
      current = current.prev;
    }
    
    // Update the head pointer
    if (temp !== null) {
      this.head = temp.prev;
    }
  }
  
  displayList() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' ';
      current = current.next;
    }
    console.log(result);
  }
}

// Example usage
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.addNode(10);
doublyLinkedList.addNode(8);
doublyLinkedList.addNode(4);
doublyLinkedList.addNode(2);

console.log('Original Linked List:');
doublyLinkedList.displayList(); // Output: 10 8 4 2

doublyLinkedList.reverse();

console.log('Reversed Linked List:');
doublyLinkedList.displayList(); // Output: 2 4 8 10

*/
//-----------------------------------------------------------------
/*Question 8
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  
  addNode(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
    }
  }
  
  deleteNode(position) {
    if (position === 1) {
      if (this.head === null) {
        return;
      }
      this.head = this.head.next;
      if (this.head !== null) {
        this.head.prev = null;
      }
      return;
    }
    
    let current = this.head;
    let count = 1;
    
    while (current !== null && count < position) {
      current = current.next;
      count++;
    }
    
    if (current === null) {
      return;
    }
    
    current.prev.next = current.next;
    
    if (current.next !== null) {
      current.next.prev = current.prev;
    }
  }
  
  displayList() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' ';
      current = current.next;
    }
    console.log(result);
  }
}

// Example usage
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.addNode(1);
doublyLinkedList.addNode(3);
doublyLinkedList.addNode(4);

console.log('Original Linked List:');
doublyLinkedList.displayList(); // Output: 1 3 4

doublyLinkedList.deleteNode(3);

console.log('Linked List after deleting node at position 3:');
doublyLinkedList.displayList(); // Output: 1 3

*/
//-----------------------------------------------------------------
