import axios, { AxiosResponse } from 'axios'


export const authCfg = (token: string) => ({
  headers: { Authorization: `Bearer ${token}` },
  data: {},
})

export const api = axios.create({
  headers: {
    // Accept: 'application/json',
    // Authorization: 'Basic token',
    // 'Content-Type': 'application/json',
  },
  timeout: 10000,
})

api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    let err
    const resp: AxiosResponse = error.response
    if (resp) {
      if (resp.status === 502) {
        window.location.href = '/home'
      }
      err = { code: resp.status, message: resp.statusText }
    } else if (error.request) {
      err = { code: 4, message: 'No Response' }
    } else {
      err = { code: 0, message: 'Request Error' }
    }
    return Promise.reject({ error: err })
  }
)

const getSampleDataUrl = 'https://api.jsonbin.io/b/5e3660dc50a7fe418c581c95/latest' // public sample data
const postSampleDataUrl = 'https://postman-echo.com/post' // will echo the request

export const getData = (token: string) =>
  api.get<any>(getSampleDataUrl, authCfg(token))

export const postData = (token: string, someData: any) =>
  api.post(postSampleDataUrl, someData, authCfg(token))