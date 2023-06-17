class Stack{
    
    constructor(){
        this.items=[]
    }
    
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
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
    peek(){//return the top element in the stack
        return this.items[this.items.length-1]
    }
    insertInPosition(element,positionFromTop){
        let auxillaryArray=[]
        for(let i=1;i<positionFromTop;i++){
            auxillaryArray.push(this.pop())
        }
        this.items.push(element)
        while(auxillaryArray.length>=1){
            this.push(auxillaryArray.pop())
        }
    }
}
const stack=new Stack
stack.push(9)
stack.push(19)
stack.push(30)
stack.insertInPosition(22,2)
stack.print()
console.log(stack.peek());