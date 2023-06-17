public class SingleLinkedList{
    public static void main(String[] args) {
        SingleLinkedList list=new SingleLinkedList();
        list.addNode(1);
        list.addNode(2);   
        list.addNode(3);
        list.addNode(4);
        list.addNode(5);
        list.addNode(6);
        list.swapNodes(2);
        list.displayNodes();
    }

    class Node{
        int data;
        Node next;
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
        }
        tail=newNode;
    }

    public void deleteNode(int data){
        Node temp=head,prev=null;
        if(head!=null&&head.data==data){//case for head
            head=temp.next;
            temp.next=null;
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
            if(temp==tail){
                temp.next=newNode;
                tail=newNode;
                return;
            }
            else{
                newNode.next=temp.next;
                temp.next=newNode;
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
    public void displayNodes(){
        if(head==null){
            System.out.println("emty");
            return;
        }
        Node temp=head;
        while(temp!=null){
            System.out.println(temp.data);
            temp=temp.next;
        }
    }

    public void swapNodes (int k) {
        Node current =this.head; 
        Node first=null;
        Node second=null;
        int aggre=0;
        while(current!=null){
            if(second!=null){
                second=second.next;
            }
            aggre++;
            if(aggre==k){
                first=current;
                second=head;
            }
            current=current.next;
            
        };
        aggre=first.data;
        first.data=second.data;
        second.data=aggre;
    };

    // public void removeDuplicate(){//brototype problem
    //     Node temp=head;
        
    //     while(temp!=null){

    //         Node next=temp.next;

    //         while(next!=null && temp.data==next.data){
    //             next=next.next;
    //             temp.next=next;
    //         }
    //         if(next==null){
    //             tail=temp;
    //         }
    //         temp=next;
    //     }
    // }

}