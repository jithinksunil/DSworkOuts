class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Stack{
    constructor(){
        this.head=null
    }
    updateOnPosition(position,newElement){
        let aggregate=1
        let current=head
        while(position>aggregate){
            current=current.next
            aggregate++
        }
        current.value=newElement
    }
}