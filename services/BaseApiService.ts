import axios, { AxiosResponse, AxiosInstance } from "axios";
import HttpStatusCode from "./HttpStatusCode";

const OnResponseSuccess = (response: AxiosResponse<any>): AxiosResponse<any> => response

const OnResponseFailure = (error: any): Promise<any> => {
  const httpStatus = error?.response?.status

  const error_msg = error?.response?.data.error_msg

  switch(httpStatus) {
    case HttpStatusCode.UNAUTHORIZED:
      console.log('UNAUTHORIED');
      break
    case HttpStatusCode.FORBIDDEN:
      console.log('FORBIDDEN');
      break
    case HttpStatusCode.BADREQUEST:
      console.log('BADREQUEST');
      break
    default:
      console.log('Unknown error occurred, please try again later.');
      break
  }

  return Promise.reject(error_msg)
}

export const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3002'
})

instance.interceptors.response.use(OnResponseSuccess, OnResponseFailure)
