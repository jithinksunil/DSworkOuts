class Graph{
    constructor(){
        this.adjacencyList={}
        this.referece=null
    }
    addVertex(vertex){
        if(!this.referece){
            this.referece=vertex
        }
        this.adjacencyList[vertex]=new Set()
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)//to make it undirected
    }
    hasEdge(vertex1,vertex2){
        return (this.adjacencyList[vertex1]?.has(vertex2)&&
        this.adjacencyList[vertex2]?.has(vertex1))
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            console.log('vertex does not exist');
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            if(this.referece==vertex){
                this.referece=adjacentVertex
            }
            this.removeEdge(adjacentVertex,vertex)
        }
        delete this.adjacencyList[vertex]
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex +'->'+ [...this.adjacencyList[vertex]]);
        }
    }

    levelOrder(){
        let queue=[]
        let pushed={}
        queue.push(this.referece)
        pushed[this.referece]=true

        while(queue.length>=1){
            let current=queue.shift()
            for(let adjacentVertex of this.adjacencyList[current]){
                if(!pushed[adjacentVertex]){
                    queue.push(adjacentVertex)
                    pushed[adjacentVertex]=true
                }
            }
            console.log(current);
        }
    }
    
    dfs(){
        let current=this.referece
        let stack=[]
        let pushed={}
        this.dfsHelper(current,stack,pushed)
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
        let current=this.referece
        let stack=[]
        let pushed={}
        return this.isCyclicHelper(current,stack,pushed)
    }
    isCyclicHelper(current,stack,pushed){
        stack.push(current)
        pushed[current]=true
        let cyclePresent;
        for(let adjacentVertex of this.adjacencyList[current]){
            if(pushed[adjacentVertex] && adjacentVertex!=stack[stack.length-2]){
                return true
            }else if(!pushed[adjacentVertex]){
                cyclePresent=this.isCyclicHelper(adjacentVertex,stack,pushed)
            }
        } 
        stack.pop()
        if (cyclePresent) {
            return true
        }
        else{
            return false
        }
    }
}
const graph1=new Graph()
graph1.addEdge('A',"B")
graph1.addEdge('A',"Z")
graph1.addEdge('B','C')
graph1.addEdge('C','D')
graph1.dfs()
console.log(graph1.isCyclic());