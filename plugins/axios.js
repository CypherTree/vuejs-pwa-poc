import * as axios from 'axios'

let options = {}

// if it's the server build, request from the local IP
if (process.server) {
  options.baseURL = `${process.env.API_URL}`
} else if (process.browser) {
  console.log('api url is ', process.env.API_URL) 
  options.baseURL = `${process.env.API_URL}`
}

export default axios.create(options)
