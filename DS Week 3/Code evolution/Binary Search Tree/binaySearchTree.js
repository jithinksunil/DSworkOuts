class Node {
    constructor(value){
        this.value=value
        this.leftChild=null
        this.rightChild=null
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root?false:true
    }
    insertNode(value){
        const newNode=new Node(value)
        if(!this.root){
            this.root=newNode
            return
        }else{
            let prev=null
            let currentNode=this.root
            while(currentNode!=null){
                prev=currentNode
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
    }
    insertNodeRecurssion(value){
        const newNode=new Node(value)
        if(!this.root){
            this.root=newNode
            return
        }else{
            this.insertNodeHelperRecurssion(this.root,newNode)
        }
    }
    insertNodeHelperRecurssion(currentNode,newNode){

        if(newNode.value<currentNode.value){
            if(currentNode.leftChild==null){
                currentNode.leftChild=newNode
                return
            }else{
                this.insertNodeHelperRecurssion(currentNode.leftChild,newNode)
            }
        }
        else{
            if(currentNode.rightChild==null){
                currentNode.rightChild=newNode
                return
            }else{
                this.insertNodeHelperRecurssion(currentNode.rightChild,newNode)
            }
        }
    }

    contains(value){
        return this.containsHelper(this.root,value)
    }

    containsHelper(currentNode,value){
        if(currentNode==null){
            return false
        }
        if(value<currentNode.value){
            return this.containsHelper(currentNode.leftChild,value)
        }
        else if(value>currentNode.value){
            return this.containsHelper(currentNode.rightChild,value)
        }else{
            return true
        }
    }
    preOrder(){
        this.preOrderHelper(this.root)
    }
    preOrderHelper(currentNode){
        console.log(currentNode.value);
        if(currentNode.leftChild){
            this.preOrderHelper(currentNode.leftChild)
        }
        if(currentNode.rightChild){
            this.preOrderHelper(currentNode.rightChild)
        }
        return
    }

    inOrder(){
        this.inOrderHelper(this.root)
    }
    inOrderHelper(currentNode){
        if(currentNode.leftChild){
            this.inOrderHelper(currentNode.leftChild)
        }
        console.log(currentNode.value);
        if(currentNode.rightChild){
            this.inOrderHelper(currentNode.rightChild)
        }
        
        return
    }

    postOrder(){
        this.postOrderHelper(this.root)
    }
    postOrderHelper(currentNode){
        if(currentNode.leftChild){
            this.postOrderHelper(currentNode.leftChild)
        }
        if(currentNode.rightChild){
            this.postOrderHelper(currentNode.rightChild)
        }
        console.log(currentNode.value);
        return
    }
    levelOrder(){
        
        if(!this.root){
            console.log('tree is empty');
            return
        }

        let queue=[]
        queue.push(this.root)
        while(queue.length>=1){
            let currentNode=queue.shift()
        if(currentNode.leftChild){
            queue.push(currentNode.leftChild)
        }
        if(currentNode.rightChild){
            queue.push(currentNode.rightChild)
        }
        console.log(currentNode.value);
        }

    }
    removeNode(value){
        if(!this.root){
            console.log('tree is empty');
            return 
        }
        this.removeNodeHelperRecurssion(null,this.root,value)
    }
    removeNodeHelperRecurssion(parent,currentNode,value){
        if(!currentNode){
            console.log('element does not exists');
            return
        }
        if(value<currentNode.value){
            this.removeNodeHelperRecurssion(currentNode,currentNode.leftChild,value)
        }else if (value>currentNode.value){
            this.removeNodeHelperRecurssion(currentNode,currentNode.rightChild,value)
        }else{
            if(!currentNode.leftChild&&!currentNode.leftChild){
                if(currentNode.value<parent.value){
                    parent.leftChild=null
                }
                else{
                    parent.rightChild=null
                }
            }else if(!currentNode.leftChild&&currentNode.rightChild){
                if(currentNode.value<parent.value){
                    parent.leftChild=currentNode.rightChild
                }
                else{
                    parent.rightChild=currentNode.rightChild
                }
            }else if(currentNode.leftChild&&!currentNode.rightChild){
                if(currentNode.value<parent.value){
                    parent.leftChild=currentNode.leftChild
                }
                else{
                    parent.rightChild=currentNode.leftChild
                }
            }else{
                currentNode.value=currentNode.rightChild.value
                this.removeNodeHelperRecurssion(currentNode,currentNode.rightChild,currentNode.rightChild.value)
            }
            return
        }
    }
    mirror(){
        let current=this.root
        this.mirrorHelper(current)
    }
    mirrorHelper(current){
        if(!current){
            return
        }
        const temp=current.leftChild
        current.leftChild=current.rightChild
        current.rightChild=temp
        this.mirrorHelper(current.leftChild)
        this.mirrorHelper(current.rightChild)
    }
}
const bst=new BinarySearchTree()
bst.insertNode(10)
bst.insertNode(8)
bst.insertNode(12)
bst.insertNode(6)
bst.insertNode(9)
bst.insertNode(11)
bst.insertNode(14)
console.log(bst.contains(8));