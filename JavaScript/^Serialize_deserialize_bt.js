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
        if(!node)
        {
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
    let nums = data.split(',')
    // console.log('val',nums)
    let i = 0

    let util = ()=>{

        if(i==nums.lenght)
            return

        if(!nums[i] || nums[i]==null){
            i++
            return null
        }
        
        let node = new TreeNode(nums[i])
        i++
        node.left = util()
        node.right = util()
        return node

    }

    let res = util()
    return res
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
