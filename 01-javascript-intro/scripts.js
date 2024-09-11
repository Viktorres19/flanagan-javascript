/* let book = {}
console.log(book)

book.topic = 'JavaScript'
console.log(book)
book['edition'] = 7
console.log(book)
book.author = 'Flanagan'
console.log(book) */

// Arrays
/* let primes = [2, 3, 5, 7]
console.log(primes[0])
primes.length
primes[primes.length - 1]
primes[primes.length] = 9 // додав елемент в кінець масиву
console.log(primes) */

/* let empty = []
console.log(empty.length) */

//Array of objects
/* let points = [
  {x: 0, y: 0},
  {x: 1, y: 1}
] */

//Object with 2 properties:
/* let data = {
  trial1: [[1, 2], [3, 4]],
  trial2: [[2, 3], [4, 5]]
}
console.log(data) */

//Operations
/* console.log(3 + 2)
console.log(3 * 2) */

//Functions
/* const plus1 = (x) => {
  return x + 1
}
console.log(plus1(2))

const square = (x) => {
  return x + 1
}
console.log(square(plus1(2))) */

//Methods
/* let a = []
a.push(1, 2, 3)
a.reverse()
console.log(a)  */// [3, 2, 1]

//функція для обчислення абсолютної величини:
function abs(x) {
  if (x >= 0) {
    return x
  } else {
    return -x
  }
}
console.log(abs(-10) === abs(10))

const primes = [2, 3, 5, 7, 11]

//function for count sum of arrays elements
function sum(array) {
  let sum = 0
  for(let x of array) {
    sum += x
  }
  return sum
}
console.log(sum(primes))