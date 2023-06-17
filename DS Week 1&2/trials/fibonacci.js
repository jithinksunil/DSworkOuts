let n=9;
foboLoop(n)
function foboLoop(n){
    let older=0;
    let pre=1;
    let aggre=1
    while(aggre<=n){//O(n)
        if(aggre<=2){
            console.log(aggre-1);
        }else{
            let current=older+pre
            console.log(current);
            older=pre
            pre=current
        }
        aggre++
    }
}

function fibForloop(n){
    let fib=[0,1]
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    if(n==0){
        return [0]
    }
    return fib
}

function fiboRecurrsion(n){
    if(n<=2){
        return n-1
    }
    return fiboRecurrsion(n-1)+fiboRecurrsion(n-2);
}

