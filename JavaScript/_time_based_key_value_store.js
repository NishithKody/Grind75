class TimeMap{
    constructor(){
        this.map = new Map()
    }

    set(key,value,time){
        if(!this.map.has(key)){
            this.map.set(key,[])
        }

        this.map.get(key).push([time,value])
    }

    get(key,time){

        if(!this.map.has(key)){
            console.log('Key not present')
        }

        let valList = this.map.get(key) || []

        let low = 0;
        let high = valList.length-1
        let res = ""
        

        while(low<=high){
            let mid = Math.floor((high+low)/2)
            if(time==valList[mid][0]){
                return valList[mid][1]
            }
            if(time>=valList[mid][0]){
                res = valList[mid][1]
                low = mid+1
            }
            else{
                high = mid-1
            }
        }

        return res

    }

}
