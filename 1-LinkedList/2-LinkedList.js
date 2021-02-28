
class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}

const node1 = new Node("once");
const node2 = new Node("upon");
const node3 = new Node("a");
const node4 = new Node("time");

node1.nextNode = node2;
node2.nextNode = node3;
node3.nextNode = node4;

/* console.log(JSON.stringify(node1,null, 4));*/
class LinkedList {
  constructor(firstNode) {
    this.firstNode = firstNode;
  }

  read(index) {
   let currentNode  = this.firstNode;
   let currentIndex = 0;
   while(currentIndex < index ) {
      currentNode = currentNode.nextNode;
      currentIndex += 1;
   }
   return currentNode ? currentNode.data : null;
  }

  indexOf(value) {

    let currentNode = this.firstNode;
    let currentIndex = 0;

    while(currentNode) {
      if(currentNode.data == value) {
        return currentIndex
      }
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return null;
  }

  insert(index, value) {
   let newNode = new Node(value);
    if(index === 0 ) {
       newNode.nextNode = this.firstNode;
       this.firstNode =  newNode;
       return;
    }
    let currentNode = this.firstNode;
   let currentIndex  = 0;
    while( currentIndex <  ( index - 1 )) {
       currentNode = currentNode.nextNode;
       currentIndex++;
    }
    console.log(currentNode);
    newNode.nextNode = currentNode.nextNode
    currentNode.nextNode= newNode;
  }
  deleteAtIndex(index) {
    if(index === 0) {
       this.firstNode = this.firstNode.nextNode;
    }

   let currentNode = this.firstNode;
   let currentIndex  = 0;

     while(currentIndex < (index - 1)) {
      currentNode = currentNode.nextNode;
      currentIndex += 1
     }

     const nodeAfterDeletedNode = currentNode.nextNode.nextNode;

     currentNode.nextNode = nodeAfterDeletedNode;

  }
}


const list = new LinkedList(node1);

// console.log(list.read(2));
// list.indexOf("time");

 console.log(list.insert(4,"in"))
 console.log(list.insert(5,"CS"))
 list.deleteAtIndex(4);
 //list.deleteAtIndex(4);
 console.log(JSON.stringify(list,null,4));
