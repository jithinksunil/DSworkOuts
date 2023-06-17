let arr=[1,5,3,4,45,5,6,3,6,743,35,45]
let n=5
console.log(linearSearch(n));
console.log(recurssiveLinearSearch(n));

function linearSearch(n){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==n){
            return i
        }
    }
    return -1
}

function recurssiveLinearSearch(n){
    let jithin= helper(n,0)
    return jithin
    
}

function helper(n,i){
    if(i>arr.length-1){
        return -1;
    }
    if(arr[i]==n){
        return i
    }
    else {
        return helper(n,i+1)
    }
}