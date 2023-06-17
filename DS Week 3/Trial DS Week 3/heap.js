
class MinHeap{
    constructor(array=[]){
        this.heap=array
        this.buid()
    }
    build(){
        for(let i=this.parentIdx(this.endIdx());i>=0;i--){
            this.shiftDown(i)
        }
    }
    parentIdx(index){
        return Math.floor((index-1)/2)
    }
    leftChildIdx(parentIdx){
        return (2*parentIdx)+1
    }
    rightChildIdx(parentIdx){
        return (2*parentIdx)+2
    }
    endIdx(){
        return this.heap.length-1
    }
    insertNode(value){
        if(this.heap.length==0){
            this.heap.push(value)
            return
        }
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }
    shiftUp(index){
        let parentIdx=this.parentIdx(index)
        while(this.heap[index]<this.heap[parentIdx]){
            parentIdx=this.parentIdx(index)
            let temp=this.heap[index]
            this.heap[index]=this.heap[parentIdx]
            this.heap[parentIdx]=temp
            index=parentIdx
            if(index==0){
                break
            }
        }
    }
    removeFrom(index){
        let endIdx=this.endIdx()
        this.heap[index]=this.heap[endIdx]
        this.heap.pop()

        let lastParentIdx=this.parentIdx(this.endIdx())
        if(index>lastParentIdx){
            return
        }
        while(index<=lastParentIdx){

            let leftChildIdx=this.leftChildIdx(index)
            let rightChildIdx=this.rightChildIdx(index)
            
            if(leftChildIdx==this.endIdx()){
                if(this.heap[index]>this.heap[leftChildIdx]){
                    let temp=this.heap[index]
                    this.heap[index]=this.heap[leftChildIdx]
                    this.heap[leftChildIdx]=temp
                    index=leftChildIdx
                }
                else{break}
            }
            else{
                if(this.heap[leftChildIdx]<this.heap[rightChildIdx]){
                    if(this.heap[index]>this.heap[leftChildIdx]){
                        let temp=this.heap[index]
                        this.heap[index]=this.heap[leftChildIdx]
                        this.heap[leftChildIdx]=temp
                        index=leftChildIdx
                    }
                    else{break}
                }else{
                    if(this.heap[index]>this.heap[rightChildIdx]){
                        let temp=this.heap[index]
                        this.heap[index]=this.heap[rightChildIdx]
                        this.heap[rightChildIdx]=temp
                        index=rightChildIdx
                    }
                    else{break}
                }
            }
        }
        
    }
    removeFromByRecurssion(index){
        let endIdx=this.endIdx()
        this.heap[index]=this.heap[endIdx]
        this.heap.pop()
        let lastParentIdx=this.parentIdx(this.endIdx())
        if(index>lastParentIdx){
            return
        }
        this.shiftDown(index)
    }
    shiftDown(index){
        
        let leftChildIdx=this.leftChildIdx(index)
        let rightChildIdx=this.rightChildIdx(index)
        if(leftChildIdx==this.endIdx()){
            if(this.heap[index]>this.heap[leftChildIdx]){
                let temp=this.heap[index]
                this.heap[index]=this.heap[leftChildIdx]
                this.heap[leftChildIdx]=temp
            }
            return
        }
        if(this.heap[leftChildIdx]<this.heap[rightChildIdx]){
            if(this.heap[index]>this.heap[leftChildIdx]){
                let temp=this.heap[index]
                this.heap[index]=this.heap[leftChildIdx]
                this.heap[leftChildIdx]=temp
                this.shiftDown(leftChildIdx)
            }else{
                return
            }
        }else{
            if(this.heap[index]>this.heap[rightChildIdx]){
                let temp=this.heap[index]
                this.heap[index]=this.heap[rightChildIdx]
                this.heap[rightChildIdx]=temp
                this.shiftDown(rightChildIdx)
            }else{
                return
            }
        }
    }

    display(){
        console.log(this.heap.toString());
    }
}
let minHeap=new MinHeap()
minHeap.insertNode(10)
minHeap.insertNode(5)
minHeap.insertNode(1)
minHeap.insertNode(1)
minHeap.insertNode(20)
let n=3
// minHeap.removeFrom(n)
minHeap.removeFromByRecurssion(0)
minHeap.display()