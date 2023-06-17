class Graph{
    constructor(){
        this.adjacencyList={}
        this.referece=null
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex])
        this.adjacencyList[vertex]=new Set()//no duplicate elements are not allowed in set
        if(!this.referece){
            this.referece=vertex
        }
    }

    addEdge(vertex,edge){
        if(!this.adjacencyList[vertex]){
            this.addVertex(vertex)
        }
        if(!this.adjacencyList[edge]){
            this.addVertex(edge)
        }
        this.adjacencyList[vertex].add(edge)
        this.adjacencyList[edge].add(vertex)
    }
    remvoveEdge(vertex,edge){
        this.adjacencyList[vertex].delete(edge)
        this.adjacencyList[edge].delete(vertex)
    }
    removeVertex(vertex){
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.adjacencyList[adjacentVertex].delete(vertex)
        }
        delete this.adjacencyList[vertex]
    }
    levelOrder(){
        let queue=[]
        let pushed={}
        queue.push(this.referece)
        pushed[this.referece]=true
        while(queue.length>0){
            let current=queue.shift()
            console.log(current);
            for(let adjacentVertex of this.adjacencyList[current]){
                if(!pushed[adjacentVertex]){
                    queue.push(adjacentVertex)
                    pushed[adjacentVertex]=true
                }
            }
        }
    }
    levelOrderRecursion(){
        let current=this.referece
        let queue=[]
        let visited={}
        queue.push(current)
        visited[current]=true
        this.levelOrderRecursionHelper(queue,visited)
    }
    levelOrderRecursionHelper(queue,visited){
        
        if(queue.length==0){
            return 
        }
        let shifted=queue.shift()
        
        for( let adjacentVertex of this.adjacencyList[shifted]){
            if(!visited[adjacentVertex]){
                queue.push(adjacentVertex)
                visited[adjacentVertex]=true
            }
        }
        console.log(shifted)
        this.levelOrderRecursionHelper(queue,visited)
    }

    dfs(){
        let stack=[]
        let pushed={}
        dfsHelper(this.referece,stack,pushed)
    }
    dfsHelper(current,stack,pushed){
        stack.push(current)
        pushed[current]=true
        console.log(current)
        for(let adjacentVertex of this.adjacencyList[current]){
            if(!pushed[adjacentVertex]){
                this.dfsHelper(adjacentVertex,stack,pushed)
            }
        }
        stack.pop()
    }
    isCyclic(){
        let stack=[]
        let pushed={}
        return isCyclicHelper(this.referece,stack,pushed)
    }
    isCyclicHelper(current,stack,pushed){
        stack.push(current)
        pushed[current]=true
        let cyclic
        for(let adjacentVertex of this.adjacencyList[current]){
            if(pushed[adjacentVertex] && adjacentVertex!=stack[stack.length-2]){
                return true
            }else{
                cyclic=this.isCyclicHelper(adjacentVertex,stack,pushed)
            }
        }
        stack.pop()
        return cyclic?true:false
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+'->'+[...this.adjacencyList[vertex]]);
        }
    }
}
let graph=new Graph()
graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('A','D')
graph.levelOrderRecursion()