//Objective is to find the next permutation of a sequence of integers

let nums = [1,3,2]


//O(n) solution that finds two indices to swap, then reverses the rest of the list

//Find the first non-increasing element, starting from the back
let i = nums.length - 2
while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
}

//Find the first element greater than i, starting from the back
if (i >= 0) {   
    let j = nums.length - 1
    while (j >= 0 && nums[j] <= nums[i]) {
        j--
    }

    swap(i, j)
}

reverse(nums, i + 1)

function swap(i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

function reverse(array, index) {
    let start = index 
    let end = array.length - 1

    while (start < end) {
        swap(start, end)
        start++
        end--
    }
}

return nums