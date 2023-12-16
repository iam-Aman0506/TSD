import React from 'react';
import 'index.css'; 
const BookCard = ({ book }) => {
  const {
    book_id,
    title,
    author_id,
    rating,
    rating_count,
    review_count,
    description,
    pages,
    date_of_publication,
    edition_language,
    price,
    online_stores,
  } = book;

  return (
    <li className='book-cards'>
      <h1 className='book-card-heading'>{title}</h1>
      <p className='book-values'>Author ID: {author_id}</p>
      <p className='book-values'>Rating: {rating}</p>
      <p className='book-values'>Rating Count: {rating_count}</p>
      <p className='book-values'>Review Count: {review_count}</p>
      <p className='book-values'>Description: {description}</p>
      <p className='book-values'>Pages: {pages}</p>
      <p className='book-values'>Publication Date: {date_of_publication}</p>
      <p className='book-values'>Edition Language: {edition_language}</p>
      <p className='book-values'>Price: {price}</p>
      <p className='book-values'>Online Stores: {online_stores}</p>
    </li>
  );
};

export default BookCard;
