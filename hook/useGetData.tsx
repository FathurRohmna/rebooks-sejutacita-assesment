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

      console.log(rtData);

      console.log("Load data herre", props, Object.keys(rtData).find(key => dsData[key] !== rtData[key]))

      if (Object.keys(rtData).find(key => dsData[key] !== rtData[key])) {
        props.loadData(DataTypes.BOOKS, rtData)
      }
    }
  }, [props.pageSize, props.size, props.category])

  useEffect(() => {
    console.log('load all data');
    props.loadCategoryDataLength(DataTypes.BOOKS)
  }, [props.category])

  return (
    <>
      {props.children}
    </>
  )

  
}