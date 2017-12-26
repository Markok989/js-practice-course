var arr;
beforeEach(function () {
    arr = [1, 3, 5];
});

describe("Arrays", function () {
    describe("#push", function () {

        it("adds element to an array", function () {
            arr.push(7);
            expect(arr).to.deep.equal([1, 3, 5, 7]);
        });

        it("returns the new length of the array", function () {
            expect(arr.push(7)).to.equal(4);
        });

        it("add abything into tj array", function () {
            expect(arr.push({})).to.equal(4);
        });
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var numbers = [1, 2, 3];
var numbersCopy = numbers;
var numbersOtherCopy = [1, 2, 3];

// true, since both variables refer to the same object in memory
numbers === numbersCopy;

// false! even though both arrays have the same structure, they are not the same array in memory
numbers === numbersOtherCopy;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe("onlyStrings", function () {

    it("return an array", function () {
        expect(onlyStrings([1, 2, 3])).to.be.an('array');
    });

    it("does not chante arrays of strings", function () {
        expect(onlyStrings(["a", "b", "c"])).to.deep.equal(["a", "b", "c"]);
    });

    it("remove non-string primitives form array", function () {
        expect(onlyStrings([1, "hi", null, "cool", undefined, "woah", false, "ok"])).to.deep.equal(["hi", "cool", "woah", "ok"]);
    });

    it("removes reference types from an array", function () {
        expect(onlyStrings([{}, "a", [], "b", function () { }, "c"])).to.deep.equal(["a", "b", "c"]);
    });
});

function onlyStrings(arr) {
    var strings = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") string.push(arr[i]);
    }
    return strings;
}

function onlyStrings(arr) {
    return arr.filter(function (el) { return typeof el === "string"; });
}