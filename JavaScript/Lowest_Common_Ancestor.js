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

    let util = (node) =>{

        if(!node)
        {   
            return
        }
            
        if((node.val>=p.val && node.val<=q.val) ||
        (node.val>=q.val && node.val<=p.val)){
            return node
        }
        else if(node.val<=p.val && node.val<q.val){
            return util(node.right)
        }
            
        else if(node.val>=p.val && node.val>q.val)
        {
            return util(node.left)
        }
            
    }

    return util(root)
    
};
