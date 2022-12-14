/*  const person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  }
};
person.greet();   */


/*  const person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  }
};
//...
// person.age = 31;
delete person.age;
// person.age = undefined;
// person.age = null;
person.isAdmin = true;
console.log(person);  */


const movieList = document.getElementById('movie-list');
movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

/*  let person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  }
};

delete person.age;
person.isAdmin = true;
console.log(person['first name']);    */


/*  let person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  },
  1.5: 'Hello!'
};
delete person.age;
person.isAdmin = true;
console.log(person['first name']);
console.log(person[1.5]);  // it's not problem in use string
console.log(person);   */


const userChosenKeyName = 'level';

let person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  [userChosenKeyName]: '...',
  greet: function () {
    alert('Hi there!');
  },
  1.5: 'Hello!'
};
delete person.age;
person.isAdmin = true;

const keyName = 'first name'

console.log(person[keyName]);
console.log(person[1.5]);
console.log(person);



