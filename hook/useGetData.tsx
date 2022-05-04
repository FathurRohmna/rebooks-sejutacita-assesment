import axios from 'axios'
import { useEffect } from 'react'
import { DataTypes } from '../store/data-types'

export const GetData = (props) => {

  useEffect(() => {
    if (!props.searchType) {
      const dsData = props.books_params || {}
      const rtData = {
        categoryId: props.category,
        page: props.pageSize,
        size: props.size
      } 
      
      if (Object.keys(rtData).find(key => dsData[key] !== rtData[key])) {
        props.loadData(DataTypes.BOOKS, rtData)
      }
    }
  }, [props.pageSize, props.size, props.category])

  useEffect(() => {
    if (props.category) {
      props.loadCategoryDataLength(DataTypes.BOOKS)
    }
  }, [props.category])

  return (
    <>
      {props.children}
    </>
  )

  
}