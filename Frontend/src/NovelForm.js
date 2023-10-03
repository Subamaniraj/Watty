import React, { useState } from 'react';
import axios from 'axios';
import './NovelForm.css';
import { Link, useNavigate } from 'react-router-dom';

const NovelForm = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [language, setLanguage] = useState('');
  const [publicationdate, setPublicationdate] = useState('');
  const [noofchapters, setNoofchapters] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform attribute validation here
    if (!id || !bookName || !author || !genre || !language || !publicationdate || !noofchapters || !rating) {
      setError('Please fill in all fields');
      return;
    }

    const novelData = {
      id,
      bookName,
      author,
      genre,
      language,
      publicationdate,
      noofchapters,
      rating,
    };

    try {
      await axios.post('http://localhost:8080/api/novel/', novelData);
      // Handle success and navigate to the next page
      console.log(novelData);
      navigate('/explore');
    } catch (error) {
      // Handle error
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="novel-form-container">
      <h1>Add a Novel</h1>
      {error && <p className="error-message">{error}</p>}
      <form className="novel-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookId">Book ID:</label>
          <input type="text" id="bookId" value={id} onChange={(e) => setId(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="bookName">Book Name:</label>
          <input type="text" id="bookName" value={bookName} onChange={(e) => setBookName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input type="text" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <input type="text" id="language" value={language} onChange={(e) => setLanguage(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="publicationDate">Publication Date:</label>
          <input type="text" id="publicationDate" value={publicationdate} onChange={(e) => setPublicationdate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="noOfChapters">No. of Chapters:</label>
          <input type="text" id="noOfChapters" value={noofchapters} onChange={(e) => setNoofchapters(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input type="text" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
        </div>
          <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default NovelForm;
