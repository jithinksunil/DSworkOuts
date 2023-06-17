class Node{
    constructor(value){
        this.value=value
        this.rightChild=null
        this.leftChild=null
    }
}
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
        while(currentNode){
            if(value<currentNode.value){
                if(!currentNode.leftChild){
                    currentNode.leftChild=newNode
                    break
                }
                currentNode=currentNode.leftChild
            }else{
                if(!currentNode.rightChild){
                    currentNode.rightChild=newNode
                    break
                }
                currentNode=currentNode.rightChild
            }
        }
    }
    insertNodeByRecursion(value){
        let newNode=new Node(value)
        if(!this.root){
            this.root=newNode
            return
        }
        this.insertNodeByRecursionHelper(value,newNode,this.root)
    }
    insertNodeByRecursionHelper(value,newNode,current){
        if(value<current.value){
            if(!current.leftChild){
                current.leftChild=newNode
                return
            }
            this.insertNodeByRecursion(value,newNode,current.leftChild)
        }else{
            if(!current.rightChild){
                current.rightChild=newNode
                return
            }
            this.insertNodeByRecursion(value,newNode,current.rightChild)
        }
    }
    removeNode(value){
        this.removeNodeHelper(value,this.root,null)
    }
    removeNodeHelper(value,current,parent){
        while(current){
            if(value<current.value){
                parent=current
                current=current.leftChild
            }else if(value>current.value){
                parent=current
                current=current.rightChild
            }else{
                if(!current.leftChild && !current.rightChild){
                    if(current.value<parent.value){
                        parent.leftChild=null
                    }else{
                        parent.rightChild=null
                    }
                }
                else if(!current.rightChild && current.leftChild){
                    if(current.value<parent.value){
                        parent.leftChild=current.leftChild
                    }else{
                        parent.rightChild=current.leftChild
                    }
                }
                else{
                    current.value=current.rightChild.value
                    this.removeNodeHelper(current.rightChild.value,current.rightChild,current)
                }
            }
        }
        console.log('node does not exitst');
    }
    removeNodeRecurssion(value){
        this.removeNodeRecurssionHelper(value,this.root,null)
    }
    removeNodeRecurssionHelper(value,current){
        if(!current){
            console.log('node does not exitst');
            return
        }

        if(value<current.value){
            parent=current
            removeNodeRecurssionHelper(value,current.leftChild)
        }else if(value>current.value){
            parent=current
            removeNodeRecurssionHelper(value,current.rightChild)
        }else{
            if(!current.leftChild && !current.rightChild){
                if(current.value<parent.value){
                    parent.leftChild=null
                }else{
                    parent.rightChild=null
                }
            }
            else if(!current.rightChild && current.leftChild){
                if(current.value<parent.value){
                    parent.leftChild=current.leftChild
                }else{
                    parent.rightChild=current.leftChild
                }
            }
            else{
                current.value=current.rightChild.value
                this.removeNodeRecurssionHelper(current.rightChild.value,current.rightChild)
            }
        }
    }
    inOrder(){
        this.inOrderHelper(this.root)
    }
    inOrderHelper(current){
        if(!current){
            return
        }
        this.inOrderHelper(current.leftChild)
        console.log(current.value);
        this.inOrderHelper(current.rightChild)
    }
    preOrder(){
        this.preOrderHelper(this.root)
    }
    preOrderHelper(current){
        if(!current){
            return
        }
        console.log(current.value);
        this.preOrderHelper(current.leftChild)
        this.preOrderHelper(current.rightChild)
    }
    postOrder(){
        this.postOrderHelper(this.root)
    }
    postOrderHelper(current){
        if(!current){
            return
        }
        this.postOrderHelper(current.leftChild)
        this.postOrderHelper(current.rightChild)
        console.log(current.value);
    }
    levelOrder(){
        let queue=[]
        queue.push(this.root)
        while(queue.length>=1){
            let current=queue.shift()
            console.log(current.value);
            if(current.leftChild){
                queue.push(current.leftChild)
            }
            if (current.rightChild) {
                queue.push(current.rightChild)
            }
        }
    }

}

let bst=new BinarySearchTree()
bst.insertNode(10)
bst.insertNode(8)
bst.insertNode(7)
bst.insertNode(9)
bst.insertNode(12)
bst.insertNode(11)
bst.insertNode(13)
// bst.inOrder()
// bst.preOrder()
bst.levelOrder()