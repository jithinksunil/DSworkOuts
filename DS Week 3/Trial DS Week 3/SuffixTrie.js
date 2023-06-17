const HashTable = require("../Trie/HashTable/complexHashTable")

class TrieNode{
    constructor(value){
        this.value=value
        this.children={}
        this.end=false
    }
}
class SuffixTrie{
    constructor(string=''){
        const newNode=new TrieNode(true)
        this.root=newNode
        this.populate(string)
    }
    addSuffix(string){
        this.populate(string)
    }
    populate(string){
        for(let i=0;i<string.length;i++){
            let currentNode=this.root
            for(let j=i;j<string.length;j++){
                let character=string[j]
                if(currentNode.children[character]){
                    currentNode=currentNode.children[character]
                }else{
                    let newNode=new TrieNode(character)
                    currentNode.children[character]=newNode
                    currentNode=newNode
                }
            }
            currentNode.end=true
        }
    }
    contains(string){
        let currentNode=this.root
        for (let i=0;i<string.length;i++){
            let character=string[i]
            if(currentNode.children[character]){
                currentNode=currentNode.children[character]
            }else{
                return false
            }
        }
        
        return currentNode.end?true:false
    }
}
let trie=new SuffixTrie('anjana')
trie.addSuffix('jithin')
console.log(trie.contains('n'));