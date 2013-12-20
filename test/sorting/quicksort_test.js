test('Quick Sort', function() {
	expect(1);
  deepEqual(quickSort([3, 6, 2, 9, 5, 8, 1, 4, 5]), [1, 2, 3, 4, 5, 5, 6, 8, 9], 'should work on duplicate element');
});