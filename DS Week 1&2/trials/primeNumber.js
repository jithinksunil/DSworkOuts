function firstApproach(n){
    if(n<2){
        return false
    }
    for(let i=2;i<n;i++){//O(n)
        if(n%i==0){
            return false
        }
    }
    return true
}

function betterApproach(n){
    if(n<2){
        return false
    }
    for(let i=2;i<Math.sqrt(n);i++){//O(n/2)
        if(n%i==0){
            return false
        }
    }
    return true
}
let n=10
console.log(firstApproach(n));
console.log(betterApproach(n));