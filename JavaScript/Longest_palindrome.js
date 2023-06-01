/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {

    let map = new Map()
    s = s.split('')

    for(let i of s){
        map.set(i, map.get(i)+1 || 1)
    }

    let res = 0;
    let flag=0

    for(let i of map){
        if(i[1]%2==0){
            res =res + i[1]
        }
        else{
            let val = i[1]-1
            if(val<0)
                continue
            
            res =res + val
            flag=1
            
        }
    }

    res = res +flag

    return res
    
};
