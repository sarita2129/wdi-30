// Wrap setTimeout in a Promise.

// Make this work:
wait(2000).then(() => {
  console.log('2 seconds have elapsed');
});
