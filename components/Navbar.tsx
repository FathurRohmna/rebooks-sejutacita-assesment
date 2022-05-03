import Link from 'next/link'

import { BsBookmarkCheckFill } from "react-icons/bs"
import { BiBookReader } from "react-icons/bi"

export function Navbar() {
  return (
    <div className="relative bg-white mb-4 z-10 w-full border-b border-gray-100">
      <div className="relative py-4 px-6 sm:px-6 lg:px-8 bg-white">
        <div className="relative flex max-w-6xl mx-auto flex-grow-0 items-center justify-between sm:h-10">
          <Link href="/">
            <a className='font-extrabold text-blue-500 text-2xl'>ReB<span className='text-gray-600'>oo</span>ks.</a>
          </Link>
          <div className='flex items-center'>
            <Link href="/search">
              <a className="flex items-center px-4 py-2 transition duration-150 mx-1 rounded hover:shadow-md">
                <span className='mr-2 text-gray-600 font-semibold'>Books </span>
                <div className='p-2 bg-yellow-600 rounded text-white'>
                  <BiBookReader size={15} />
                </div>
              </a>
            </Link>
            <Link href="/saved-book">
              <a className="flex items-center px-4 py-2 transition duration-150 mx-1 rounded hover:shadow-md">
                <span className='mr-2 text-gray-600 font-semibold'>Saved </span>
                <div className='p-2 bg-green-600 rounded text-white'>
                  <BsBookmarkCheckFill size={10} />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}