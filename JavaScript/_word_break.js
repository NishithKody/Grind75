/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    let dp = new Array(s.length+1).fill(false)
    dp[0] = true

    for(let i=1; i<=s.length; i++){
        for(let word of wordDict){
            let wordEnd = word.length
            let wordStart = i-1

            let check = s.slice(wordStart, i+wordEnd-1)
            if(check==word && dp[i-1]==true){
                dp[i+wordEnd-1]=true
            }
            
        }
    }

    return dp[dp.length-1]
    
};
