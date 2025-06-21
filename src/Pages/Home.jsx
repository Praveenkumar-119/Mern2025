import React from 'react';
import About from './About'
import image from '../assets/image.jpg'
const Home = ({ items,users }) => {
  return (
    <div>
      <h3>Home Page</h3>
      <p>Fruits list:</p>
      <ul>
        {items.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <img src={image} alt="react" width="1000px"  />
    </div>
  );
};

export default Home;
