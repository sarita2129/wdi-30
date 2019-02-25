const a = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 20, 24, 30]; // Fuck you .sort and Brendan Eich

const binarySearch = (haystack, needle) => {
  // Return the index of needle within the haystack array
  // or null if needle is not found

  let start = 0;
  let end = haystack.length - 1;

  while (start <= end) {
    // let mid = Math.round( (start + end) / 2 ); // This line has a bug.
    let mid = Math.round( start + (end - start) / 2 ); // This line is interesting.

    if (haystack[mid] > needle) {
      end = mid - 1;
    } else if (haystack[mid] < needle) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return null; // needle not found
}

// Visit every number in the haystack and binary search for it.
// This should print out all the indexes: 0, 1, 2, 3
a.forEach((n) => {
  console.log( binarySearch(a, n) );
})
