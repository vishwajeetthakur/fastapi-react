import React from 'react';
import DeviceCard from './DeviceCard';

function MiddlePanel({ inputValue, setInputValue, handleGetDeviceClick, showCard, loading, error, deviceData }) {
    return (
        <div className="middle-panel">
            <div className="input-button-container">
                <input
                    type="text"
                    placeholder="Enter device value"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleGetDeviceClick}>Get Device</button>
            </div>
            {showCard && <DeviceCard loading={loading} error={error} deviceData={deviceData} />}
        </div>
    );
}

export default MiddlePanel;
