public class BinarySearchTree{
    public static void main(String[] args) {
        BinarySearchTree binaryTree=new BinarySearchTree();
        binaryTree.addNode(10);
        binaryTree.addNode(9);
        binaryTree.addNode(11);
        binaryTree.addNode(12);
        binaryTree.addNode(14);
        binaryTree.addNode(13);
        binaryTree.addNode(17);
        // binaryTree.closest(16);
        // binaryTree.remove(11);
        binaryTree.inOrder();
        // binaryTree.preOrder();
        // binaryTree.postOrder();
        // // int a=5;
        // System.out.println(binaryTree.contains(a)); 
        
    }

    class Node{
        int data;
        Node left,right;
        Node (int data){
            this.data=data;
        }
    }

    public Node root=null;

    public void addNode(int data){
        Node newNode=new Node(data);
        Node currentNode=root;
        if(currentNode==null){
            root=newNode;
            return;
        }else{
            while(true){
                if(data<currentNode.data){
                    if(currentNode.left==null){
                        currentNode.left=newNode;
                        break;
                    }
                    else{currentNode=currentNode.left;}
                }else if(data>=currentNode.data){
                    if(currentNode.right==null){
                        currentNode.right=newNode;
                        break;
                    }
                    else{
                        currentNode=currentNode.right;
                    }
                }
            }
        }
    }

    public boolean contains(int data){
        Node currentNode=root;
        while(currentNode.data!=data){
            if(data<currentNode.data){
                currentNode=currentNode.left;
                if(currentNode==null){
                    return false;
                }
            }
            else if(data>=currentNode.data){
                currentNode=currentNode.right;
                if(currentNode==null){
                    return false;
                }
            }
            
        }
        return true;
        
    }

    public void remove(int data){
        Node currentNode=root;
        Node parentNode=null;
        removeHelper(currentNode, parentNode, data);
    }

    public void removeHelper (Node currentNode,Node parentNode,int data){
        if(currentNode==null){
            System.out.println("Empty");
            return;
        }
        while(currentNode!=null){
            
            if(data<currentNode.data){
                parentNode=currentNode;
                currentNode=currentNode.left;
            }
            else if(data>currentNode.data){
                parentNode=currentNode;
                currentNode=currentNode. right;
            }
            else{

                if(currentNode.left==null&&currentNode.right==null){
                    if(parentNode!=null){
                        if(currentNode==parentNode.left){
                            parentNode.left=null;
                            return;
                        }
                        else{
                            parentNode.right=null;
                            return;
                        }
                    }else{
                        currentNode=null;
                        root=null;
                        return;
                    }
                }else if(currentNode.right==null){
                    currentNode.data=getMaximum(currentNode.left);
                    removeHelper(currentNode.left,currentNode,currentNode.data);
                    return;
                    
                }else{
                    currentNode.data=getMinimum(currentNode.right);
                    removeHelper(currentNode.right,currentNode,currentNode.data);
                    return;
                }
            }
        }
        if(currentNode==null){
            System.out.println("No element found");
            return;
        }
    }

    public int getMinimum(Node curretNode){
        if(curretNode.left==null){
            return curretNode.data;

        }else{
            return getMinimum(curretNode.left);
        }
    }

    public int getMaximum(Node curretNode){
        if(curretNode.right==null){
            return curretNode.data;

        }else{
            return getMaximum(curretNode.right);
        }
    }
    
    public void inOrder(){
        inOrderHelper(root);
        System.out.println();
    }

    public void inOrderHelper(Node node){
        if(node!=null){
            inOrderHelper(node.left);
            System.out.print(node.data+" ");
            inOrderHelper(node.right);
        }
    }

    public void preOrder(){
        preOrderHelper(root);
        System.out.println();
    }

    public void preOrderHelper(Node node){
        if(node!=null){
            System.out.print(node.data+" ");
            preOrderHelper(node.left);
            preOrderHelper(node.right);
        }
    }

    public void postOrder(){
        postOrderHelper(root);
        System.out.println();
    }

    public void postOrderHelper(Node node){
        if(node!=null){
            postOrderHelper(node.left);
            postOrderHelper(node.right);
            System.out.print(node.data+" ");
        }
    }

    public void closest(int target){
        Node current=root;
        if(current==null){
            System.out.println("empty");
            return;
        }
        int closest=current.data;
        
        while(current!=null){
            if(Math.abs(target-current.data)<Math.abs(target-closest)){
                closest=current.data;
            }
            if(target<current.data){
                current=current.left;
            }else if(target>current.data){
                current=current.right;
            }else{
                closest=current.data;
                break;
            }
        }

        System.out.println(closest);
        return;
    }

}