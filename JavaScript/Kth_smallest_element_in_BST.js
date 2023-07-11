/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    let res = []

    let util = (node)=>{
        if(!node)
            return
        
        util(node.left)
        res.push(node.val)
        util(node.right)
    }

    util(root)
    // console.log(res)
    return res[k-1]
    
};
