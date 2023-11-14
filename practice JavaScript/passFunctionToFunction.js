// // Passing a function to another function and calling the original function with a value.
// function printVariable(variable) {
//   console.log(variable)
// }

// function func(x) {
//   x("hello world")
// }

// func(printVariable)

// printVariable("Hi")

// // Passing a function to another function then passing in values.
// function sumCallback(a, b, callback) {
//   callback(a + b)
// }

// function handleSum(sum) {
//   console.log(sum)
// }

// sumCallback(1, 2, handleSum)

// // Passing a function to another function and appending a value to the passed in function in order to append this value to the passed in variable.
// function printVariable(variable) {
//   console.log(variable)
// }

// function nameFunction(name, callback) {
//   callback("Hello " + name)
// }

// nameFunction("Angi", printVariable)

// // Can also pass in the actual traditional function() like this.
// function nameFunction(name, callback) {
//   callback("Hello " + name)
// }

// nameFunction("Angi", function (variable) {
//   console.log(variable)
// })
