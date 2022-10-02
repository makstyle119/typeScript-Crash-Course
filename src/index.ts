// Basic Type
let id: number = 5;
let company: string = 'MAK';
let isPublish: boolean = true;
let x: any = 'someone';

x = 12;

let ids: number[] = [1, 2, 3, 4, 5];

let arr: any[] = [1, true, 'hello'];

// tuple
let person: [number, string, boolean] = [1, 'something', false];

// tuple array
let employee: [number, string][];
employee = [
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
];

// Union
let pid: string | number;
pid = 22;

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// object
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'MAK',
};

// type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// function
function addNum(x: number, y: number): number {
  return x + y;
}

// void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: 'MAK',
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => {
  return x + y;
};
const sub: MathFunc = (x: number, y: number): number => {
  return x - y;
};

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, 'Khan', 'developer');

// Generics
function getArray(item: any[]): any[] {
  return new Array().concat(item);
}

function getArray2<T>(item: T[]): T[] {
  return new Array().concat(item);
}

let numArr = getArray([1, 2, 3, 4]);
let stringArr = getArray(['MAK', 'Something', 'Nothing', 'Khan']);

let numArr2 = getArray2<number>([1, 2, 3, 4]);
let stringArr2 = getArray2<string>(['MAK', 'Something', 'Nothing', 'Khan']);

// numArr2.push('hello');
