const LinkedList=require('../LinkedList/linkedList')
class LinkedListStack{
    constructor(){
        this.list=new LinkedList()
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
        this.list.removeFromIndex(0)
    }
    peek(){
        return this.list.head.value
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    print(){
        this.list.print()
    }
    getSize(){
        return this.list.getSize()
    }
}
const stack=new LinkedListStack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
stack.print()
console.log(stack.isEmpty());
console.log(stack.getSize());