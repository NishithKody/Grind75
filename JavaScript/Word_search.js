/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    let n = board.length
    let m = board[0].length

    let util= (r,c,index)=>{

        if(index==word.length){  
             return true
        }

        if(r>=n || r<0 || c>=m || c<0 || board[r][c]!=word[index]){
            return false
        }

        board[r][c]='#'

        let top = util(r+1,c,index+1)
        let down = util(r-1,c,index+1)
        let right = util(r,c+1,index+1)
        let left = util(r,c-1,index+1)

        board[r][c] = word[index]

        return top || down || left || right


    }


    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(board[i][j]==word[0]){
                let res = util(i,j,0)
                if(res==true){
                    return true
                }
                // console.log('i,j,res',i,j,res)
            }
        }
    }

    return false
    
};
