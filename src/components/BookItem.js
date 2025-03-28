import React from "react";

const BookItem = ({ book, onDelete }) => {
  return (
    <li className="border p-2 flex justify-between">
      {book.title}
      <button onClick={() => onDelete(book.id)} className="bg-red-500 text-white p-1">
         Delete
      </button>
    </li>
  );
};

export default BookItem;
