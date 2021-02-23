class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }
    append(value) {
        const node = {
            value: value,
            next: null,
        };
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }
    print() {
        let string = "";
        let current = this.head;
        while (current !== null) { 
            string +=  current.value + (current.next ? "→": null)
            current = current.next;
        }
        return string;
    }

}

const list = new LinkedList(10);
list.append(5);

list.prepend(2);
list.prepend(1);
console.log(list.print());
//console.log(list.length);
