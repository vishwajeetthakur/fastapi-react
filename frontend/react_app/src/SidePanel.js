import React from 'react';
import { Link } from 'react-router-dom';

function SidePanel({ showButtons, toggleButtons }) {
    return (
        <div className="left-panel">
            <button onClick={toggleButtons} className="hamburger-btn">
                ☰
            </button>
            {showButtons && (
                <div className="button-container">
                    
                    <Link to="/form">
                        <button className="side-panel-button">Page 1</button>
                    </Link>
                </div>
            )}
        </div>
    );
}
export default SidePanel;
