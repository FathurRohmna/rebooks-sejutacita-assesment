import React, { useEffect, useState } from "react"

export type Props = {
  pageCount: number,
  currentPage: number,
  navigate: (value: number) => void
}

export const PaginationButton: React.FC<Props> = ({ pageCount, currentPage, navigate }) => {
  const [pageNumbers, setPageNumbers] = useState<any []>([])

  useEffect(() => {
    if (pageCount < 4) {
      const newPage = [...Array(pageCount + 1).keys()].slice(1)

      setPageNumbers(newPage)
    } else if (currentPage <= 4) {
      setPageNumbers([1, 2, 3, 4, 5])
    } else if (currentPage > pageCount - 4) {
      setPageNumbers([...Array(5).keys()].reverse().map(v => pageCount - v))
    } else {
      setPageNumbers([currentPage - 1, currentPage, currentPage + 1])
    }
  }, [pageCount, currentPage])

  return (
    <div>
      <button className="mx-1 my-2 md:my-0 w-full md:w-min px-4 py-2 rounded border border-gray-300 bg-gray-200 text-gray-900" onClick={() => navigate(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <div className="flex items-center justify-center md:inline">
        {currentPage > 4 &&
          <>
            <button className="mx-1 px-3 md:px-4 py-2 rounded border border-gray-300 bg-gray-200 text-gray-900" onClick={() => navigate(1)}>
              1
            </button>
            <span className="mx-1 px-2 md:px-4 py-2 text-gray-900">...</span>
          </>
        }
        {pageNumbers.map((num: number) => {
          return (
            <button className={`${currentPage === num ? 'ring-1 font-bold' : ''} mx-1 px-3 md:px-4 py-2 rounded border border-gray-300 bg-gray-200 text-gray-900`} key={num} onClick={() => navigate(num)}>
              {num}
            </button>
          )
        })}
        {currentPage <= (pageCount - 4) && 
          <>
            <span className="mx-1 px-2 md:px-4 py-2 text-gray-900">...</span>
            <button 
              className={`mx-1 px-3 md:px-4 py-2 rounded border border-gray-300 bg-gray-200 text-gray-900`}
              onClick={() => navigate(pageCount)}
            >
              {pageCount}
            </button>
          </>
        }
      </div>
      <button className="mx-1 w-full my-2 md:my-0 md:w-min px-4 py-2 rounded border border-gray-300 bg-gray-200 text-gray-900" onClick={() => navigate(currentPage + 1)} disabled={currentPage === pageCount}>
        Next
      </button>
    </div>
  )
}
