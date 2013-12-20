test('Binary Search', function() {
	expect(3);
  equal(binarySearch([1, 2, 3, 4, 6, 8], 1), 0, 'should find the element at first position');
  equal(binarySearch([1, 2, 3, 4, 6, 8], 8), 5, 'should find the element at last postion');
  equal(binarySearch([1, 2, 3, 4, 6, 8], 4), 3, 'should find the element in position array.length');
});

test('Binary Search', function() {
	expect(2);
  equal(binarySearch([1, 8], 1), 0, 'should work with arrays with 2 elements');
  equal(binarySearch([1, 8], 8), 1, 'should work with arrays with 2 elements');
});

test('Binary Search', function() {
	expect(2);
  equal(binarySearch([1, 8], 4), -1, 'should return -1 for missing element');
  equal(binarySearch([], 8), -1, 'should work with empty array');
});