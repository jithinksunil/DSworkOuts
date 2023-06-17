class BinarySearchTree{
    constructor(){
        this.root=null
    }
    insertNode(value){
        let newNode=new Node(value)
        if(!this.root){
            this.root=newNode
            return
        }
        let currentNode=this.root

        while(currentNode!=null){
            if(value<currentNode.value){
                if(currentNode.leftChild==null){
                    currentNode.leftChild=newNode
                    return
                }
                currentNode=currentNode.leftChild
            }else{
                if(currentNode.rightChild==null){
                    currentNode.rightChild=newNode
                    return
                }
                currentNode=currentNode.rightChild
            }
        }

    }
    inOrder(){
        this.inOrderHelper(this.root)
    }
    inOrderHelper(currentNode){
        if(currentNode==null){
            return
        }
        this.inOrderHelper(currentNode.leftChild)
        console.log(currentNode.value);
        this.inOrderHelper(currentNode.rightChild)
    }
    checkBinary(){
        return this.checkBinaryHelper(this.root)
    }
    checkBinaryHelper(current){
        if(current==null){
            return true
        }
        let leftSatisfied
        let rightSatisfied
        if(current.leftChild){
            if(current.leftChild.value<current.value){
                leftSatisfied=this.checkBinaryHelper(current.leftChild)
               }else{
                return false
            }
        }
        else{
            leftSatisfied=true
        }
        if(current.rightChild){
            if(current.rightChild.value>current.value){
                rightSatisfied=this.checkBinaryHelper(current.rightChild)
               }else{
                return false
            }
        }else{
            rightSatisfied=true
        }
       
       return leftSatisfied && rightSatisfied
    }
}
class Node{
    constructor(value){
        this.value=value
        this.rightChild=null
        this.leftChild=null
    }
}

let binary=new BinarySearchTree()
binary.insertNode(10)
binary.insertNode(8)
binary.insertNode(12)
binary.insertNode(15)
binary.insertNode(1)
console.log(binary.checkBinary());