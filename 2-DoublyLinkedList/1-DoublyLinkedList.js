class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    prepend(value) {
        // 1 -> 2 -> 3
        const newNode = new Node(value);
        if (this.empty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            node.previous = this.tail;
            this.tail = newNode;
        }
        return this;
    }
    empty() {
        return this.length === 0;
    }
    /*
     Unshift
    Add node at beginning at
    of the LinkedList
     */
    append(value) {
        const newNode = new Node(value);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.previous = this.head;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    /*
     param1 index
     param2 value

     find the index i want to insert -1
     then node i found that append new node
     new node next add remaining list

    */
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const node = new Node(value);

        const appendTo = this.find(index - 1);
        const remainingList = appendTo.next;
        appendTo.next = node;
        node.next = remainingList;
        return this;
    }
    remove(index) {
        const findNode = this.find(index - 1);
        const nodeToRemove = findNode.next;
        findNode.next = nodeToRemove.next;
        this.length--;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        const poppedNode = this.tail;
        if (this.length == 1) {
            // this.head === this.tail
            this.head = null;
            this.tail = null;
        } else {
            // if more than one nodes in linked list
            this.tail = poppedNode.previous;
            this.tail.next = null;
            poppedNode.previous = null;
        }
        this.length--;
        return poppedNode;
    }
    get(index) { 
        if (index < 0 || index >= this.length) {
            return null;
        }
        let count = 0;
        console.log(count);
        let current = this.head;
        if (index <=  (this.length / 2)) {
            while (count !== index) {
                current = current.next;
                count++;
            }

            return  current;
        } else {
        console.log("2");
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.previous;
                count--;
            }
              return current;
        }
        return undefined
      
    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        const oldHead = this.head;
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head.previous = null;
            oldHead.previous = null;
        }

        this.length--;
        return this;
    }
    find(index) {
        let current = this.head;
        let counter = 0;
        while (index != counter) {
            current = current.next;
            counter++;
        }
        return current;
    }
    print() {
        let string = "";
        let current = this.head;
        while (current !== null) {
            string += current.value + (current.next ? "→" : null);
            current = current.next;
        }
        return string;
    }
}

const list = new DoublyLinkedList();
 
list.append(99);
list.append(100);
list.append(101);
list.append(1102);
console.log(list);

 
