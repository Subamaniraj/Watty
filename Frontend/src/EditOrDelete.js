import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EditOrDelete.css';

const EditOrDelete = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [updatedBook, setUpdatedBook] = useState({
    bookName: '',
    author: '',
    genre: '',
    language: '',
    publicationdate: '',
    noofchapters: '',
    rating: ''
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/novel/get'); // Replace with your Spring Boot API endpoint
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:8080/api/novel/${bookId}`); // Replace with your Spring Boot API endpoint
      fetchBooks();
      setSelectedBook(null);
      toast.success('Book deleted successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const openUpdatePopup = (book) => {
    setSelectedBook(book);
    setUpdatedBook(book);
  };

  const updateBook = async () => {
    try {
      await axios.put(`http://localhost:8080/api/novel/${selectedBook.id}`, updatedBook); // Replace with your Spring Boot API endpoint
      fetchBooks();
      setSelectedBook(null);
      toast.success('Book updated successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const deleteSelectedBook = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/novel/${selectedBook.id}`); // Replace with your Spring Boot API endpoint
      fetchBooks();
      setSelectedBook(null);
      toast.success('Book deleted successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="edit-or-delete-container">
      <h1>Manage Novels</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Language</th>
            <th>Publication Date</th>
            <th>No. of Chapters</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.bookName}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.language}</td>
              <td>{book.publicationdate}</td>
              <td>{book.noofchapters}</td>
              <td>{book.rating}</td>
              <td>
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => openUpdatePopup(book)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Popup */}
      {selectedBook && (
        <div className="popup">
          <div className="popup-content">
            <h2>Update Book</h2>
            <input
              type="text"
              value={updatedBook.bookName}
              onChange={(e) =>
                setUpdatedBook({ ...updatedBook, bookName: e.target.value })
              }
              placeholder="Book Name"
            />
            <input
              type="text"
              value={updatedBook.author}
              onChange={(e) =>
                setUpdatedBook({ ...updatedBook, author: e.target.value })
              }
              placeholder="Author"
            />
            <input
              type="text"
              value={updatedBook.genre}
              onChange={(e) =>
                setUpdatedBook({ ...updatedBook, genre: e.target.value })
              }
              placeholder="Genre"
            />
            <input
              type="text"
              value={updatedBook.language}
              onChange={(e) =>
                setUpdatedBook({ ...updatedBook, language: e.target.value })
              }
              placeholder="Language"
            />
            <input
              type="text"
              value={updatedBook.publicationdate}
              onChange={(e) =>
                setUpdatedBook({ ...updatedBook, publicationdate: e.target.value })
              }
              placeholder="Publication Date"
            />
            <input
              type="text"
              value={updatedBook.noofchapters}
              onChange={(e) =>
                setUpdatedBook({ ...updatedBook, noofchapters: e.target.value })
              }
              placeholder="No. of Chapters"
            />
            <input
              type="text"
              value={updatedBook.rating}
              onChange={(e) =>
                setUpdatedBook({ ...updatedBook, rating: e.target.value })
              }
              placeholder="Rating"
            />
            <button className="btn btn-success" onClick={updateBook}>
              Update
            </button>
            <button
              className="btn btn-danger"
              onClick={deleteSelectedBook}
            >
              Delete
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setSelectedBook(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <ToastContainer /> {/* Toast container for displaying toast notifications */}
    </div>
  );
};

export default EditOrDelete;
