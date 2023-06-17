let arr=[1,5,3,4,45,5,6,3,6,743,35,45]
console.log(mergeSorting(arr));
function mergeSorting(arr){
    if(arr.length==1){
        return arr
    }
    let middleIndex=Math.floor(arr.length/2)
    let leftArray=arr.slice(0,middleIndex)
    let rightArray=arr.slice(middleIndex)
    return merge(mergeSorting(leftArray),mergeSorting(rightArray))

}
function merge(leftArray,rightArray){
    let sortedArray=[]
    while(leftArray.length!=0 && rightArray.length!=0)
    if(leftArray[0]<rightArray[0]){
        sortedArray.push(leftArray.shift())//shift() will remove the first element and return the removed element
    }else{
        sortedArray.push(rightArray.shift())
    }
    return [...sortedArray,...leftArray,...rightArray]
}