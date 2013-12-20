/*!
 * grunt-sample.js 0.0.1 20-12-2013
 */

(function(exports) {
    exports.binarySearch = function binarySearch(array, key) {
        var middle = Math.floor(array.length / 2), left = 0, right = array.length;
        while (right >= left) {
            if (array[middle] === key) {
                return middle;
            } else if (array[middle] > key) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
            middle = Math.floor((left + right) / 2);
        }
        return -1;
    };
})(typeof exports === "undefined" ? window : exports);

(function(exports) {
    exports.bubbleSort = function bubbleSort(array) {
        var temp;
        for (var i = 0; i < array.length; i += 1) {
            for (var j = i; j > 0; j -= 1) {
                if (array[j] < array[j - 1]) {
                    temp = array[j];
                    array[j] = array[j - 1];
                    array[j - 1] = temp;
                }
            }
        }
        return array;
    };
})(typeof exports === "undefined" ? window : exports);

(function(exports) {
    function partition(array, left, right) {
        var cmp = array[right - 1], minEnd = left, maxEnd;
        for (maxEnd = left; maxEnd < right - 1; maxEnd += 1) {
            if (array[maxEnd] <= cmp) {
                swap(array, maxEnd, minEnd);
                minEnd += 1;
            }
        }
        swap(array, minEnd, right - 1);
        return minEnd;
    }
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        return array;
    }
    function quickSort(array, left, right) {
        if (left < right) {
            var p = partition(array, left, right);
            quickSort(array, left, p);
            quickSort(array, p + 1, right);
        }
        return array;
    }
    exports.quickSort = function(array) {
        return quickSort(array, 0, array.length);
    };
})(typeof exports === "undefined" ? window : exports);