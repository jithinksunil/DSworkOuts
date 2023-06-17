public class DoubleLinkedList{
    public static void main(String[] args) {
        DoubleLinkedList list=new DoubleLinkedList();
        list.addNode(10);
        list.addNode(20);
        list.addNode(30);
        list.insertNodeBefore(20, 200);
        list.displayNodesForward();
        list.displayNodesBackward();

    }

    class Node{
        int data;
        Node next;
        Node prev;
        Node (int data){
            this.data=data;
        }
    }

    public Node head=null;
    public Node tail=null;

    public void addNode(int data){
        Node newNode=new Node(data);
        if(head==null){
            head=newNode;
        }else{
            tail.next=newNode;
            newNode.prev=tail;
        }
        tail=newNode;
    }

    public void deleteNode(int data){
        Node temp=head,prev=null;
        if(head!=null&&head.data==data){//case for head
            head=temp.next;
            temp.next=null;
            head.prev=null;
            System.out.println("head removed");
            return;
        }
        
        while(temp!=null && temp.data!=data){
            prev=temp;
            temp=temp.next;
        }
        if(temp!=null){
            if(temp==tail){//case tail
                System.out.println("tail removed");
                tail=prev;
                prev.next=null;
                return;
            }
            prev.next=temp.next;//case for nodes in between
            temp.next.prev=prev;
            System.out.println("b/w removed");
            return;
        }
    }

    public void insertNodeAfter(int nextTo, int data){
        Node newNode=new Node(data);
        Node temp=head;
        
        while(temp!=null && temp.data!=nextTo){
            temp=temp.next;
        }
        if(temp!=null){
            if(temp==tail){//case of tail
                temp.next=newNode;
                newNode.prev=temp;
                tail=newNode;
                return;
            }
            else{//case of nodes b/w and head
                newNode.next=temp.next;
                newNode.prev=temp;
                newNode.next.prev=newNode;
                temp.next=newNode;
                return;
            }
            
        }else{
            return;
        }  
            
    }

    public void insertNodeBefore(int beforeOf, int data){
        Node newNode=new Node(data);
        Node temp=head;
        
        while(temp!=null && temp.data!=beforeOf){
            temp=temp.next;
        }
        if(temp!=null){
            if(temp==head){
                head.prev=newNode;
                newNode.next=head;
                head=newNode;
                return;
            }
            else{//case of nodes b/w and tail
                newNode.next=temp;
                newNode.prev=temp.prev;
                temp.prev.next=newNode;
                temp.prev=newNode;
                return;
            }
            
        }else{
            return;
        }  
            
    }
            
    public void displayAddress(){
        if(head==null){
            System.out.println("emty");
            return;
        }
        Node temp=head;
        while(temp!=null){
            System.out.println(temp.next);
            temp=temp.next;
        }
    }
    public void displayNodesForward(){
        if(head==null){
            System.out.println("emty");
            return;
        }
        Node temp=head;
        while(temp!=null){
            System.out.println(temp.data);
            temp=temp.next;
        }
        System.out.println(tail.next);
    }

    public void displayNodesBackward(){
        if(head==null){
            System.out.println("emty");
            return;
        }
        Node temp=tail;
        while(temp!=null){
            System.out.println(temp.data);
            temp=temp.prev;
        }
        System.out.println(head.prev);
    }

}