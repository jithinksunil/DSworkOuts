function factorial(n){
    if(n<=1){
        return n
    }
    return n*factorial(n-1)
}

function fibonacci(n){
    if(n<=1){
        return n
    }
    return fibonacci(n-1)+fibonacci(n-2)
}

function linear(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]==target){
            return i
        }
    }
    return -1
}

function binary(array,target){

    let leftIdx=0
    let rightIdx=array.length-1
    // *******************iteration*******************
    // while(leftIdx<=rightIdx){
    //     let midIdx=Math.floor((leftIdx+rightIdx)/2)
    //     if(target==array[midIdx]){
    //         return midIdx
    //     }else if(target<array[midIdx]){
    //         rightIdx=midIdx-1
    //     }else{
    //         leftIdx=midIdx+1
    //     }
    // }
    // return -1


    /*******************recurssion*******************/
    function binaryHelper(leftIdx,rightIdx){
        if(leftIdx>rightIdx){
            return -1
        }
        let midIdx=Math.floor((leftIdx+rightIdx)/2)
        if(target==array[midIdx]){
            return midIdx
        }else if(target<array[midIdx]){
            return binaryHelper(leftIdx,midIdx-1)
        }else{
            return binaryHelper(midIdx+1,rightIdx)
        }
    }
    return(binaryHelper(leftIdx,rightIdx))

}
function bubbleSort(array){

    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-1-i;j++){
            if(array[j]>array[j+1]){
                temp=array[j]
                array[j]=array[j+1]
                array[j+1]=temp
            }
        }
    }
    return array
}
function insetionSort(array){

    for(let i=1;i<array.length;i++){
        let current=array[i]
        for(let j=i-1;j>=0;j--){
            if(current<array[j]){
                array[j+1]=array[j]
            }else{
                array[j+1]=current
                break;
            }
            if(j==0){
                array[j]=current
            }
        }
    }
    return array
}

function quickSort(array){
    if(array.length==1||array.length==0){
        return array
    }
    let pivot=array[array.length-1]
    let leftArray=[]
    let rightArray=[]
    for(let i=0;i<array.length-1;i++){
        if(array[i]<pivot){
            leftArray.push(array[i])
        }else{
            rightArray.push(array[i])
        }
    }
    return [...quickSort(leftArray),pivot,...quickSort(rightArray)]
}
function mergeSort(array){
    if(array.length<=1){
        return array
    }

    let middIdx=Math.floor(array.length/2)
    let leftArray=array.slice(0,middIdx)
    let rightArray=array.slice(middIdx)
    return merge(mergeSort(leftArray),mergeSort(rightArray))

}

function merge(leftArray,rightArray) {
    let sortedArray=[]
    while(leftArray.length!=0&&rightArray.length!=0){
        if(leftArray[0]<rightArray[0]){
            sortedArray.push(leftArray.shift())
        }else{
            sortedArray.push(rightArray.shift())
        }
    }
    return [...sortedArray,...leftArray,...rightArray]
}
class LinkedListNode{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.root=null
        this.tale=null
        this.size=0
    }
    isEmpty(){
        if(!this.root){
            return true
        }
        return false
    }
    size(){
        return this.size
    }
    append(value){
        const newNode=new LinkedListNode(value)
        if(this.isEmpty()){
            this.root=newNode
            this.tail=newNode
        }
        this.tail.next=newNode
        this.tail=newNode
        this.size++
    }
    prepend(value){
        const newNode=new LinkedListNode(value)
        if(this.isEmpty()){
            this.root=newNode
            this.tail=newNode
            this.size++
            return
        }
        newNode.next=this.root
        this.root=newNode
        this.size++
    }
    insertIntoIndex(value,index){
        if(this.size()-1<index){
            console.log('enter valid index');
        }else if(this.size()==index){
            this.append(value)
            return 
        }else if(index==0){
            this.prepend(value)
        }else{
            let newNode=new LinkedListNode(value)
            let currentNode=this.root
            for(let i=0;i<index;i++){
                currentNode=currentNode.next
            }
            newNode.next=currentNode.next
            currentNode.next=newNode
            this.size++
        }
    }
    reverse(){
        let currentNode=this.root.next
        let previous=null
        while(currentNode){
            let next=currentNode.next
            currentNode.next=previous
            previous=currentNode
            currentNode=next
        }
        let temp=this.root
        this.root=this.tail
        this.tail=temp
        temp=null
    }
}

class DoublyLinkedListNode{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}
class DoublyLinkedList{
    constructor(){
        this.root=null
        this.tale=null
        this.size=0
    }
    isEmpty(){
        if(this.size==0){
            return true
        }
        return false
    }
    size(){
        return this.size
    }
    append(value){
        const newNode=new DoublyLinkedListNode(value)
        if(this.isEmpty()){
            this.root=newNode
            this.tail=newNode
        }
        this.tail.next=newNode
        newNode.prev=this.tail
        this.tail=newNode
        this.size++
    }
    prepend(value){
        const newNode=new DoublyLinkedListNode(value)
        if(this.isEmpty()){
            this.root=newNode
            this.tail=newNode
            this.size++
            return
        }
        newNode.next=this.head
        this.head.prev=newNode
        this.head=newNode
        this.size++
    }
    insertIntoIndex(value,index){
        if(this.size()-1<index){
            console.log('enter valid index');
        }else if(this.size()==index){
            this.append(value)
            return 
        }else if(index==0){
            this.prepend(value)
        }else{
            let newNode=new DoublyLinkedListNode(value)
            let currentNode=this.root
            for(let i=0;i<index;i++){
                currentNode=currentNode.next
            }
            newNode.next=currentNode.next
            currentNode.next.prev=newNode
            newNode.prev=currentNode
            currentNode.next=newNode
            this.size++
        }
    }
    reverse(){
        let currentNode=this.root.next
        while(currentNode){
            let temp=currentNode.next
            currentNode.next=currentNode.prev
            currentNode.prev=temp
            currentNode=currentNode.prev
        }
        let temp=this.root
        this.root=this.tail
        this.tail=temp
        temp=null
    }
}

class Queue{
    constructor(){
        this.root=null
        this.tail=null
        this.size=0
    }

    enque(value){
        let newNode=new LinkedListNode(value)
        this.size++
        if(!this.root){
            this.root=newNode
            this.tail=newNode
            return 
        }
        this.tail.next=newNode
        this.tail=newNode
        
    }
    dequeue(){
        if(!this.root){
            return null
        }
        let item=this.root
        this.root=item.next
        item.next=null
        this.size--
        return item.value
    }
    display(){
        let currentNode=this.root
        while(currentNode){
            console.log(currentNode.value);
            currentNode=currentNode.next
        }
    }
    reverse(){
        let array=[]
        let size=this.size
        while(size>0){
            array.push(this.dequeue())
            size--
        }
        while(array.length>0){
            this.enque(array.pop())
        }
    }
}

class HashMap{
    constructor(size){
        this.array=new Array(size)
        this.size=size
    }
    hashFunction(key){
        key=''+key
        let total=0
        for(let i=0;i<key.length;i++){
            total=total+key.charCodeAt(i)
        }
        return total%this.size
    }
    add(key,value){
        let index=this.hashFunction(key)
        let bucket=this.array[index]
        if(bucket){
            let sameKey=bucket.find((element)=> element[0]==key)
            if(sameKey){
                sameKey[1]=value
            }else{
                bucket.push([key,value])
            }
        }else{
            this.array[index]=[[key,value]]
        }
    }
    display(){
        for(let i=0;i<this.size;i++){
            if(this.array[i]&&this.array[i].length){
                for(let j=0;j<this.array[i].length;j++){
                    console.log(`${this.array[i][j][0]} =>${this.array[i][j][1]}`);
                }
            }
        }
    }
}
class BSTNode{
    constructor(value){
        this.value=value
        this.leftChild=null
        this.rightChild=null
    }
}
class BSearchTree{

    constructor(){
        this.root=null
    }

    addNode(value){
        let newNode=new BSTNode(value)
        if(!this.root){
            this.root=newNode
            return
        }
        let current=this.root
        while(current){
            if(value<current.value){
                current=current.leftChild
                if(!current.leftChild){
                    current.leftChild=newNode
                }
            }else{
                current=current.rightChild
                if(!current.rightChild){
                    current.rightChild=newNode
                }
            }
        }
    }
    addNodeRecurssion(value){
        let newNode=new BSTNode(value)
        if(!this.root){
            this.root=newNode
            return
        }
        let current=this.root
        this.addNodeHelper(newNode,current)
    }
    addNodeHelper(newNode,current){
        if(newNode.value<current.value){
            if(!current.leftChild){
                current.leftChild=newNode
            }else{
                this.addNodeHelper(newNode,current.leftChild)
            }
        }else{
            if(!current.rightChild){
                current.rightChild=newNode
            }else{
                this.addNodeHelper(newNode,current.rightChild)
            }
        }
    }
    removeNode(value){
        let current=this.root
        if(!current){
            console.log('tree empty');
            return
        }
        this.removeNodeHelper(null,current,value)
    }
    removeNodeHelper(parent,current,value){
        if(!current){
            console.log('element not found');
            return 
        }
        if(value<current.value){
            return this.removeNodeHelper(current,current.leftChild,value)
        }else if(value>current.value){
            return this.removeNodeHelper(current,current.rightChild,value)
        }else{
            if(!current.leftChild&&!current.rightChild){
                if(value<parent.value){
                    parent.leftChild=null
                }elseP
                parent.rightChild=null
            }else if(current.leftChild&&!current.rightChild){
                if(value<parent.value){
                    parent.leftChild=current.leftChild
                }else{
                    parent.rightChild=current.leftChild
                }
            }else {
                current.value=current.rightChild.value
                this.removeNodeHelper(current,current.rightChild,current.rightChild.value)
            }
        }
    }
    inOrder(){
        let current=this.root
        this.inOrderHelper(current)
    }
    inOrderHelper(current){
        if(!current){
            return 
        }
        if(current.leftChild){
            this.inOrderHelper(current.leftChild)
        }
        console.log(current.value)
        if(current.rightChild){
            this.inOrderHelper(current.rightChild)
        }
    }
    levelOrder(){
        let current=this.root
        let queue=[]
        queue.push(current)
        while(queue.length){
            let current=queue.shift()
            if(current.leftChild){
                queue.push(current.leftChild)
            }
            if(current.rightChild){
                current.rightChild
            }
            console.log(current.value);
        } 
    }
}
class MinHeap{
    constructor(array){
        this.values=array
        this.build(this.values)
    }
    leftChildIdx(parentIdx){
        return 2*parentIdx+1
    }
    rightChildIdx(parentIdx){
        return 2*parentIdx+2
    }
    parentIdx(childIdx){
        return Math.floor((child-1)/2)

    }
    build(values){
        let lastIdx=values.length-1
        let lastParentIdx=this.parentIdx(lastIdx)
        for(let i=lastParentIdx;i>=0;i--){
            this.shiftDown(i)
        }
    }
    shiftDown(index){
        let values=this.values
        let leftChildIdx=this.leftChildIdx(index)
        let rightChildIdx=this.rightChildIdx(index)
        let endIdx=values.length-1
        if(leftChildIdx==endIdx){
            if(values[index]>values[leftChildIdx]){
                let temp=values[index]
                values[index]=values[leftChildIdx]
                values[leftChildIdx]=temp
            }
            return
        }
        if(values[leftChildIdx]<values[rightChildIdx]){
            if(values[index]>values[leftChildIdx]){
                let temp=values[index]
                values[index]=values[leftChildIdx]
                values[leftChildIdx]=temp
                this.shiftDown(leftChildIdx)
            }
        }else{
            if(values[index]>values[rightChildIdx]){
                let temp=values[index]
                values[index]=values[rightChildIdx]
                values[rightChildIdx]=temp
                this.shiftDown(rightChildIdx)
            }
        }
    }
}

console.log(insetionSort([5,3,8,4,9,2,4,-5,-7]));
