/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    //pre - 3,9,20,15,7
    //ino - 9,3,15,20,7

    let util = (pre,ino)=>{

        if(!pre.length || !ino.length)
            return null
        
        let res = new TreeNode(pre[0])
        let mid = ino.indexOf(pre[0])

        res.left = util(pre.slice(1,mid+1), ino.slice(0,mid))
        res.right = util(pre.slice(mid+1), ino.slice(mid+1))

        return res

    }

    res = util(preorder, inorder)
    return res


};
