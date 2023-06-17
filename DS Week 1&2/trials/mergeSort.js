let arr=[32,32,5,6,3,2,62,5,64,546,24,64,345,6,345,2346,34,5]

function mergeSort(arr){
    if(arr.length==1){
        return arr
    }
    let middleI=Math.floor(arr.length/2)
    let leftArray=arr.slice(0,middleI)
    let rightArray=arr.slice(middleI)
    return merge(mergeSort(leftArray),mergeSort(rightArray))
}
function merge(leftArray,rightArray){
    let sortedArray=[]
    while(leftArray.length>=1&&rightArray.length>=1){
        if(leftArray[0]<rightArray[0]){
            sortedArray.push(leftArray.shift())
        }else{
            sortedArray.push(rightArray.shift())
        }
    }
    return [...sortedArray,...leftArray,...rightArray]
}
console.log(mergeSort(arr));