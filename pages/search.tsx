import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { BeatLoader } from "react-spinners";

import {
  PaginationController
} from "../components/PaginationController";

import { BookCard } from "../components/BooksCard";

import {
  setPageSize,
  loadFetchData,
  loadDataLengthPerCategory,
  searchBooks,
  saveBookMark,
} from "../store/action";
import { GetData } from "../hook/useGetData";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../store";
import { DataTypes } from "../store/data-types";

const Search = (props) => {
  const router = useRouter();
  const currentPage = router.query.page;
  const categoryId = router.query.categoryId;
  const sizes = router.query.size;
  const search = router.query.search;

  const routerState = useSelector((state: State) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if ((!currentPage && !categoryId) || (!categoryId && !search)) {
      router.push("/search?categoryId=11&page=1&size=5");
    }
    dispatch(loadFetchData(DataTypes.CATEGORIES))
  }, []);

  useEffect(() => {
    if (search && routerState.all_books) {
      dispatch(searchBooks(search))
    }
  }, [routerState.all_books])

  return (
    <GetData
      category={categoryId}
      pageSize={currentPage}
      searchType={search}
      size={sizes}
      loadData={(types, params) => dispatch(loadFetchData(types, params))}
      books_params={routerState.books_params}
      loadCategoryDataLength={(type) =>
        dispatch(loadDataLengthPerCategory(type, categoryId))
      }
    >
      <div className="relative z-1 mt-12 py-20 px-6 sm:py-6 md:pb-20 mx-auto md:w-11/12 lg:max-w-7xl">
        <PaginationController
          pageCount={Math.ceil(
            (routerState.books_total | routerState.pageSize || 5) /
              (routerState.pageSize || 5)
          )}
          currentPage={Number(currentPage)}
          setPageSize={(value: number) => dispatch(setPageSize(value))}
          searchType={search}
          categories={routerState.categories}
          categoryIdParams={categoryId}
          handleCategory={(value) => 
            router.push(
              `/search?categoryId=${value || 11}&page=${Number(
                currentPage
              ) || 1}&size=${routerState.pageSize || 5}`,
              undefined,
              { shallow: true }
            )
          }
          pushSizeChange={(value) =>
            router.push(
              `/search?categoryId=${categoryId || 11}&page=${Number(
                currentPage
              ) || 1}&size=${value || 5}`,
              undefined,
              { shallow: true }
            )
          }
          searchHandle={(value) => {
            dispatch(searchBooks(value))
            router.push(
              `/search?categoryId=${categoryId || 11}&search=${value}`,
              undefined,
              { shallow: true }
            )
          }}
          pageSize={sizes}
          navigate={(page) =>
            router.push(
              `/search?categoryId=${categoryId || 11}&page=${page}&size=${
                routerState.pageSize || 5
              }`,
              undefined,
              { shallow: true }
            )
          }
        >
          {search ? (
            <div className="relative z-1 mt-12 py-20 px-6 sm:py-6 md:pb-20 mx-auto md:w-11/12 lg:max-w-7xl">
              <div className="flex gap-8 flex-wrap mx-auto justify-center">
                {routerState.search_data?.map((book) => {
                  return (
                    <div key={book.id}>
                      <BookCard
                        title={book.title}
                        author={book.authors[0]}
                        section_length={book.sections.length}
                        image={book.cover_url}
                        saveBook={() => dispatch(saveBookMark(book))}
                        savedBook={(book.saved)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="flex gap-8 flex-wrap mx-auto justify-center">
              {routerState.books ? (
                routerState.books.map((book) => {
                  return (
                    <div key={book.id}>
                      <BookCard
                        title={book.title}
                        author={book.authors[0]}
                        section_length={book.sections.length}
                        image={book.cover_url}
                        saveBook={() => dispatch(saveBookMark(book))}
                        savedBook={book.saved}
                      />
                    </div>
                  );
                })
              ) : (
                <div className="flex items-center justify-center my-16">
                  <BeatLoader loading={true} size={20} />
                </div>
              )}
            </div>
          )}
        </PaginationController>
      </div>
    </GetData>
  );
};

export default Search;

Search.getInitialProps = (ctx) => {
  return {};
};
