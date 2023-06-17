class Heap{
    constructor(array=[]){
        this.heap=array
        this.build()
    }
    lastIdx(){
        return this.heap.length-1
    }l
    parentIdx(i){
        return Math.floor((i-1)/2)
    }
    build(){
        for(let i=this.parentIdx(this.lastIdx());i>=0;i--){
            this.shiftDown(i);
        }
    }
    shiftDown(i){
        let leftChildIdx=(2*i)+1;
        let rightChildIdx=(2*i)+2;
        let endIdx=this.lastIdx()
        let lastParentIdx=this.parentIdx(endIdx);
        if(i>lastParentIdx){
            return;
        }

        if(leftChildIdx==endIdx){
            if(this.heap[leftChildIdx]<this.heap[i]){
                [this.heap[leftChildIdx], this.heap[i]]=[this.heap[i], this.heap[leftChildIdx]]
            }
        }else{
            
            if(this.heap[leftChildIdx]<this.heap[rightChildIdx]){
                if(this.heap[leftChildIdx]<this.heap[i]){
                    [this.heap[leftChildIdx], this.heap[i]]=[this.heap[i], this.heap[leftChildIdx]]
                    this.shiftDown(leftChildIdx);
                }
            }else{
                if(this.heap[rightChildIdx]<this.heap[i]){
                    [this.heap[rightChildIdx], this.heap[i]]=[this.heap[i], this.heap[rightChildIdx]]
                    this.shiftDown(rightChildIdx);
                }
            }
        }
        return;
    }
    shiftUp(i){
        let currentIdx=i;
        while(currentIdx>0){
            let parentIdx=this.parentIdx(currentIdx);
            if(this.heap[parentIdx]>this.heap[currentIdx]){
                [this.heap[parentIdx],this.heap[currentIdx]]=[this.heap[currentIdx],this.heap[parentIdx]]
                currentIdx=parentIdx;
            }else{
                break;
            }
        }

    }
    insert(element){
        this.heap.push(element);
        this.shiftUp(this.lastIdx());
    }
    removeFrom(index){
        let endIdx=this.lastIdx()
        const temp=this.heap[index]
        this.heap[index]=this.heap[endIdx]
        this.heap[endIdx]=temp
        const removedElement=this.heap.pop();
        this.shiftDown(index);
        return removedElement
    }
    display(){
        console.log(this.heap.toString())
    }
}

const newHeap=new Heap([8,6,7,2,8,9,34,7])

newHeap.display()