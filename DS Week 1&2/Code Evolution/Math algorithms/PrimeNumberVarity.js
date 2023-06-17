console.log(primeTest(6))
console.log(primeTestOptimized(6))

function primeTest(n){
    if(n<2){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

function primeTestOptimized(n){
    if(n<2){
        return false
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}