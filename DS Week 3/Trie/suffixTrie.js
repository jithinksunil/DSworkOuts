const HashTable=require('./HashTable/complexHashTable')

class SuffixTrie{
    constructor(string){
        this.root=new TrieNode("*")
        this.endValue="*"
        this.populateSuffix(string)
    }
    populateSuffix(string){
        for(let i=0;i<string.length;i++){
            let currentNode=this.root
            for(let j=i;j<string.length;j++){
                if(currentNode.children.get(string[j])){
                    currentNode=currentNode.children.get(string[j])
                }
                else{
                    let newTrieNode=new TrieNode(string[i])
                    currentNode.children.set(string[j],newTrieNode)
                    currentNode=newTrieNode
                }
            }
            currentNode.children.set("*","*")
        }
    }
    contains(string){

        let currentNode=this.root
        for(let i=0;i<string.length;i++){
            if(currentNode.children.get(string[i])){
                currentNode=currentNode.children.get(string[i])
            }else{
                return false
            }
        }
        return currentNode.children.get(this.endValue)?true:false
        
    }
}

class TrieNode{
    constructor(value){
        this.character=value
        this.children=new HashTable(40)
    }
}
const suffixTrieSample=new SuffixTrie('jithin')
console.log(suffixTrieSample.contains('ithin'));