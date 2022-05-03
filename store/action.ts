import { GetBooksLength, GetData } from './../services/BookApiService';
import { Action } from "redux"
import { data as phData } from "../data/dummy"
import { ActionTypes } from "./action-types"
import { DataTypes } from "./data-types"

export interface IAction<T> extends Action<string> {
  type: string
  payload?: T
}

interface PayloadLoadData {
  dataType: DataTypes
  data: any
  total: number
  params: string
}

export const loadData = (response, dataType, params) => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    dataType: dataType,
    data: response.data,
    params
  }
})

export const lengthPerCategory = (dataType, data) => ({
  type: ActionTypes.LOAD_DATA_LENGTH,
  payload: {
    total: data.length,
    books: data.books,
    dataType
  }
})

export const searchBooks = (data) => ({
  type: ActionTypes.SEARCH_BOOKS,
  payload: {
    data: data
  }
})

export const saveBookMark = (data) => ({
  type: ActionTypes.SAVE_BOOKMARK,
  payload: data
})

export const removeBookMark = (id) => ({
  type: ActionTypes.REMOVE_BOOKMARK,
  payload: id
})

export function loadFetchData(dataType: DataTypes, params) {
  return function (dispatch) {
    return GetData(dataType, params).then(response => dispatch(loadData(response, dataType, params)))
  }
}

export function loadDataLengthPerCategory(dataType, categoryId) {
  return function(dispatch) {
    return GetBooksLength(categoryId).then(response => dispatch(lengthPerCategory(dataType, response.data)))
  }
}

export const setPageSize = (size: number): IAction<number> => ({
  type: ActionTypes.DATA_SET_PAGESIZE,
  payload: size
})
