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
 * @return {number[]}
 */
var rightSideView = function(root) {

    if(!root)
        return []

    let res = []
    let q = []

    q.push(root)

    while(q.length>0){
        let len = q.length
        let l = null

        while(len>0){
            let ele = q.shift()
            l = ele.val

            if(ele.left)
            {
                q.push(ele.left)
            }

            if(ele.right){
                q.push(ele.right)
            }

            len--
        }

        res.push(l)

    }

    return res

};
