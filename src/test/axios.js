import axios from 'axios'

// axios.get('localhost:3000/api/zlb/userList', {
//   withCredentials: true
// }).then((res) => {
//   console.log(res)
// })

axios.get('http://localhost:3000/simple/get?size=1&').then((res) => {
  console.log(res)
})
