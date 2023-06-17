class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        if(this.items.length===0){
            console.log('que is empy');
        }
        else{
            this.items.shift()
        }
    }
    print(){
        console.log(this.items.toString());
    }
}
const quee=new Queue()
quee.enqueue(10)
quee.enqueue(20)
quee.enqueue(30)
// quee.dequeue()
quee.print()