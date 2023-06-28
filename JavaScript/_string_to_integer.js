/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {

    s = s.trim()
    let sign = 1;
    let res = 0
    let i = 0

    if(s[i]=='-'){
        i++
        sign = -1
    }
    else if(s[i]=='+'){
        i++
    }

    for(;i<s.length;i++){
        let val = s.charCodeAt(i)-48
        if(val>9 || val<0){
            break
        }
        if(res>2147483647 / 10 || res>(2147483647-val) / 10)
        {
            return sign==1 ? 2147483647 : -2147483648
        }
        else{
            res = (res*10) + val
        }
    }

    return res*sign

   
};
