public class Queue {
    public static void main(String[] args) {
        Queue queue=new Queue();
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        queue.dequeue();
        queue.display();
        
    }   

    class Node{
        int data;
        Node next;
        Node (int data){
            this.data=data;
        }
    }
    Node front;
    Node rear;
    void display(){
        if(front==null){
            System.out.println("emty");
            return;
        }
        Node temp=front;
        while(temp!=null){
            System.out.println(temp.data);
            temp=temp.next;
        }
    }
    void enqueue(int data){
        Node newNode=new Node(data);
        if(front==null){
            front=rear=newNode;
        }
        else{
            rear.next=newNode;
            rear=newNode;
        }
        
    }
    void dequeue(){
        if(front==null){
            System.out.println("Queue is empty");
        }else{
            front =front.next;
            if(front==null){
                rear=null;
            }
        }
        
    }
}
