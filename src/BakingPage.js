import React from 'react';
import { Link } from 'react-router-dom';
import './BakingPage.css'; // Create a separate CSS file for styling the gallery
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';




const images = [
  `${process.env.PUBLIC_URL}/baking/image1.jpg`,
  `${process.env.PUBLIC_URL}/baking/image2.jpg`,
  `${process.env.PUBLIC_URL}/baking/image3.JPG`,
  `${process.env.PUBLIC_URL}/baking/image4.jpg`,
  `${process.env.PUBLIC_URL}/baking/image5.jpg`,
  `${process.env.PUBLIC_URL}/baking/image6.JPG`,
  `${process.env.PUBLIC_URL}/baking/image7.jpg`,
  `${process.env.PUBLIC_URL}/baking/image8.jpg`,
  `${process.env.PUBLIC_URL}/baking/image9.jpg`,
  `${process.env.PUBLIC_URL}/baking/image10.jpg`,
  `${process.env.PUBLIC_URL}/baking/image11.JPG`,
  `${process.env.PUBLIC_URL}/baking/image12.jpg`,
];


const BakingPage = () => {
    return (
      <div>
        <div className="return-button">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowCircleLeft} />
          </Link>
        </div>
        <div className="gallery-container">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image} alt={`Baking ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };

export default BakingPage;
