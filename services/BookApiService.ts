import { instance } from './BaseApiService'
import { RestUrls } from './Urls'

const BASE_PATH = '/api'

export const SendRequest = (method, url, params?) => instance.request({ method, url, params })

export const GetData = async (dataType, params) => SendRequest("get", RestUrls[dataType], params)

export const GetBooksLength = async (categoryId) => SendRequest("get", `http://localhost:3002/api/data_length?categoryId=${categoryId}`,)
