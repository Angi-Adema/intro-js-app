// fetch("https://jsonplaceholder.typicode.com/users").then(response => {
//     return response.json()
// })
// .then(data => {
//     console.log(data.map(user => user.name))
// })

async function doStuff() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data.map(user => user.name))
}
doStuff()



