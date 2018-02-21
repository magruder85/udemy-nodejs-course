console.log('Starting app');

setTimeout(() => {
  console.log('First callback, delayed by 2000ms.');
}, 2000);

setTimeout(() => {
  console.log('Second callback, delayed by 0ms.');
}, 0);

console.log('Finishing up');
