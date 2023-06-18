/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    let util = (node)=>{

        if(!node)
            return null

        if(node == p || node ==q)
            return node
        
        let left = util(node.left)
        let right = util(node.right)

        if(!left)   return right // if both nodes in the right side
 

        if(!right)  return left // if both nodes in the left side

        return node // one node in both sides


    }

    return util(root)
    
};

