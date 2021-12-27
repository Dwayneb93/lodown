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