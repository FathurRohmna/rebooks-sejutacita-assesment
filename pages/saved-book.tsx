import { useSelector, useDispatch } from "react-redux";

import { BookCard } from "../components/BooksCard";
import { State } from "../store";
import { removeBookMark, saveBookMark } from "../store/action";

export default function SavedBooks() {
  const booksState = useSelector((state: State) => state.books);
  const dispatch = useDispatch();

  return (
    <div className="relative block overflow-x-hidden">
      <div className="relative z-1 mt-12 px-6 sm:py-6 md:pb-20 mx-auto md:w-11/12 lg:max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-8">Saved Books</h1>
        <div className="flex gap-8 flex-wrap mx-auto justify-center">
          {booksState?.bookmark?.map((book) => {
            return (
              <div key={book.id}>
                <BookCard
                  id={book.id}
                  title={book.title}
                  author={book.authors[0]}
                  section_length={book.sections.length}
                  savedBook={true}
                  removeBook={() => dispatch(removeBookMark(book.id))}
                  image={book.cover_url}
                  saveBook={() => dispatch(saveBookMark(book))}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
