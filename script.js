(function() {
    //1 COMPLETE

    function isArrayLengthEqual(array1, array2) {
        return array1.length === array2.length;
    }
    console.log(isArrayLengthEqual(['sad', 'asd'] , ['sfgh' , 'wqe' , 'wesda']));

    //2 COMPLETE

    var arrayHasElement = function (array, val) {
        return array.some(function(arrayVal) {
            return val === arrayVal;
        });
    }

    var result2 = arrayHasElement([1, 'true', 'asdasdassgf', 5], 'true'); // true
    console.log(result2);

    //3 COMPLETE

    var getLetterAmountInString= function (array, letter) {
        var splitArray = array.split("");
        return splitArray.reduce(function(result, item){
            if(item === letter){
                result++;
            }
            return result;
        }, 0);
    }
    var result3 = getLetterAmountInString('aaasadaaaa', 'a');
    console.log(result3);

    //4 COMPLETE

    var getBiggestNumber = function (number0, number1) {
        if (number0 > number1){
            return number0;
        }
        else{
            return number1;
        }
    }
    var result4 = getBiggestNumber(12 , 15);
    console.log(result4);

    //5 COMPLETE

    var createMultiplier = function () {
        var multiplier = function (number) {
            return number*number;
        }
        return multiplier;
    }

    var multiplier = createMultiplier();
    console.log(multiplier(8));

    //6 COMPLETE

    var result = function isFunctionNamesEqual (func1, func2) {
        return func1.name === func2.name;
    }

    console.log(result(function createMan(){}, function createMan(){}));

    //7 COMPLETE

    var substituteElement = function (array, change, whatToChange) {
        return array.map(function(array,){
            if (array === change){
                array = whatToChange;
            }
            return array;
        }, 0);
    }

    var result7 = substituteElement([123, 1, 153, 51, 1], 1, true )
    console.log(result7);

    //8 COMPLETE

    var arraysHasElement = function (array1, array2, val) {
        var arrayBoolean1;
        var arrayBoolean2;


        return array1.reduce(function(result, item, i){
            if(item === val){
                arrayBoolean1 = true;
            }

            if(array2[i] === val){
                arrayBoolean2 = true;
            }

            return arrayBoolean1 === true && arrayBoolean2 === true;

        }, 0);

    }
    var result8 = arraysHasElement([true,false, 5], [5, 1, true], 5);
    console.log(result8);

    //1 COMPLETE

    function filterFalsyValues(array) {
        var pushVar = [];
        return array.reduce(function(result, item){
            if(item !== 0 && item !== null && item !== false && item !== undefined){
                pushVar.push(item);
            }
            return pushVar;
        }, 0);
    }

    var result11 = filterFalsyValues([5, 'asd', false, true, undefined, NaN, null, 'true']);
    console.log(result11);

    //2 COMPLETE

    function getMultipliedBigNumbers(array){
        var check = [];
        var num = [];

        return array.reduce(function(result, item, i, array) {
            num.push(item * item);
            if (num >= 1000) {
                check.push(num);
            }
            return check;
        }, 0);
    }
    var result12 = getMultipliedBigNumbers([32, 42, 55]);
    console.log(result12);


    //3 COMPLETE

    function getArrayValuesSum(array) {
        return array.reduce(function(result, item){
            if(typeof item === 'number') {
                result += item;
                return result;
            }
            else{
                return item.length;
            }
        }, 0);
    }

    var result13 = getArrayValuesSum([1, 5, 152]);
    console.log(result13);

    //4 COMPLETE

    function reverseArray(array) {
        var myArr = [];
        if(array.length >= 5){
            return array.reduce(function(result, item, i, array){
                myArr = array;
                return myArr.reverse();
            }, 0);
        }
        else{
            return array;
        }
    }
    var result14 = reverseArray([5, 2, 6, 8, 9]);
    console.log(result14);

    //1 COMPLETE

    function getArraysEqualElementsCount(array1, array2) {
        return array1.reduce(function (result, item, i) {
            if(item === array2[i]){
                result++;
            }
            return result;
        }, 0);
    }
    var result21 = getArraysEqualElementsCount([5, 6, 7, 8] , [5, 6, 7, 8]);
    console.log(result21);

    //2 COMPLETE

    function getArraysNotEqualElementsCount(arr1 , arr2) {
        var arr1copy = arr1.slice();

        return arr2.reduce(function(result, item) {
            var index = arr1copy.indexOf(item);
            if (index === -1) {
                arr1copy.splice(index, 1);
                result++;
            }
            return result;
        }, 0);
    }

    var result22 = getArraysNotEqualElementsCount([1, 2, 3], [1, 5, 1]);
    console.log(result22);

    //3 COMPLETE

    function getArrayEqualElementCountHard(array1 ,array2) {
        var arr1copy = array1.slice();

        return array2.reduce(function(result, item) {
            var index = arr1copy.indexOf(item);
            if (index !== -1) {
                arr1copy.splice(index, 1);
                result++;
            }

            return result;
        }, 0);
    }


    var result23 = getArrayEqualElementCountHard([1, 2, 1, 2, 3, 3], [3, 2, 1, 1]);
    console.log(result23);

    //4 COMPLETE

    function getArrayElementsInARowAmount(array) {
        return array.reduce(function(result, item, index, array){
            if(array[index] === array[index + 1]){
                result++;
            }
            return result;
        }, 0);
    }

    var result24 = getArrayElementsInARowAmount([true, true, 1, 2, 15, 1, 2, 2]);
    console.log(result24);

    //5 COMPLETE

    function getArrayElementByType(array, arrayTypeof) {
        var check = [];
        array.filter(function (item) {
            if (typeof item === arrayTypeof)check.push(item)
        });
        return check;
    }

    var result25 = getArrayElementByType([1, 'asd', 2, true, false, true, 3], 'string');
    console.log(result25);


})();