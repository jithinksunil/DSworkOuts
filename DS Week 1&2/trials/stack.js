class ArrayStack{
    constructor(){
        this.value=[]
    }
    push(element){
        this.value.unshift(element)
    }
    pop(){
        this.value.shift()
    }
    print(){
        console.log(this.value.toString());
    }
}
const stack=new ArrayStack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
class Node{
    constructor(element){
        this.value=element
        
    }
    next=null
}
class LinkedListedStack{
    head=null
    push(element){
        const newNode=new Node(element)
        if(this.head!=null){
            newNode.next=this.head
        }
        this.head=newNode
    }
    pop(){
        if(this.head==null){
            newNode.next=this.head
        }else{
            this.head=this.head.next
        }
    }
    print (){
        let current=this.head
        while(current!=null){
            console.log(current.value)
            current=current.next
        }
    }
}
const linkedStack=new LinkedListedStack()
linkedStack.push(10)
linkedStack.push(20)
linkedStack.push(30)
linkedStack.pop()
linkedStack.print()