/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    let res = 0;
    let n = grid.length
    let m = grid[0].length

    let dfs = (r,c)=>{

        if(r>=n || c>=m || c<0 || r<0 || grid[r][c]!='1'){
            return
        }
        grid[r][c]='0'

        dfs(r+1,c)
        dfs(r,c+1)
        dfs(r-1,c)
        dfs(r,c-1)

    }

    for(let i=0; i<n; i++){
        for(let j=0; j<m;j++){
            if(grid[i][j]=='1'){
                res++
                dfs(i,j)
            }
        }
    }

    return res
    
};
