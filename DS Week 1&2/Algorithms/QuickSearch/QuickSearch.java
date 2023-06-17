import java.util.concurrent.ArrayBlockingQueue;

public class QuickSearch {

    public static void main(String[] args) {
        int [] array = {1,3,4,5,6,7,3,7,3,43};
        quickSeach(array);
    }
    static void quickSeach(int[] array){
        quickSearchHelper( array,0,array.length-1);
    }
    static void quickSearchHelper(int [] array,int startIndex,int endIndex){
        int pivotIndex=startIndex;
        int pivot=array[pivotIndex];
        int leftMark=startIndex+1;
        int rightMark=endIndex;
        while(leftMark<rightMark){
            if(array[leftMark]>=array[pivotIndex] && array[rightMark]<array[pivotIndex]){
                int temp=array[leftMark];
                array[leftMark]=array[rightMark];
                array[rightMark]=temp;
                leftMark++;
                rightMark--;
            }else if(array[leftMark]<pivot&&array[rightMark]<pivot){
                leftMark++;
            }else if(array[leftMark]<pivot && array[rightMark]>=pivot){
                rightMark--;
                leftMark++;
            }
            else if(array[leftMark]>=pivot && array[rightMark]>=pivot ){
                rightMark--;
            }
        }
        if(pivot>array[leftMark]){
            int temp=array[leftMark];
            array[leftMark]=pivot;
            array[startIndex]=temp;
            pivotIndex=leftMark;
        }else{
            int temp=array[leftMark-1];
            array[leftMark-1]=pivot;
            array[startIndex]=temp;
            pivotIndex=leftMark-1;
        }
        if(startIndex>=endIndex){
            return;
        }
        for(int i =0;i<array.length;i++){
            System.out.print(array[i]+" ");
        }
        System.out.println();
        quickSearchHelper(array,startIndex,pivotIndex-1);
        quickSearchHelper(array,pivotIndex+1,endIndex);
    }
}
