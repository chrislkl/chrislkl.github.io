import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Add this import
import { useState } from 'react';
import Header from './Header';
import BakingPage from './BakingPage';
import './BakingPage.css'; 


function App() {
  const [hoveredWord, setHoveredWord] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null); // Store timeout ID
  const text = 'Chris is a software developer and baking enthusiast.\nHe loves playing Minecraft and dabbing on his haters. Sometimes he walks in parks and talks to the local geese.';
  
  const images = {
    Minecraft: '/root/chris-lew-website/src/test.jpg'
  };

  const hoverablePhrases = {
    'Chris': 'test',
    'Minecraft': 'test',
    'dabbing': 'test'
  };

  const handleMouseEnter = (word) => {
    setHoveredWord(word);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const id = setTimeout(() => {
      setShowImage(true); // Show image after delay
    }, 5000); // 500 ms delay (change as needed)
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    setShowImage(false);
    setHoveredWord(null);
    
    // Clear any existing timeout when leaving
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

      if (hoverablePhrases[twoWordsPhrase]) {
        elements.push(
          <span
            className="italic-word"
            onMouseEnter={() => handleMouseEnter(twoWordsPhrase)}
            onMouseLeave={handleMouseLeave}
            key={i}
          >
            {twoWordsPhrase}
          </span>
        );
        i += 2; // Skip the next word as it's part of the current phrase
      } else if (hoverablePhrases[currentWord]) {
        elements.push(
          <span
            className="italic-word"
            onMouseEnter={() => handleMouseEnter(currentWord)}
            onMouseLeave={handleMouseLeave}
            key={i}
          >
            {currentWord}
          </span>
        );
        i += 1;
      } else {
        elements.push(currentWord);
        i += 1;
      }

      if (i < words.length) {
        elements.push(' '); // Add space between words
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
              <>
                <div className="text-container">
                  {text.split('\n').map((line, index) => (
                    <p key={index}>
                      {renderTextWithHover(line)}
                      <br />
                    </p>
                  ))}
                  <div className="footer-bar">
                    <a href="mailto:christopher.lew916@gmail.com">Email</a>
                    <a href="https://read.cv/chrislew" target="_blank">Read.cv</a>
                    <Link to="/blogothy">Blogothy</Link>
                    <Link to="/baking">Baking</Link>
                  </div>
                </div>
                <div className="image-container">
                  {showImage && images[hoveredWord] && (
                    <img src={images[hoveredWord]} alt={hoveredWord} />
                  )}
                </div>
              </>
            } />
            <Route path="/baking" element={<BakingPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
