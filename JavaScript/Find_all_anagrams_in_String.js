/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

    let map = new Map()
    let map2 = new Map()

    let res = []

    for(let i of p){
        map.set(i, map.get(i)+1||1)
    }

    let l=0
    let r=0

    let mapCheck=(mapa,mapb)=>{
        if(mapa.size != mapb.size){
            return false
        }

        for(let [key,val] of mapa.entries()){
            if(val!=mapb.get(key)){
                return false
            }
        }
        return true
    }

    for(r=0; r<p.length;r++){
        let val = s[r]
        map2.set(val, map2.get(val)+1 || 1)
    }

    if(mapCheck(map,map2)==true){
        res.push(l)
    }

    l++

    while(r<s.length){
        let rightVal = s[r]
        let leftVal = s[l-1]

        map2.set(rightVal, map2.get(rightVal)+1 || 1)
        map2.set(leftVal, map2.get(leftVal)-1)

        if(map2.get(leftVal)==0){
            map2.delete(leftVal)
        }
        if(mapCheck(map,map2)==true){
            res.push(l)
        }

        r++
        l++

    }
    return res    
};
