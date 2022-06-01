// Given two sorted arrays nums1 and nums2 of size m and n respectively.
// return the median of the two sorted arrays.
// Follow up: The overall run time complexity should be O(log(m+n))

// SIDENOTE: comment/uncomment each variation to see how each one works.

// Example 1:

// Inpurt: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// The step-by-step process here will be
// "combine arrays => sort => even or odd length => find mid number"

// The first two things to look at are "two sorted arrays" and "the median"

// sample arrays: odd = [1,2,4,7,9] & even = [1,2,4,7]

// The median for an odd number of elements is the middle number.
// oddMedian = odd[2]
// oddMedian = 4

// The median for an even number of elements is the median of the two
// middle numbers.
// evenMedian = even[1] + even[2] / 2
// evenMedian =    2    +    4    / 2 = 3

// Secondly, to sort the array you want to combine the two arrays
// and then sort them

// Example arrays:

// const nums1 = [1, 3];
// const nums2 = [2];

// first we combine the two arrays by concatenating the arrays.

// totalArray = [1,3,2]

// Let's construct the "brute force" version first,
// to understand how it works. We'll optimize after this.

// function bf(nums1, nums2) {
//   const totalArray = [...nums1, ...nums2].sort((a, b) => a - b);

//   const middlePoint = Math.floor(totalArray.length / 2);

//   return totalArray % 2 !== 0
//     ? totalArray[mp]
//     : ((totalArray[mp] + totalArray[mp - 1]) / 2);
// }


// Now lets late a look at a variation that will allow optimization.

// This version allow us to solve this in O(log(m+n))

const nums1 = [1,3,4]
const nums2 = [2]

function findMedian(nums1 = [], nums2 = []) {
    let i1 = 0;
    let i2 = 0;

    const len1 = nums1.length;
    const len2 = nums2.length;
    const len = len1 + len2;

    if(len === 0) {
        return null;
    }
    
// this covers the scenario where both arrays are empty, it returns null.

    const merged = [];
// this array will be used to copy and store the elements in the array

    while(i1 < len1 && i2 < len2) {
        if(nums1[i1] <= nums2[i2]) {
            merged.push(nums1[i1++])
        } else {
            merged.push(nums2[i2++])
        }
    }

// This while loop allows us to add elements into merged while the 
// length of both arrays and then push the value of i1 or i2 into merged.
// once either array reaches the end, but the other array still has
// elements in it, we want to copy them into merged.


    while(i1 < len1) {
        merged.push(nums1[i1++]);
    }
    while(i2 < len2) {
        merged.push(nums2[i2++])
    }

// Just as before, once we push the elements we want to increment them;
// Otherwise, we would have an infinite loop. 
// The above code gives us the merged and sorted array!
// But we still need the median. 


    const isOdd = len%2;

    if(isOdd) {
        return merged[(len - 1) / 2]
    } else {
        return (merged[len/2] + merged[len/2 - 1])/2
    }

// This conditional lets us check is merged if even or odd, to then
// find the median for either.  
}

// Source material for this lesson: https://www.youtube.com/watch?v=H4gYNnS8kfE