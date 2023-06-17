class LinkedList{
    constructor (){
        this.head=null
        this.tail=null
        this.size=0
    }
    
    isEmpty(){
        return this.size == 0
    }

    getSize(){

        return this.size
    }

    prepend(value){//enter node to the head
        const newNode=new Node(value)
        if(this.head==null){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.size++
    }

    apend(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.size++
    }
    
    insertOnIndex(value,index){
        if(index<0||index>=this.getSize()){
            console.log('enter valid index');
            return
        }
        else if(index===0){
            this.prepend(value)
        }else if(index===this.getSize()){
            this.apend(value)
        }else{
            const newNode=new Node(value)
            let current=this.head
            for(let i=0;i<=index-2;i++){
                current=current.next
            }
            newNode.next=current.next
            current.next=newNode
            this.size++
        }
    }

    removeFromIndex(index){
        if(this.getSize()===0){
            console.log('Linked list is empty');
            return
        }
        if(index<0||index>this.getSize()){
            console.log('enter valid index');
            return
        }
        else if(index===0){
            const current=this.head
            this.head=current.next
            current.next=null
            this.size--
            return current.value
        }else{
            let current=this.head
            let previous=null
            for(let i=0;i<=index-1;i++){
                previous=current
                current=current.next
            }
            if(index===this.getSize()-1){
                this.tail=previous
            }
            previous.next=current.next
            current.next=null
            this.size--
            return current.value
        }
    }

    reverse(){
        let current=this.head
        let previous=null
        while(current!=null){
            const next=current.next
            current.next=previous
            previous=current
            current=next
        }
        const temp=this.head
        this.head=this.tail
        this.tail=temp;
    }

    print(){
        let current=this.head
        while(current!=null){
            console.log(current.value);
            current=current.next;
        }
    }

}
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }       
}
module.exports =LinkedList
// const linkedList1=new LinkedList()
// linkedList1.apend(10)
// linkedList1.apend(20)
// linkedList1.apend(30)
// linkedList1.print()
// linkedList1.reverse()
// linkedList1.print()
// console.log(linkedList1.isEmpty());
// console.log(linkedList1.getSize());