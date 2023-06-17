let arr=[32,32,5,6,3,2,62,5,64,546,24,64,345,6,345,2346,34,5]

function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let leftArray=[]
    let rightArray=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            leftArray.push(arr[i])
        }else{
            rightArray.push(arr[i])
        }
    }
    return [...quickSort(leftArray),pivot,...quickSort(rightArray)]
}
console.log(quickSort(arr));