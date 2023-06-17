public class BinarySearch {
    public static void main(String[] args) {
    int[] arr={1,2,3,4,5,6,7,8,9};
    System.out.println(binarySearch(arr,9));        
    }

    public static int binarySearch(int[] array, int target){
        int startIndex=0;
        int endIndex=array.length-1;
        while(startIndex<=endIndex){
            int middleIndex=((-startIndex+endIndex)/2)+startIndex;
            if(target<array[middleIndex]){
                endIndex=middleIndex;
            }
            else if(target>array[middleIndex]){
                startIndex=middleIndex+1;
            }
            else{
                return middleIndex;
            }
        }
        return -1;
    }
    
}
