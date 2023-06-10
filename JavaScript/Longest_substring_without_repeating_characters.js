/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l =0
    let r = 0
    let res = 0;
    let set = new Set()

    while(r<s.length){
        if(!set.has(s[r]))
        {
            set.add(s[r])
            if((r-l+1) > res){
                res = r-l+1
            }
            r++
        }
        else{
            while(set.has(s[r])){
                set.delete(s[l])
                l++
            }
        }
    }
    return res;
};
