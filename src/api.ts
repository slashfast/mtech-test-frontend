import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000',
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
