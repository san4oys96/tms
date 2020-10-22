function isPalindrome(str) {
    var strLen = str.length,
        strReverse = str.split('').reverse().join('');
    if (strReverse == str) {
        return 'yes';
    } else {
        return 'no';
    }
}

test = isPalindrome('обитатель');
test2 = isPalindrome('радар');

console.log(test);
console.log(test2);

const array = [4, 10, 9, 2, 6, 7, 3, 5, 8, 1]
console.log("array", array)

bubbleSort(array)


function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            const buff = array[i]
            array[i] = array[i + 1]
            array[i + 1] = buff
        }

    }
    console.log("array", array)
}