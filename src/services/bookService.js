import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Fetch all books
export const fetchBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.slice(0,3); 
  } catch (error) {
    console.error("Error fetching books", error);
    return [];
  }
};

// Add a new book
export const addBook = async (title) => {
  try {
    const response = await axios.post(API_URL, { title, completed: false });
    return response.data;
  } catch (error) {
    console.error("Error adding book", error);
    return null;
  }
};

// Delete a book
export const deleteBook = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting book", error);
  }
};
