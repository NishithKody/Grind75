/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {

    let n = mat.length
    let m = mat[0].length

    let q = []
    let visit = new Set()

    let res = new Array(n)
    for(let i=0; i<n; i++){
        res[i] = new Array(m).fill(9)
    }

    for(i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(mat[i][j]==0){
                q.push([i,j,0])
                
            }
        }
    }

    // console.log('initial q',q)

    while(q.length>0){
        let [r,c,val] = q.shift() 
        res[r][c]=val

        let dir = [[0,1],[1,0],[0,-1],[-1,0]]

        for(let d of dir){
            let nr = r + d[0]
            let nc = c + d[1]
            
            if(nr>=n || nr<0 || nc>=m || nc<0){
                continue
            }
            // console.log(nr,nc)
            if(mat[nr][nc]==1){
                if(visit.has(nr+'|'+nc))
                    continue
                q.push([nr,nc,val+1])
                visit.add(nr+'|'+nc)
                // console.log('visit',nr,nc)
            }
        }
        // console.log('queue',q)
        // console.log('res',res)
        // console.log('res------------------------')
    }

    return res


};
