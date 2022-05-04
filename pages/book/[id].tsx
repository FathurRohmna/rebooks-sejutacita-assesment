import { useEffect } from 'react'

import { useRouter } from "next/router"
import Image from "next/image"
import { useSelector, useDispatch } from "react-redux"

import { State } from "../../store"

const GetBookById = () => {
  const router = useRouter();
  const bookId = router.query.id;

  const getBookById = useSelector((state: State) => {
    const getByPage = state.books?.books?.filter((book) => book.id == bookId)
    const getByAllData = state.books?.all_books?.filter((book) => book.id == bookId)
    const getByStorage = state.books?.bookmark?.filter((book) => book.id == bookId)

    return getByPage || getByAllData || getByStorage
  })

  console.log(getBookById);

  if (getBookById[0]?.title) {
    return (
      <div className="bg-white relative w-full">
        <div className="relative block overflow-x-hidden">
          <div className="relative z-1 mt-12 py-6 md:py-20 px-6 sm:py-6 md:pb-20 mx-auto md:w-11/12 lg:max-w-7xl">
            <div className="text-gray-500 lg:flex lg:flex-row w-full relative">
              <div className="w-full md:flex-1 lg:px-8 mb-8 md:mb-0">
                <div className="relative w-full">
                  <Image
                    className="rounded-lg"
                    src={getBookById[0]?.cover_url}
                    alt="Profile"
                    layout="responsive"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
              <div className="w-full md:flex-1">
                <h1 className="text-3xl font-bold">{getBookById[0]?.title}</h1>
                <span>{getBookById[0]?.authors[0]} | {getBookById[0]?.audio_length} Audio Length</span>
                <p className='my-8'>
                  {getBookById[0]?.description}
                </p>

                {
                  getBookById[0]?.sections?.map((section, index) => {
                    return (
                      <div key={index} className="my-4">
                        <h3 className="font-bold mb-2">{section.title}</h3>
                        <p>{section.content}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <h1>Not Found</h1>
    )
  }
}

export default GetBookById

GetBookById.getInitialProps = (ctx) => {
  return {};
};
