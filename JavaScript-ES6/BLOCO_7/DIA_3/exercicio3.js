const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }
  
  return arr;
}

// implemente seus testes aqui
assert.strictEqual(typeof myRemoveWithoutCopy, 'function');
assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1, 2, 3, 4]);

const newArr = [1,2,3,4];
myRemoveWithoutCopy(newArr, 1);
assert.deepStrictEqual(newArr.length, 3);
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1,2,3,4])