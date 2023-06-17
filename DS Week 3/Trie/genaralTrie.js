const HashTable = require("./HashTable/complexHashTable")

class TrieNode{
    constructor(value){
        this.value=value
        this.children={}
        this.end=false
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode(true)
    }
    insertWord(string){

        let current=this.root
        for(let i=0;i<string.length;i++){

            let character=string[i]
            if(!current.children[character]){
                let newNode=new TrieNode(character)
                current.children[character]=newNode
            }
            current=current.children[character]

        }
        current.end=true
    }
    search(string){
        let current=this.root
        for(let i=0;i<string.length;i++){

            let character=string[i]
            if(!current.children[character]){
                return false
            }
            current=current.children[character]
        }
        if(current.end){
            return true
        }
        return false
    }
    remove(string){
        if(!this.search(string)){
            console.log('string does not exist');
            return
        }
        let current=this.root
        let lastBranch=null
        let lastBranchChild=null
        for(let i=0;i<string.length;i++){
            let character=string[i]
            if(Object.keys(current.children).length>1 || current.end){
                if(i<string.length-1){
                    lastBranch=current
                    lastBranchChild=string[i]
                }
            }
            current=current.children[character]
        }
        current.end=false
        if(lastBranch){
            delete lastBranch.children[lastBranchChild]
            return
        }
        if(Object.keys(this.root.children).length===1 && Object.keys(current.children).length===0 && !lastBranch){
            delete this.root.children[string[0]]
            return
        }
    }
    display(){
        console.log(this.root);
    }
}

const trie=new Trie()

trie.remove('j')
trie.display()