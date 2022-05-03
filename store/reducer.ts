import Storage from "../services/Storage"

import { IAction } from "./action";
import { ActionTypes } from "./action-types";

export const bookMarkStorage = new Storage<any>('bookmark')

export const bookReducer = (storeData: any, action: IAction<any>) => {
  switch(action.type) {
    case ActionTypes.DATA_LOAD:
      const bookmarks = storeData.bookmark
      
      const checkBookMark = action.payload.data.map((book) => {
        const find = bookmarks.find((mark) => mark.id === book.id)

        if (find) {
          return {
            ...book,
            saved: true
          }
        } else {
          return book
        }
      })

      return {
        ...storeData,
        [action.payload.dataType]: checkBookMark,
        [`${action.payload.dataType}_params`]: action.payload.params
      }
    case ActionTypes.LOAD_DATA_LENGTH:
      return {
        ...storeData,
        [`${action.payload.dataType}_total`]: action.payload.total,
        all_books: action.payload.books
      }
    case ActionTypes.DATA_SET_PAGESIZE:
      return {
        ...storeData,
        pageSize: action.payload
      }
    case ActionTypes.SEARCH_BOOKS:
      const dataPayload = action.payload.data
      const searchBookMark = storeData.bookmark

      const filter = storeData.all_books.filter((book) => {
        const byAuthor = Object.values(book.authors).join('').toLowerCase().includes(dataPayload.toLowerCase())
        const byTitle = Object.values(book.title).join('').toLowerCase().includes(dataPayload.toLowerCase())

        return byTitle || byAuthor
      })
      
      const checkBookMarkSearch = filter.map((book) => {
        const find = searchBookMark.find((mark) => mark.id === book.id)

        if (find) {
          return {
            ...book,
            saved: true
          }
        } else {
          return book
        }
      })

      return {
        ...storeData,
        search_data: checkBookMarkSearch
      }
    case ActionTypes.SAVE_BOOKMARK:
      const data = action.payload

      bookMarkStorage.set([ ...storeData.bookmark, data ])

      const getLoadData = storeData.books.findIndex((book) => book.id === data.id)
      storeData.books[getLoadData] = { ...data, saved: true }

      return {
        ...storeData,
        bookmark: [ ...storeData.bookmark, data ]
      }
    case ActionTypes.REMOVE_BOOKMARK:
      const id = action.payload

      const filterById = storeData.bookmark.filter((book) => book.id !== id)

      const getLoadDataRemove = storeData.books.findIndex((book) => book.id === id)
      const getRemoveData = storeData.books.find((book) => book.id === id)
      storeData.books[getLoadDataRemove] = { ...getRemoveData, saved: false }

      const getLoadDataAllBooksRemove = storeData.all_books.findIndex((book) => book.id === id)
      const getRemoveAllBooksData = storeData.all_books.find((book) => book.id === id)
      storeData.books[getLoadDataAllBooksRemove] = { ...getRemoveAllBooksData, saved: false }

      bookMarkStorage.set(filterById)

      return {
        ...storeData,
        bookmark: filterById
      }

    default:
      return storeData || {}
  }
}