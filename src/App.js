import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { useState } from 'react';
import BakingPage from './BakingPage';
import Journal from './Journal';
import './BakingPage.css'; 
import './Journal.css';


function App() {
  const [hoveredWord, setHoveredWord] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null); 
  const text = 'Chris is a software developer and baking enthusiast.\nHe has built solutions at OMERS and Imagine Communications. He also loves to read books on theology and enjoys solving puzzles.';
  
  const images = {
    Chris: process.env.PUBLIC_URL + 'images/chris_eating.JPG',
    OMERS: process.env.PUBLIC_URL + 'images/OMERS.JPG',
    'Imagine Communications.': process.env.PUBLIC_URL + 'images/Imagine.jpg',
    'puzzles.': process.env.PUBLIC_URL + 'images/puzzle.jpg'
  };

  const hoverablePhrases = {
    'Chris': { alt: 'Man standing on a bridge and smiling', link: 'https://read.cv/chrislew'},
    'OMERS': { alt: 'Office Kitchen with fruits and snacks', link: 'https://www.omers.com/'},
    'Imagine Communications.': { alt: 'Screenshot of Imagine Aviators software tool', link: 'https://imaginecommunications.com/make-tv/products/playout-and-channel-origination/imagine-aviator/'},
    'puzzles.': {alt: 'A half finished puzzle', link: 'https://github.com/chrislkl/minigames'}
  };

  const handleMouseEnter = (word) => {
    //console.log('Hovered:', word);
    setHoveredWord(word);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const id = setTimeout(() => {
      setShowImage(true); 
    }, 100); 
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    //console.log('Left');
    setShowImage(false);
    setHoveredWord(null);
    
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const renderTextWithHover = (text) => {
    const words = text.split(' ');
  let i = 0;
  const elements = [];

  while (i < words.length) {
    const currentWord = words[i];
    const nextWord = i + 1 < words.length ? words[i + 1] : '';
    const twoWordsPhrase = `${currentWord} ${nextWord}`;
    
    const phraseInfo = hoverablePhrases[twoWordsPhrase] || hoverablePhrases[currentWord];

    if (phraseInfo) {
      const phrase = hoverablePhrases[twoWordsPhrase] ? twoWordsPhrase : currentWord;
      const span = (
        <span
          className="italic-word"
          onMouseEnter={() => handleMouseEnter(phrase)}
          onMouseLeave={handleMouseLeave}
          key={i}
        >
          {phrase}
        </span>
      );

      elements.push(
        phraseInfo.link ? (
          <a href={phraseInfo.link} key={`link-${i}`} target="_blank" rel="noopener noreferrer">
            {span}
          </a>
        ) : span
      );

      i += hoverablePhrases[twoWordsPhrase] ? 2 : 1;
    } else {
      elements.push(currentWord);
      i += 1;
    }

    if (i < words.length) {
      elements.push(' ');
    }
  }

  return elements;
};

  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Routes>
            <Route path="/" element={
              <div className="intro-section">
                <div className="text-container">
                  {text.split('\n').map((line, index) => (
                    <p key={index}>{renderTextWithHover(line)}</p>
                  ))}
                  <div className="footer-bar">
                    <a href="mailto:christopher.lew916@gmail.com">Email</a>
                    <a href="https://read.cv/chrislew" target="_blank">Portfolio</a>
                    <Link to="/journal">Things I've Learned</Link>
                    <Link to="/baking">Baking</Link>
                  </div>
                </div>
                <div className="image-container">
                  {!showImage && (<img src={process.env.PUBLIC_URL + 'images/christopher_lew_image.jpg'} alt={"Me"} />)}
                  {showImage && images[hoveredWord] && (
                    <img src={images[hoveredWord]} alt={hoveredWord} />
                  )}
                </div>
              </div>
            } />
            <Route path="/baking" element={<BakingPage />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
