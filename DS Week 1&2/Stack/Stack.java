public class Stack {
    public static void main(String[] args) {
        Stack stack1=new Stack();
        stack1.push(10);
        stack1.push(20);
        stack1.push(30);
        stack1.pop();
        stack1.display();
        
    }   

    class Node{
        int data;
        Node next;
        Node (int data){
            this.data=data;
        }
    }
    Node top;
    void display(){
        if(top==null){
            System.out.println("emty");
            return;
        }
        Node temp=top;
        while(temp!=null){
            System.out.println(temp.data);
            temp=temp.next;
        }
    }
    void push(int data){
        Node newNode=new Node(data);
        if(top==null){
            top=newNode;
        }else{
            newNode.next=top;
            top=newNode;
        }
        
    }
    void pop(){
        if(top==null){
            System.out.println("Stack underflow");
            return;
        }else{
            top=top.next;
        }
        
    }
}
