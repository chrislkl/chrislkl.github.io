import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Popup from './Popup'; // Import the Popup component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './Journal.css';
import file1 from './JournalEntries/1.txt';
import file2 from './JournalEntries/2.txt';
import file3 from './JournalEntries/3.txt';

const textFiles = { 1: file1, 2: file2, 3: file3 };

const entries = [
    { id: 1, title: "new baking techniques"},
    { id: 2, title: "what is devops?" },
    { id: 3, title: "university fellowships" },
];

const Journal = () => {
    const [selectedEntry, setSelectedEntry] = useState(null);
    const [content, setContent] = useState({});

    useEffect(() => {
        const loadContent = async () => {
            const loadedContent = {};
            for (const [id, url] of Object.entries(textFiles)) {
                const response = await fetch(url);
                const text = await response.text();
                loadedContent[id] = text;
            }
            console.log("Loaded content:", loadedContent); // Verify content
            setContent(loadedContent);
        };
        loadContent();
    }, []);

    const openPopup = (entry) => {
        setSelectedEntry({
            ...entry,
            content: content[entry.id], // Attach the corresponding text content
        });
    };

    const closePopup = () => {
        setSelectedEntry(null);
    };

    return (
        <div>
            <div className="journal-container">
                <div className="return-button">
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowCircleLeft} />
                    </Link>
                </div>
                <div className="journal-titles">
                    {entries.map((entry) => (
                        <button
                            key={entry.id}
                            className="journal-link"
                            onClick={() => openPopup(entry)}
                        >
                            {entry.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Popup for journal entry */}
            {selectedEntry && (
                <Popup onClose={closePopup}>
                    <h2>{selectedEntry.title}</h2>
                    <p>{selectedEntry.content}</p>
                </Popup>
            )}
        </div>
    );
};

export default Journal;
