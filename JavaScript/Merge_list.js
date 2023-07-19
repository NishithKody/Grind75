/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    if(lists.length==0){
        return new ListNode().next
    }

    let heap = new MinPriorityQueue({priority:item=>item.val})

    for(let list of lists){
        if(!list)
            continue
        // console.log('list',list)
        heap.enqueue(list)
    }
    // console.log('initial heap',heap)

    let res = new ListNode()
    let head =res
    // console.log('initial res',res)
    //0->[1]->null
    while(heap.size()!=0){
        let ele = heap.dequeue().element
        let newNode = new ListNode(ele.val)
        // console.log('new ndoe',newNode)
        res.next = newNode
        res = res.next
        ele = ele.next
        // console.log('res',res)
        if(!ele){
            continue
        }
        heap.enqueue(ele)
        
    }

    return head.next
    
};
