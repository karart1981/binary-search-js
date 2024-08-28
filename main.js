const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
      return -1; 
    }

    const middle = Math.floor((left + right) / 2);
  
    if (arr[middle] === target) {
      return middle; 
    }
  
    if (arr[middle] > target) {
      return binarySearch(arr, target, left, middle - 1);
    }
    return binarySearch(arr, target, middle + 1, right);
  }
  
  const result = binarySearch(sortedArray, target);
  
  if (result !== -1) {
    console.log(`Element found at index ${result}`);
  } else {
    console.log("Element not found in the array");
  }
  