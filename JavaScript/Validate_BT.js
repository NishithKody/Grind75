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
var isValidBST = function(root) {
    if(!root)
        return true
    
    let maxx = Infinity
    let minn = -Infinity

    let lutil = (node, min, max)=>{
        if(!node)
            return true
        
        if(node.val>=max || node.val<=min)
            return false
        
        let left = lutil(node.left, min, node.val)
        let right = rutil(node.right, node.val,max)

        return (left && right);

    }

    let rutil = (node,min,max)=>{
        if(!node)
            return true
        
        if(node.val<=min || node.val>=max)
            return false
        
        let left = lutil(node.left, min, node.val)
        let right = rutil(node.right, node.val,max)

        return (left && right);

    }

    let left = lutil(root.left, minn, root.val)
    let right = rutil(root.right, root.val, maxx)

    return (left && right)
    
};
