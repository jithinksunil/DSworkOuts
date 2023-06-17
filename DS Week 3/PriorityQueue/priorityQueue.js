class PriorityQueue{
    constructor(){
        this.queue=[]
    }
    isEmpty(){
        return this.queue.length===0
    }
    enqueue([element,priority]){
        let inserted=false
        let queueLength=this.queue.length
        for(let i=0;i<queueLength;i++){
            if(priority>this.queue[i][1]){
                this.queue.splice(i,0,[element,priority])
                inserted=true
                i++
            }
        }
        if(!inserted){
            this.queue.push([element,priority])
        }
    }
    dequeue(){
        return this.queue.shift()
    }
    display(){
        for(let i=0;i<this.queue.length;i++){
            console.log(this.queue[i][0]);
        }
    }
}
let pq=new PriorityQueue()
pq.enqueue(['s',1])
pq.enqueue(['k',2])
pq.enqueue(['jithin',3])
pq.display()


