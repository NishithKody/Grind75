class LRUCache {
    constructor(cap){
        this.cap = cap
        this.map = new Map()
    }

    get(key){
        if(this.map.has(key)){
            let val = this.map.get(key)
            this.map.delete(key)
            this.map.set(key,val)
            return val
        }
        else{
            return -1
        }

    }

    put(key,value){

        //if(this.get(key)===-1){
            //if(this.map.size===this.cap){

         if(this.get(key)===-1){
            if(this.map.size==this.cap){
           
                for(let [key,value] of this.map.entries()){
                    this.map.delete(key)
                    break
                }
            }
        }
        
        this.map.set(key,value)

    }
    //4
    //2

    
}
