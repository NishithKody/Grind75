/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newcolor) {

    let oldColor = image[sr][sc]
    if(oldColor == newcolor){
        return image
    }
    let n = image.length
    let m = image[0].length

    let dfs= (r,c,color)=>{
        if(r<0 || c<0 || r>=n || c>= m || image[r][c]!=color)
            return 
        
        image[r][c] = newcolor

        dfs(r+1, c, color)
        dfs(r-1, c, color)
        dfs(r, c+1, color)
        dfs(r, c-1, color)

    }

    dfs(sr,sc, oldColor)

    return image
};
