const array = ["cat", "dog", "bird", "fish", "lizzard", "spider"]

if (array.length === 0) {
  console.log("empty")
} else if (array.length < 5) {
  console.log("small")
} else if (array.length < 10) {
  console.log("medium")
} else {
  console.log("large")
}
