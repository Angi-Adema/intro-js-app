// function sumNumbersBelow(number) {
//   if (number <= 0) return 0    // Be sure to add this condition to avoid an infanite loop.
//   return number + sumNumbersBelow(number - 1)
// }

// console.log(sumNumbersBelow(5))

// Recursion acts like a for loop and loops through numbers and performs an action on those numbers. Here we are passing in 5.

// Initial number = 5
// 5+5-1 or 5 + "4"
// 4+4-1 or 4 + "3"
// 3+3-1 or 3 + "2"
// 2+2-1 or 2 + "1"

// 5 + 4 + 3 + 2 + 1 = 15

// const person = {
//       name: "Kyle",
//       friend: {
//         name: "Joe",
//         friend: {
//           name: "Sally",
//         },
//       },
//     }

//     let currentPerson = person

//     function printNames(currentPerson) {
//       if (currentPerson == null) return
//       console.log(currentPerson.name)
//       printNames(currentPerson.friend)
//     }

//     printNames(person)
