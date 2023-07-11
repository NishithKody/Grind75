/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {

     let res = []

    let dfs = (node)=>{
        if(!node){
            res.push(null)
            return
        }

        res.push(node.val)

        dfs(node.left)
        dfs(node.right)

    }
    dfs(root)
    return res.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    
    let val = data.split(',')
    let i =0

    let dfs=()=>{
        if(val[i]==''){
            i++
            return null
        }

        let node = new TreeNode(val[i])
        i++
        node.left = dfs()
        node.right = dfs()
        return node
    }

    let res = dfs()
    return res
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
