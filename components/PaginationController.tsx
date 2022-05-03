import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";

import { Listbox, Transition } from '@headlessui/react'

import { BiSearchAlt } from "react-icons/bi"

import { PaginationButton } from "./PaginationButton";

export type PaginationProps = {
  setPageSize: (value: number) => void,
  pushSizeChange: (value) => void,
  pageSize: number[],
  children: React.ReactNode,
  currentPage: number,
  searchType: any,
  pageCount: number,
  searchHandle: (value) => void,
  categories: any[],
  categoryIdParams: string,
  navigate: (value: number) => void,
  handleCategory: (value: number) => void
}

export const PaginationController: React.FC<PaginationProps> = ({ 
  setPageSize, 
  children,
  pageSize,
  pushSizeChange,
  currentPage,
  pageCount,
  searchHandle,
  navigate,
  searchType,
  categories,
  categoryIdParams,
  handleCategory
}) => {
  const router = useRouter()
  const sizes = [5, 10, 25, 100]
  const [search, setSearch] = useState()

  const handlePageSizeChange = (value) => {
    // const value = Number(e.target.value)
    setPageSize(value)
    pushSizeChange(value)
  }

  const handleSearchOnChange = (e) => {
    setSearch(e.target.value)
  }

  console.log(categoryIdParams);

  return (
    <div className="w-full relative">
      <div className="flex items-center justify-center mb-8">
        <div className="w-max flex">
          {categories?.map((category) => {
            return (
              <div key={category.id}>
                <button className={`${categoryIdParams == category.id ? 'bg-blue-500 border-white text-white font-bold' : 'border-gray-600 border'} px-4 py-2 rounded mx-2`} onClick={() => handleCategory(category.id)}>
                  {category.name}
                </button>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex w-full justify-between mb-8">
        <div className="flex-1">
          <div className={`${searchType ? 'max-w-md mx-auto' : ''} text-gray-500 flex border border-gray-300`}>
            <input defaultValue={searchType ? searchType : ''} onChange={handleSearchOnChange} className="block w-full px-6 py-3 outline-none" type="text" placeholder="Search heree" />
            <button disabled={!search} onClick={() => searchHandle(search)} className="px-4 flex items-center justify-center bg-gray-400 text-white">
              <BiSearchAlt size={30} />
            </button>
          </div>
        </div>
        {!searchType && (
          <div className="flex-1 text-right">
          <Listbox value={pageSize || sizes[0]} onChange={handlePageSizeChange}>
            {({ open }) => (
              <>
                <Listbox.Label className="text-sm font-medium text-gray-500">Select page Size</Listbox.Label>
                <div className="mt-1 relative">
                  <Listbox.Button className="bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm">
                    <span>{pageSize || sizes[0]}</span>
                  </Listbox.Button>

                  <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Listbox.Options className="absolute right-0 z-10 mt-1 w-max bg-white shadow-lg max-h-56 rounded-md p-2 text-base ring-1 ring-gray-600 overflow-auto focus:outline-none">
                      {sizes.map((s: number) => {
                        return (
                          <Listbox.Option
                            className="px-4 py-2 hover:bg-gray-300 rounded-md"
                            key={s}
                            value={s}
                          >
                            {s}
                          </Listbox.Option>
                        )
                      })}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
        )}
      </div>
      <div className="my-16">
        {children}
      </div>
      {!searchType && (
        <div className="w-full flex items-center justify-center">
          <PaginationButton 
            currentPage={currentPage || 1} 
            pageCount={pageCount} 
            navigate={navigate} 
          />
        </div>
      )}
    </div>
  )
}
