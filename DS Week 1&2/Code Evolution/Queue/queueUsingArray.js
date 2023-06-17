class Queue{
    constructor(){
        this.items=[]
    }
    
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        this.items.shift()
    }
    isEmpty(){
        return this.items.length==0
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
    peek(){//return the top element in the queue
        if(!this.isEmpty()){
            return this.items[0]
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