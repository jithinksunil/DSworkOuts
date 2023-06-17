import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

class MinHeap{
    List<Integer> heap=new ArrayList<>();
    MinHeap(){
    }
    MinHeap(List<Integer> array){
        this.buildHeap(array);
        
    }
    void buildHeap(List<Integer> array){
        this.heap=array;
        for(int i=this.parentIdx(this.heap.size()-1);i>=0;i--){
            // this.shiftDownWithRecurssion(i);
            this.shiftDownWithIteration(i);
        }
    }
    void shiftDownWithRecurssion(int i){
        int leftChildIdx=(2*i)+1;
        int rightChildIdx=(2*i)+2;
        int endIdx=this.heap.size()-1;
        int lastParentIdx=this.parentIdx(endIdx);
        if(i>lastParentIdx){
            return;
        }

        if(leftChildIdx==endIdx){
            if(this.heap.get(leftChildIdx)<this.heap.get(i)){
                Collections.swap(this.heap,leftChildIdx,i);
            }
        }else{

            if(this.heap.get(leftChildIdx)<this.heap.get(rightChildIdx)){
                if(this.heap.get(leftChildIdx)<this.heap.get(i)){
                    Collections.swap(this.heap,leftChildIdx,i);
                    shiftDownWithRecurssion(leftChildIdx);
                }
            }else{
                if(this.heap.get(rightChildIdx)<this.heap.get(i)){
                    Collections.swap(this.heap,rightChildIdx,i);
                    shiftDownWithRecurssion(rightChildIdx);
                }
            }
        }
        return;

    }
    private void shiftDownWithIteration(int i){
        int currentParentIdx=i;
        int endIdx=heap.size()-1;
        int lastParentIdx=parentIdx(endIdx);
        while(currentParentIdx<=lastParentIdx){
            int leftChildIdx=(2*currentParentIdx)+1;
            int rightChildIdx=(2*currentParentIdx)+2;
            if(leftChildIdx==endIdx){
                if(this.heap.get(leftChildIdx)<this.heap.get(currentParentIdx)){
                    Collections.swap(this.heap,leftChildIdx,currentParentIdx);
                    currentParentIdx=leftChildIdx;
                }else{
                    break;
                }
            }else{
                if(this.heap.get(leftChildIdx)<this.heap.get(rightChildIdx)){
                    if(this.heap.get(leftChildIdx)<this.heap.get(currentParentIdx)){
                        Collections.swap(this.heap,leftChildIdx,currentParentIdx);
                        currentParentIdx=leftChildIdx;
                    }else{
                        break;
                    }

                }else{
                    if(this.heap.get(rightChildIdx)<this.heap.get(currentParentIdx)){
                        Collections.swap(this.heap,rightChildIdx,currentParentIdx);
                        currentParentIdx=rightChildIdx;
                    }else{
                        break;
                    }
                }
            }
        }
    }
    void shiftUp(int i){
        int currentIdx=i;
        while(currentIdx>0){
            int parentIdx=this.parentIdx(currentIdx);
            if(this.heap.get(parentIdx)>this.heap.get(currentIdx)){
                Collections.swap(this.heap,parentIdx,currentIdx);
                currentIdx=parentIdx;
            }
        }

    }
    int parentIdx(int i){
        return (i-1)/2;
    }
    void insert(int element){
        this.heap.add(element);
        // this.shiftUp(this.parentIdx(this.heap.size()-1));

    }
    void remove(int index){
        Collections.swap(this.heap,index,this.heap.size()-1);
        this.heap.remove(this.heap.size()-1);
        this.shiftDownWithIteration(index);
    }
    void display(){
        for(int i=0;i<this.heap.size();i++){
            System.out.println(this.heap.get(i));
        }
    }
    public static void main(String[] args) {
        MinHeap heap1=new MinHeap(Arrays.asList(2,6,8,1,5));
        heap1.insert(15);
        heap1.display();
    }
};  