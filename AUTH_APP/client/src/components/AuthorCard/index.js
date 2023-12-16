
import React from 'react';
import 'index.css'; 

const AuthorCard = ({ author }) => {
  const {
    author_id,
    name,
    birth_place,
    birth_date,
    genre,
    followers_count,
    about,
  } = author;

  return (
    <li className='author-cards'>
      <h1 className='author-card-heading'>{name}</h1>
      <p className='author-values'>Author ID: {author_id}</p>
      <p className='author-values'>Birth Place: {birth_place}</p>
      <p className='author-values'>Birth Date: {birth_date}</p>
      <p className='author-values'>Genre: {genre}</p>
      <p className='author-values'>Followers Count: {followers_count}</p>
      <p className='author-values'>About: {about}</p>
    </li>
  );
};

export default AuthorCard;
