const a = [1, 2] // 0x01
const elementToAdd = 3 // 3

add(a, elementToAdd) // 0x01, 3

console.log(a)
// console.log(elementToAdd)

function add(array, element) {
  element = element + 1 // 4
  array.push(element) // 0x01
}

const array = a
array.push(4)
