let arr=[32,32,5,6,3,2,62,5,64,546,24,64,345,6,345,2346,34,5]
function selectionSorting(arr){

    for(let i=0;i<arr.length;i++){
        let smallestValueIndex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[smallestValueIndex])
            smallestValueIndex=j
        }
        [arr[i],arr[smallestValueIndex]]=[arr[smallestValueIndex],arr[i]]
    }
    return arr
}
console.log(selectionSorting(arr));