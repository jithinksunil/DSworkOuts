let arr=[32,32,5,6,3,2,62,5,64,546,24,64,345,6,345,2346,34,5]
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        let limit=arr.length-1
        for(let j=0;j<limit;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=temp
            }
        }
        limit--
    }
    return arr
}
console.log(bubbleSort(arr));
