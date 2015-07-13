module.exports = function test(item) {
  while (item && (typeof item === 'function')) {
    item = item(); 
  }
  return item;
};