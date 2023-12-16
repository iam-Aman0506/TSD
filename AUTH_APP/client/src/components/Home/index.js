import React, { Component } from 'react';
import { TailSpin } from 'react-loader-spinner';
import NavBar from '../Navbar';
import Footer from '../Footer';
import BookCard from '../BookCard';
import AuthorCard from '../AuthorCard';
import 'index.css';

class Home extends Component {
  state = { userInput: '', bookList: [], authorList: [], isLoading: false };

  getBookList = async () => {
    this.setState({ isLoading: true });

    try {
      const bookResponse = await fetch('/books');
      const bookData = await bookResponse.json();

      if (bookResponse.ok) {
        this.setState({ bookList: bookData });
      } else {
        console.error('Error fetching books:', bookData);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }

    this.setState({ isLoading: false });
  };

  getAuthorList = async () => {
    this.setState({ isLoading: true });

    try {
      const authorResponse = await fetch('/author');
      const authorData = await authorResponse.json();

      if (authorResponse.ok) {
        this.setState({ authorList: authorData });
      } else {
        console.error('Error fetching authors:', authorData);
      }
    } catch (error) {
      console.error('Error fetching authors:', error);
    }

    this.setState({ isLoading: false });
  };

  onChangeCity = (event) => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    const { userInput, bookList, authorList, isLoading } = this.state;

    return (
      <>
        <NavBar />
        <div className='home-bg-container'>
          <div className='input-btn-container'>
            <input
              id='userInput'
              className='input-user'
              type='search'
              value={userInput}
              onChange={this.onChangeCity}
            />
            <button className='search-btn' type='button' onClick={this.getBookList}>
              Search Books
            </button>
            <button className='search-btn' type='button' onClick={this.getAuthorList}>
              Search Authors
            </button>
          </div>
          {isLoading ? (
            <TailSpin />
          ) : (
            <>
              <div className='book-card-container'>
                <h2>Books</h2>
                <ul className='unorder-list-container'>
                  {bookList.map((book) => (
                    <BookCard key={book.book_id} book={book} />
                  ))}
                </ul>
              </div>
              <div className='author-card-container'>
                <h2>Authors</h2>
                <ul className='unorder-list-container'>
                  {authorList.map((author) => (
                    <AuthorCard key={author.author_id} author={author} />
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
