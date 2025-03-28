import React, { useState } from "react";
import { addBook } from "../services/bookService";

const BookForm = ({ onBookAdded }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;

    const newBook = await addBook(title);
    if (newBook) {
      onBookAdded();
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Enter book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 m-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
         Add Book
      </button>
    </form>
  );
};

export default BookForm;
