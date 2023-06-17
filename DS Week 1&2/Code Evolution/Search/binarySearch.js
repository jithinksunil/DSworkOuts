let arr=[1,2,3,4,6,7,8,9,12,14,35,57]
let target=57;
console.log(binarySearch(target));
console.log(recurssiveBinarySearch(target));
function binarySearch(target){
    let leftI=0
    let rightI=arr.length-1
    while(leftI<=rightI){
        let middleI=Math.floor((leftI+rightI)/2)
        if(arr[middleI]<target){
            leftI=middleI+1
        }else if(arr[middleI]>target){
            rightI=middleI-1
        }else{
            return middleI
        }
    }
    return -1
}
//O(log(n))

function recurssiveBinarySearch(target){
    return recursiveHelper(target,0,arr.length-1)
}
function recursiveHelper(target,leftI,rightI){
    let middleI=Math.floor((rightI+leftI)/2)
    if(leftI>rightI){
        return -1
    }
    if(target<arr[middleI]){
        return recursiveHelper(target,leftI,middleI-1)
    }else if(target>arr[middleI]){
        return recursiveHelper(target,middleI+1,rightI)
    }
    else{
        return middleI
    }
    
}
//O(log(n))