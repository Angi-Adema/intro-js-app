// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// array.forEach((index) => {
//   console.log(index * 2)
// })

// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     break
//   }
//   console.log(i)
// }

const person = {
  name: "Kyle",
  friend: {
    name: "Joe",
    friend: {
      name: "Sally",
    },
  },
}

let currentPerson = person

while (currentPerson.friend != null) {
  currentPerson = currentPerson.friend
  console.log(currentPerson.name)
}
