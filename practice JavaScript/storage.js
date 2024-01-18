// Local Storage   | Cookies              | Session Storage
// 10MB            | 4KB                  | 5MB
// Never expires   | Manual Expiration    | Expires on tab close
// Client          | Client/Server        | Client
// Easy            | Hard                 | Easy

// localStorage.setItem('Name', 'Kyle')
// sessionStorage.setItem('Age', '25')

// localStorage.setItem('Name', 'Sally')
// sessionStorage.setItem('Age', '35')

// Cookies:
// const date = new Date(9999, 0, 1).toUTCString()
// const pastDate = new Date(1999, 0, 1).toUTCString()
// document.cookie = `name=Kyle; expires=${date}`
// document.cookie = `age=25; expires=${date}`
// console.log(document.cookie)
// document.cookie = `name=; expires=${pastDate}`
// console.log(document.cookie)


