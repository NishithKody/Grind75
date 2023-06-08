/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {

    let n = mat.length
    let m = mat[0].length
    let res = new Array(n)

    for(let i =0; i<n; i++){
        res[i]=new Array(m)
    }

    let queue = []

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(mat[i][j]==0){
                res[i][j]=0
                queue.push([i,j])
            }
            else{
                mat[i][j]=-1
            }
        }
    }

    let dir = [[0,1], [1,0], [-1,0], [0,-1]]

    while(queue.length!=0){
        let [r,c] = queue.shift()

        for(let d of dir){
            let nr = r+d[0]
            let nc = c+d[1]

            if(nr<0 || nc<0 || nr>=n || nc >=m || mat[nr][nc]!=-1){
                continue
            }

            res[nr][nc] = res[r][c]+1
            mat[nr][nc]= 0
            queue.push([nr,nc])
        }
    }
    return res
    
};

//Doing bfs from 1's position will be inefficient. Thus we do it the other way around, from the position of 0.
