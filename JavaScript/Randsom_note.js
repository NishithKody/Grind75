/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    let map = new Map()
    let mag = magazine.split('')
    for(let i of mag){
        map.set(i, map.get(i)+1 || 1)
    }

    let ran = ransomNote.split('')

    for(let i of ran){
        if(map.has(i))
        {
            map.set(i,map.get(i)-1)
            if(map.get(i)==0){
                map.delete(i)
            }
        }
        else{
            return false
        }
    }

    return true
    
};
