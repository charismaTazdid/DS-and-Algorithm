// Custom DS: LinkedList

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    };
    append(value) {
        const newNode = { value: value, next: null }
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
    };
    prepend(value) {
        const newNode = { value: value, next: this.head };
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    };

    delete(value) {
        if (!this.head) {
            return;
        }
        // is the value === first element of the list value we want to delete
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }
        if(this.tail.value === value){
            this.tail = currentNode;
        }
    };


    toArray() {
        const elements = [];
        let currentNode = this.head;
        while (currentNode) {
            elements.push(currentNode);
            currentNode = currentNode.next;
        }
        return elements;
    };
};

const list1 = new LinkedList()
list1.append("You Only get 1 Life")
list1.append(true)
list1.append("Okey, It works")
list1.append(55.45)
list1.append(55.45)
list1.prepend('Okay, Now prepend works.')
list1.delete(55.45);


console.log(list1.toArray())
