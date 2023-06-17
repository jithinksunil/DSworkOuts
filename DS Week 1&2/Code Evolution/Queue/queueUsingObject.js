class Queue{
    constructor(){
        this.items={}
        this.tail=0
        this.head=0
    }
    
    enqueue(element){
        this.items[this.tail]=element
        this.tail++
    }
    dequeue(){
        delete this.items[this.head]
        this.head++
    }
    isEmpty(){
        return this.tail-this.head==0
    }
    size(){
        return this.tail-this.head
    }
    print(){
        console.log(this.items)
    }
    peek(){//return the top element in the queue
        if(!this.isEmpty()){
            return this.items[this.head]
        }
        return null
    }
}
const queue=new Queue
queue.enqueue(9)
queue.enqueue(19)
queue.dequeue()
queue.print()
console.log(queue.peek());