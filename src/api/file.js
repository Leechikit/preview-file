import axios from 'axios'

const config = {
  responseType: 'text'
}

// 返回一个Promise(发送post请求)
export function file (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, Object.assign({}, params, config))
      .then(response => {
        console.log(response.headers)
        if (response) resolve(response.data)
      }, err => {
        console.log(err)
        reject(err)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}
