import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const Card = ({ imageUrl, title, description, link }) => {
  return (
    
    <Link to={link} className="block w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-auto" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="font-bold text-lg text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
