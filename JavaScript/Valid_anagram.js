/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    let map1 = new Map()
    let map2 = new Map()

    if(s.length!= t.length)
        return false

    for(let i of s){
        map1.set(i, map1.get(i)+1 || 1)
    }

    for(let i of t){
        map2.set(i, map2.get(i)+1 || 1)
    }

    for(let i of map1){
        if(i[1]!= map2.get(i[0])){
            return false
        }
    }

    return true
    
};
