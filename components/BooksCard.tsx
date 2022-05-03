import Image from "next/image";

import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs";

export const BookCard = ({ image, title, author, section_length, saveBook, savedBook = false, removeBook }) => {
  return (
    <div className="p-2 rounded-lg border border-gray-200 w-min">
      <div>
        <div className="relative w-52">
          <Image
            className="rounded-lg"
            src={image}
            alt="Profile"
            layout="responsive"
            width={60}
            height={60}
          />
        </div>
      </div>
      <div className="flex py-4">
        <div className="flex-1">
          <h4 className="font-bold text-base mb-2">{title}</h4>
          <p>{author}</p>
          <span className="italic font-light text-xs">
            <span className="font-bold">{section_length}</span> Sections
          </span>
        </div>
        <div className="w-1/5 flex justify-center ml-2">
          {savedBook ? (
            <button onClick={removeBook} className="p-2 text-white bg-green-600 h-min rounded">
              <BsBookmarkCheckFill size={20} />
            </button>
          ) : (
            <button onClick={saveBook} className="p-2 bg-gray-200 h-min rounded">
              <BsBookmark size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
