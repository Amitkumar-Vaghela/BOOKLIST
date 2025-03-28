import React, { useEffect, useState } from "react";
import { fetchBooks, deleteBook } from "../services/bookService";
import BookForm from "./BookForm";
import BookItem from "./BookItem";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const data = await fetchBooks();
    setBooks(data);
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleBookAdded = () => {
    loadBooks();
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-extrabold text-white bg-gradient-to-r from-purple-500 to-blue-500 
px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
  📚 BOOKLIST 📖
</h1>

      <BookForm onBookAdded={handleBookAdded} />
      <ul className="mt-5">
        {books.map((book) => (
          <BookItem key={book.id} book={book} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
