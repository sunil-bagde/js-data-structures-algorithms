/* 
A doubly linked list same as a linked list
but except that each node has to links-
one of the point to next, and another point 
to previous

also doubly linked list always keep a track
of both nodes first and last
means head and tail

*/

class Node {
    constructor(value) {
        this.data = value;
        this.nextNode = null;
        this.previousNode = null;
    }
}

class DoublyLinkedList {
    constructor(firstNode = null, lastNode = null) {
        this.firstNode = firstNode;
        this.lastNode = lastNode;
    }

    insertAtEnd(value) {
        const newNode = new Node(value);
        if (!this.firstNode) {
            this.firstNode = newNode;
            this.lastNode = newNode;
        } else {
            newNode.previousNode = this.lastNode;
            this.lastNode.nextNode = newNode;
            this.lastNode = newNode;
        }
    }
}
