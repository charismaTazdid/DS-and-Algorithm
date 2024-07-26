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

    delete() {
        // Implemented later
    }

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
list1.append("30 years old, I am a billionear")
list1.append(true)
list1.append("Okey, It works")
list1.append(55.45)
list1.prepend('Okay, Now prepend works.')

console.log(list1.toArray())
