const hello = function(name, age) {
  console.log('hello ' + name + age);
  return name + age;
}

// function hello(name, age) {
//   console.log('hello ' + name + age);
//   return name + age;
// }

hello('ka20', 28);
const returnVal = hello('Mafia', 19);
console.log(returnVal);