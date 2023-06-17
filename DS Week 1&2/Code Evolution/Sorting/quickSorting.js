let arr=[1,5,3,4,45,5,6,3,6,743,35,45]
console.log(quickSort(arr));
function quickSort(arr){
    
    if(arr.length<1){
        return arr
    }
    
    let pivot =arr[arr.length-1]
    let leftArray=[]
    let rightArray=[]
    for(let i=0;i<=arr.length-2;i++){
        if(arr[i]<pivot){
            leftArray.push(arr[i])
        }else{
            rightArray.push(arr[i])
        }
    }
    let processingArray=[...quickSort(leftArray),pivot,...quickSort(rightArray)]
    return processingArray
}