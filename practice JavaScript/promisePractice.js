// const promise = new Promise((resolve, reject) => {
//   const sum = 1 + 2
//   if (sum === 2) {
//     resolve("Success")
//   } else {
//     reject("Error")
//   }
// })

// promise
//   .then((message) => {
//     console.log(message)
//   })
//   .catch((message) => {
//     console.error(message)
//   })

// setTimeout(() => {
//   console.log("here")
// }, 250)

// setTimeoutPromise(250).then(() => {
//   console.log("here")
// })

// function setTimeoutPromise(duration) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, duration)
//   })
// }

// const button = document.querySelector("button")

// function addEventListenerPromise(element, method) {
//   return new Promise((resolve, reject) => {
//     element.addEventListener(method, resolve)
//   })
// }

// addEventListenerPromise(button, "click").then((e) => {
//   console.log("clicked")
//   console.log(e)
// })

// function getValueWithDelay(value, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value)
//     }, delay)
//   })
// }

// function getValueWithDelayError(value, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Error")
//     }, delay)
//   })
// }

// async function newFunction() {
//   try {
//     const value1 = await getValueWithDelay("something", 250)
//     console.log(value1)
//     const value2 = await getValueWithDelay("somethingElse", 250)
//     console.log(value2)
//     const value3 = await getValueWithDelayError("flowers", 250)
//     console.log(value3)
//   } catch (error) {
//     console.error(error)
//   } finally {
//     console.log("finally")
//   }
// }

// newFunction()
