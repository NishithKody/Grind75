/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {

    let n = grid.length
    let m = grid[0].length

    let res = 0
    let fresh = 0

    let q = []

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(grid[i][j]==2){
                q.push([i,j])
            }
            if(grid[i][j]==1)
            {
                fresh++
            }
        }
    }

    let dir = [[0,1],[1,0],[-1,0],[0,-1]]
    
    while(q.length!=0){
        
        let len = q.length
        let flag = 0
        

        while(len!=0)
        {
            let pos = q.shift()
            len--
            let r = pos[0]
            let c = pos[1]
            

            for(let d of dir){
                let nr = r + d[0]
                let nc = c + d[1]

                if(nr>=n || nc>=m || nc<0 || nr<0 || grid[nr][nc]!=1)
                    continue
                
                grid[nr][nc]=2
                fresh--
                flag=1
                
                q.push([nr,nc])
            }

        }
        if(flag==1)
                res++
    }

    if(fresh!=0)
        return -1
    else    
        return res
};
