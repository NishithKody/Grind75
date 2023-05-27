/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l=0
    let r=s.length-1

    s = s.toLowerCase()

    while(l<=r){
        let val1 =s[l]
        let val2 = s[r]

        if((val1<'a' || val1>'z') && (val1<'0' || val1>'9')){
            l++;
            continue
        }

        if((val2<'a' || val2>'z') && (val2<'0' || val2>'9') ){
            r--;
            continue
        }

        l++
        r--

        if(val1!=val2)
            return false
    }

    return true
    
};
