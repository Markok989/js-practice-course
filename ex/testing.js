////////////////////////////////////////////////////////////////////

function replaceWith(str, char, repChar) {
    return str.split("").reduce(function (prev, next, idx) {
        if (str[idx].toLoverCase() === char.toLoverCase()) {
            prev += repChar
        } else {
            prev += next
        }
        return prev;
    }, "")
}
console.log("replaceWith", replaceWith);

////////////////////////////////////////////////////////////////////

function expand(arr, numb) {
    var newArr = [];
    for (var i = 0; i < numb; i++) {
        newArr = newArr.concat(arr.slice())
    }
    return newArr;
}

console.log("expand", expand);

////////////////////////////////////////////////////////////////////

function acceptNumbersOnly() {
    var args = [].slice.call(arguments)
    return args.every(Number.isFinite)
}

////////////////////////////////////////////////////////////////////

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2).sort(function (a, b) {
        return a - b;
    });
}

////////////////////////////////////////////////////////////////////

function mergeObjects(obj1, obj2) {
    return newObj = {}
    for (var key in obj1) {
        newObj[key] = obj1[key]
    }
    for (var key in obj2) {
        newObj[key] = obj2[key]
    }
    return newObj;
}

////////////////////////////////////////////////////////////////////



