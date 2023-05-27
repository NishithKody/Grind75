class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        map = {}

        for i,n in enumerate(nums):
            if n in map:
                return map[n],i
            else:
                map[target-n]=i

        
