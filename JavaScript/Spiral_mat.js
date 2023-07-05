/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(mat) {

    let l = 0
    let r = mat[0].length-1

    let n = mat.length-1
    let m = 0

    let count = mat.length * mat[0].length

    let res = []

    while(res.length!=count)
    {
        for(let i=l; i<=r; i++){
            res.push(mat[m][i])

        }
        if(res.length==count)
                break

        m++

        for(let i=m; i<=n; i++){
            res.push(mat[i][r])
        }

        r--
        if(res.length==count)
                break

        for(let i=r; i>=l; i--){
            res.push(mat[n][i])
        }
        n--
        if(res.length==count)
                break
        for(let i=n;i>=m; i--){
            res.push(mat[i][l])
            
        }
        if(res.length==count)
                break

        l++

    }

    return res
    
    
};
