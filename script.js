setTimeout(() => {
  console.log("inside")
}, 5000)

const button = document.querySelector("button")
button.addEventListener("click", () => {
  console.log("clicked")
})

console.log("outside")
