'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * @returns {}: Function doesn't return anything
 * 
 */
function each(collection, func) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: This function takes in any value and returns that value.
 * 
 * @param { any value } value: Parameter representing any input value
 * 
 * @returns { value }: Function should return the input value unchanged
 * 
 */

function identity(value) {
    return value;
}

module.exports.identity = identity;

/**
 * typeOf: This function takes in any type of value and returns what kind of data
 * type it is as a string.
 * 
 * @param { any value } value: Function takes in a value parameter that can be
 * any kind of data type... ie: array, object, boolean, number, string, etc.
 * 
 * @returns { string }: Returns what kind of data type the input value is as 
 * a string.
 * 
 */

function typeOf(value) {
    if (typeof value === 'string') {
        return "string";
    } else if (typeof value === "number") {
        return "number";
    } else if (Array.isArray(value)) {
        return "array";
    } else if (typeof value === 'function') {
        return 'function';
    } else if (typeof value === "boolean") {
        return 'boolean';
    } else if (typeof value === 'undefined') {
        return 'undefined';
    } else if (typeof value === 'object' && value !== null && Array.isArray(value) === false && value instanceof Date === false) {
        return 'object';
    } else {
        return "null";
    }
}

module.exports.typeOf = typeOf;

/**
 * first: The first function take in an array and a number and returns the first 
 * item/items in the array with the amount returned equal to the number parameter. 
 * 
 * @param { array } array: Function takes in an array of values
 * @param { number } number: Function takes in a number that equals the amount of
 * items we want to return from the array.
 * 
 * @returns { a value or array }: The function returns the FIRST value of array if 
 * no parameter is given or if it is negative; OR it will return the ORIGINAL ARRAY
 * if the number parameter is greater than the length of our array parameter, OR if 
 * the number parameter is greater than 1, it will return a NEW ARRAY with a length
 * equal to that number and including values starting at the BEGINNING of the original array
 * and discard the remaining items. 
 * 
 */

function first(array, number) {
    // if array isn't an array, do what? OR if number isn't positive
    if (!Array.isArray(array) || number < 0) {
        return [];
        // if number parameter isn't given OR isn't a number, do what?
    } else if (number === undefined || typeof number !== "number") {
        return array[0];
        // if number parameter is greater than array.length, return the entire array
    } else if (number > array.length) {
        return array;
        // Otherwise, return the amount of items = to number parameter(starting from the beginning)
    } else {
        // return a new array that starts at the beginning index, and deletes everything following the
        // input parameter index. i.e slice(0, number); Will start at 0 index, and end at the index given 
        // by "number"
        return array.slice(0, number);
    }
}

module.exports.first = first;

/**
 * last: The last function takes in an array and a number and returns the last item/items
 * in the array with the amount of items returned equal to the number parameter starting
 * BACKWARDS in the original array.
 * 
 * @param { array } array: Function takes in an array of values.
 * @param { number } number: Function takes in a number that equals the length/amount of items
 * we want return from our input array.
 * 
 * @returns { a value or array }:The function returns the LAST value of array if 
 * no parameter is given or if it is negative; OR it will return the ORIGINAL ARRAY
 * if the number parameter is greater than the length of our array parameter, OR if 
 * the number parameter is greater than 1, it will return a NEW ARRAY with a length
 * equal to that number and including values starting at the END of the original array
 * and discard the remaining items in front.  
 * 
 */

function last(array, number) {
    // if input array is not an array or if input parameter is negative, return empty array
    if (!Array.isArray(array) || number < 0) {
        return [];
        // if number parameter is not given or is not a number, return LAST element in input array
    } else if (number === undefined || typeof number !== "number") {
        return array[array.length - 1];
        // if number parameter is greater than array length, return entire array input
    } else if (number > array.length) {
        return array;
        // now return a new array that starts at LAST INDEX and ends at the number input
        // slicing at a negative index will return an array that starts at that index(deleting that index) counting backward,
        // and printing to array from there onwards to the end of the array. 
    } else {
        return array.slice(-number);
    }
}

module.exports.last = last;

/**
 * indexOf: The indexOf function takes in an array and a value and returns the 
 * index that corresponds with the FIRST OCCURENCE of that input value in the array.
 * 
 * @param { array } array: Function takes in an array of values to iterate through.
 * @param { any value } value: Function takes in a value that we will be searching for
 * in the array.
 * 
 * @returns { number }: The function returns a number that corresponds with the INDEX
 * of the value in the array. If the array does NOT CONTAIN the value we are looking for,
 * the number -1 is returned.
 * 
 */

function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: This function takes in an array and a value and returns a boolean statement
 * letting us know whether or not that array contains said value. 
 * 
 * @param { array } array: Function takes in an array of values to iterate through.
 * @param { any value } value: Function takes in any value that we will be looking for
 * in the input array.
 * 
 * @returns { boolean }: Function returns a boolean statement whether or not the input array
 * contains the value input. True if so; false otherwise. 
 *
 */

function contains(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}

module.exports.contains = contains; 

/**
 * unique: This function is designed to take in an array and return a new array
 * with all of the duplicated removed. 
 * 
 * @param { array } array: Function takes in an array to iterate through.
 * 
 * @returns { array }: The function returns a new array with all the duplicates removed.
 * We were able to do this by creating an output array and using our _indexOf function. 
 * Since the indexOf function returns -1 if the array doesn't contain a value. We were
 * able to use that logic to return this new array. 
 * 
 */

function unique(array) {
    var uniqueArr = [];
    for (let i = 0; i < array.length; i++) {
        // if the the indexOf function checks the uniqueArr and array[i] (iterated item in input array) is not in there (= to -1) push that item into unique array
        if (uniqueArr.indexOf(array[i]) === -1) {
            uniqueArr.push(array[i]);
        }
    }
    return uniqueArr;
}

module.exports.unique = unique;

/**
 * filter: This function takes an array and an input function and returns a NEW ARRAY
 * that contains values from the original array that passed FOR TRUE in the input function.
 * 
 * @param { array } array: Function takes in an array of values to iterate through.
 * @param { function } func: Function takes in another function in which to call 
 * onto each element of the input array.
 * 
 * @returns { array }: Function returns an array of values that PASSED FOR TRUE based on
 * conditions set by the input function. 
 * 
 */

function filter(array, func) {
        // create output filtered array
        var filtered = [];
        // loop through input array
        for (var i = 0; i < array.length; i++) {
            // if func called with current element (array[i]), it's index (i), and the array (array) returns a true result
            if (func(array[i], i, array) === true) {
                // then push that current element into the filtered array
                filtered.push(array[i]);
            }
        }
        // return output
        return filtered;
}

module.exports.filter = filter;

/**
 * reject: Function takes in an array of values to iterate through and an input function and
 * returns a NEW ARRAY that contains values that passed for FALSE in the input function.
 * 
 * @param { array } array: Function takes in an array of values to iterate through.
 * @param { function } func: Function takes in another function in which to call onto each
 * element of the input array.
 * 
 * @returns { array }: Function returns a new array of all the values of the input array that 
 * passed FOR FALSE based on conditions tested by the input function.
 * 
 */

function reject(array, func) {
    var rejected = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false) {
            rejected.push(array[i]);
        }
    }
    return rejected; 
}

module.exports.reject = reject;

/**
 * partition: This function takes in an array to iterate through and a function on which
 * to call each element of the array on. The function tests for boolean values and RETURNS
 * a new array made up of 2 sub arrays. The first subarray are values that passed for truthy,
 * and the second subarray are values that passed for falsey. 
 * 
 * @param { array } array: Function takes in an array of values to iterate through. 
 * @param { function } func: Function takes in another function that will be called on
 * each element in the array to test for truthy and falsey values.
 * 
 * @returns { array }: Function returns a new array that will have 2 sub arrays
 * [[...], [...]]; The first sub array is filled with values that passed for TRUTHY
 * when passed into the func parameter, and the second subarray is filled with values
 * that passed for FALSEY when passed into the func parameter. 
 * 
 */

function partition(array, func) {
    var truthy = [];
    var falsey = [];
    var partitioned = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
        truthy.push(array[i]);
    } else {
        falsey.push(array[i]);
        }
    }
    partitioned.push(truthy);
    partitioned.push(falsey);
    return partitioned;
}

module.exports.partition = partition;

/**
 * map: This function takes in a collection to iterate through and a function on which
 * to call onto each element of that array. It returns a NEW ARRAY populated with the
 * RESULTS of calling the input function on EVERY ELEMENT in the input array. 
 * 
 * @param { array or object } collection: Function takes in an array or object to iterate
 * through. 
 * @param { function } func: Function takes in another function on which to call onto
 * each element of the collection. 
 * 
 * @returns: { arary }: Function returns a new array filled with values from the
 * original array after they have been passed into the provided function.
 * 
 */

function map(collection, func) {
    var mapped = [];
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            mapped.push(func(collection[i], i, collection));
        }
    } else {
        for (var key in collection) {
            mapped.push(func(collection[key], key, collection));
        }
    }
    return mapped;
}

module.exports.map = map;

/**
 * pluck: This function takes in an array of objects to iterate through and a property
 * that we are searching for. It returns an array of the VALUES from the objects that are assigned
 * to the given property provided.
 * 
 * @param { array of object } array: Function takes an array of objects to iterate through.
 * @param { property } property: Function takes in a property/key that we will 
 * be searching for in each of the objects.
 * 
 * @returns { array }: Function returns an array with all the values that tested
 * true in the map function inside of this pluck function. They would test TRUE if the
 * objects within the array contained the input property parameter. 
 * 
 */

function pluck(array, property) {
       // we must use our new map function
    // so plucked will be equal to the mapped array of object's properties
    // map takes in the array of objects and a function that tests each object in the array
    var plucked = _.map(array, function(object) {
        // we just want map to return an array of the values at each object that have the property we are passing in
        // so we look at objects[that have this property] <--- returns the value
        return object[property];
    });
    // then we just return that mapped variable
    return plucked;
}

module.exports.pluck = pluck;

/**
 * every: This function takes in an array or object to iterate through and a function on which
 * to call each element of the collection on. This function tests to see if EVERY element
 * in the collection tests for TRUE. If so, true is returned; otherwise, false is returned.
 * 
 * @param { array or object } collection: This function takes in an array or object to
 * iterate through.
 * @param { function } func: This function takes in another function to call on each
 * element in the collections.
 * 
 * @returns { boolean }: This function returns a boolean statement based on whether or not
 * ALL elements in the collection tested for TRUE when passed into the input function.
 * 
 */

function every(collection, func) {
    // create a default result statement that can be easily reassigned if a test returns false in a loop
    let result = true;
    // if function is not given...
    if(func === undefined) {
        // loop through collection
        for (var i = 0; i < collection.length; i++) {
            // if current iteration results in a truthy value return true
            if(collection[i]) {
                return true;
                //otherwise return false
            } else {
                return false;
            } 
        }
    }
    // if collection is an array
    if (Array.isArray(collection)) {
        // call the function on the current element, its index, and the collection itself
        for (var i = 0; i < collection.length; i++) {
            // if any iteration returns a false statement
            if (func(collection[i], i, collection) === false) {
                //reassign result to = false;
                result = false;
            }
        }
    } else {
        // if collection is an object
        for (var key in collection) {
            // call function on current value, key, and collection
            // if ANY item returns false, reassign result to false
            if (func(collection[key], key, collection) === false) {
                result = false;
            }
        }
    }
    // return our final result
    return result;
}

module.exports.every = every;

/**
 * some: This function takes in an array or object to iterate through and a function on which
 * to call each item in the collection. A boolean statement is returned based on whether or not
 * AT LEAST ONE item in the collection passes for TRUE when passed into the provided function.
 * 
 * @param { array or object } collection: Function takes in an array or object to iterate through.
 * @param { function } func: Function takes in another function on which to call each item 
 * in the provided collection.
 * 
 * @returns { boolean }: This function returns a boolean statements based on whether or not
 * AT LEAST ONE item in the provided collection tests for TRUE when passed into the provided function.
 * True if so; false, otherwise. 
 * 
 */

function some(collection, func) {
    let result = false;
    // if function is not provided
    if(func === undefined) {
        //loop through collection
        for (var i = 0; i < collection.length; i++) {
            // if at least ONE element results in a truthy value, return true
            if(collection[i]) {
                return true;
            } else {
                return false;
            }
        }
    }
    // if collection is an array
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if(func(collection[i], i, collection) === true) {
                result = true;
            }
        }
    } else {
        for (var key in collection) {
            if(func(collection[key], key, collection) === true) {
                result = true;
            }
        }
    }
    return result;
}

module.exports.some = some;

/**
 * reduce: This function is designed to iterate through an array and create an 
 * ACCUMULATION EFFECT that will result in a SINGLE VALUE being RETURNED.
 *   
 * @param { array } array: Function takes in an array to iterate through. 
 * @param { function } func: Function takes in another function that is called on after
 * each iteration in the accumulation effect.
 * @param { seed } seed: Function takes in a seed value that tells the function where the
 * accumulation effect to start. 
 *
 * @returns { any data type }: Function returns a SINGLE VALUE which is the input function's
 * accumulated result. 
 * 
 */

function reduce(array, func, seed) {
    if (seed === undefined) {
        seed = array[0]; // assign seed the value of array[0]
        for (var i = 1; i < array.length; i++) { // since seed is already at the first element, we want to start at next iundex
            seed = func(seed, array[i], i); // prev, current, index, seed is reset at each iteration in loop, its how we're creating the accumulation effect
        }
    } else { // if seed !== undefined
        for (var i = 0; i < array.length; i++) { // since seed is already initialized..
            seed = func(seed, array[i], i);
        }
    }
    return seed;
}

module.exports.reduce = reduce;

/**
 * extend: This function takes in an object AND as many other objects that the
 * user wants to copy over into the first object. The original object will be updated
 * with all the other objects' key/value pairs in the order in which they appear
 * in the PARAMETERS list.
 * 
 * @param { object } object: Function takes in a 1st object that will be the object
 * to be copied INTO.
 * @param { object } object2: The function takes in another object that will be
 * copied into the first object in the parameter list.
 * *** .... AND SO ON, with however many objects are provided ****
 * 
 * @returns { object }: The function returns the first object with all the other 
 * objects' key/value pairs included in it.
 * 
 */

function extend(object) {
    for (var i = 0; i < arguments.length; i++) {
        Object.assign(object, arguments[i]);
        };
    return object;
}

module.exports.extend = extend;
