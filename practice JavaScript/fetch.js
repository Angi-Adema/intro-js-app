// const URL = "https://jsonplaceholder.typicode.com/comments?postId=1"

// fetch("https://jsonplaceholder.typicode.com/users").then(response => {
//     return response.json()
// })
// .then(data => {
//     console.log(data.map(user => user.name))
// })

// async function doStuff() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//     console.log(data.map(user => user.name))
// }

// In order to send info to the API as a POST request:
// async function doStuff() {
//     const response = await fetch(URL, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             title: "New Post"
//         })
//     })
//     const post = await response.json()
//     console.log(post)
// }
// doStuff()
// JSON.stringify converts the body into a string JSON version. We also must tell the API what our data looks like so we use a header. The Content-Type is in quotes because it has a hyphen.

// fetch(URL).then(res => res.json()).then(comments => {
//     console.log(comments)
// })




