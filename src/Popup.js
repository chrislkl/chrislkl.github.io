import React, { useRef, useEffect } from 'react';
import './Popup.css';

const Popup = ({ onClose, children }) => {
    const popupRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="popup-overlay">
            <div className="popup-content" ref={popupRef}>
                {children}
                <button className="close-button" onClick={onClose}>
                    X
                </button>
            </div>
        </div>
    );
};

export default Popup;
