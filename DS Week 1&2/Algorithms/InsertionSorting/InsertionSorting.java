public class InsertionSorting {
    public static void main(String[] args) {
        int[] arr={30,2,41,56,12,11,22,41};
        int [] sortedArray=insertionSorting(arr);
        for(int i=0;i<sortedArray.length;i++){
            System.out.println(sortedArray[i]);
        }
        
        
    }
    static int [] insertionSorting(int [] array){
        for(int i=0;i<array.length;i++){
            int j=i-1;
            int current=array[i];
            while(j>=0 && current < array[j]){
                array[j+1]=array[j];
                j--;
            }
            array[j+1]=current;
        } 
        return array;
    }
}