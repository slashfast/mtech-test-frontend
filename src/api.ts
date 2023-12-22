import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 15000
})

export async function get(endpoint: string) {
  try {
    return await instance.get(endpoint).then((response) => {
      return response.data
    })
  } catch (error) {
    console.error(error)
  }
}

export async function post(
  endpoint: string,
  payload: object | string,
  config?: any
) {
  try {
    return await instance.post(endpoint, payload, config)
  } catch (error) {
    console.error(error)
  }
}
