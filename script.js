// const a = [1, 2] // 0x01
// const elementToAdd = 3 // 3

// add(a, elementToAdd) // 0x01, 3

// console.log(a)
// // console.log(elementToAdd)

// function add(array, element) {
//   element = element + 1 // 4
//   array.push(element) // 0x01
// }

// const array = a
// array.push(4)

const items = [
  { price: 10 },
  { price: 20 },
  { price: 14 },
  { price: 1 },
  { price: 6 },
]

const sum = items.reduce((sum, item) => {
  // "sum" equals our previous price values prior to being added together. "item" is each individual item that we are looping through.
  return sum + item.price
}, 0)

console.log(sum)
