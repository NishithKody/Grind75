/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

    let prev = new Array(n).fill(1)
    // console.log('initial prev',prev)
    
    for(let i=m-2; i>=0; i--){
        let cur = new Array(n).fill(0)
        cur[n-1]=1
        
        for(let j=n-2; j>=0; j--){
            cur[j]=cur[j+1]+prev[j]
            // console.log('cur',cur)
        }
        prev=cur
        // console.log('updated prev',prev)
    }

    return prev[0]
    
};
