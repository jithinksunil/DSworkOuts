const LinkedList=require('../LinkedList/linkedList')
class LinkedListQueue{
    constructor(){
        this.list=new LinkedList()
    }
    enqueue(value){
        this.list.apend(value)
    }
    dequeue(){
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

const queue1=new LinkedListQueue()
queue1.enqueue(10)
queue1.enqueue(20)
queue1.enqueue(30)
queue1.dequeue(30)
queue1.print()
console.log(queue1.isEmpty())
console.log(queue1.getSize());