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
 * @return {boolean}
 */
var isBalanced = function(root) {

    let flag =0

    let util = (node)=>{
        if(!node)
            return 0
        
        let left = util(node.left)+1
        let right = util(node.right)+1

        if(Math.abs(left-right)>1){
            flag=1
        }
        return Math.max(left,right)

    }

    util(root)

    if(flag==1)
        return false
    else return true
    
};
