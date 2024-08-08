import React from 'react';
import { Link } from 'react-router-dom';
import './BakingPage.css'; // Create a separate CSS file for styling the gallery
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import ImageLayout from 'react-image-layout';




const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../public/images/baking', false, /\.(png|jpe?g|svg|JPG)$/));


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
