let arr=[1,4,5,6,8,9,11,14,17,19,44,88,90]
function binarySearch(n){
    let leftI=0
    let rightI=arr.length-1
    while(leftI<=rightI){
        let middleI=Math.floor((leftI+rightI)/2)
        if(n<arr[middleI]){
            rightI=middleI-1
        }
        else if(n>arr[middleI]){
            leftI=middleI+1
        }else{
            return middleI
        }
    }
    return -1
}

function recurssiveBinarySearch(n,startI,endI){
    let middleI=Math.floor((startI+endI)/2)
    if(arr[middleI]==n){
        return middleI
    }
    else if(n<arr[middleI]){
        return recurssiveBinarySearch(n,startI,middleI-1)
    }else if(n>arr[middleI]){
        return recurssiveBinarySearch(n,middleI+1,endI)
    }
    return-1
}
let n=90
console.log(binarySearch(n));
console.log(recuressiveBinarySearch(n,0,arr.length-1));

















function recuressiveBinarySearch(n,startIndex,endIndex){
    if(startIndex>endIndex){
        return -1
    }
    let middleIndex=Math.floor((startIndex+endIndex)/2)
    if(n<arr[middleIndex]){
        return recuressiveBinarySearch(n,startIndex,middleIndex-1)
    }else if(n>arr[middleIndex]){
        return recuressiveBinarySearch(n,middleIndex+1,endIndex)
    }else {
        return middleIndex
    }
}