"use strict";
// Basic Type
let id = 5;
let company = 'MAK';
let isPublish = true;
let x = 'someone';
x = 12;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello'];
// tuple
let person = [1, 'something', false];
// tuple array
let employee;
employee = [
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
];
// Union
let pid;
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'MAK',
};
// type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// function
function addNum(x, y) {
    return x + y;
}
// void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'MAK',
};
const add = (x, y) => {
    return x + y;
};
const sub = (x, y) => {
    return x - y;
};
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now register`;
    }
}
const MAK = new Person(1, 'MAK');
// subClass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Khan', 'developer');
// Generics
function getArray(item) {
    return new Array().concat(item);
}
function getArray2(item) {
    return new Array().concat(item);
}
let numArr = getArray([1, 2, 3, 4]);
let stringArr = getArray(['MAK', 'Something', 'Nothing', 'Khan']);
let numArr2 = getArray2([1, 2, 3, 4]);
let stringArr2 = getArray2(['MAK', 'Something', 'Nothing', 'Khan']);
// numArr2.push('hello');
