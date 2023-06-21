/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let res = ""

    for(let i=0; i<s.length;i++){
        //odd
        let l=i
        let r =i

        while(l>=0 && r<s.length){
            if(s[l]==s[r]){
                if((r-l+1)>res.length){
                    res=s.slice(l,r+1)
                }
                l--
                r++
            }
            else{
                break
            }
        }

        //even
        l=i
        r =i+1

        while(l>=0 && r<s.length){
            if(s[l]==s[r]){
                if((r-l+1)>res.length){
                    res=s.slice(l,r+1)
                }
                l--
                r++
            }
            else{
                break
            }
        }

    }

    return res
    
};
