
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './app.css';
import Header from './Header';
import SidePanel from './SidePanel';
import MiddlePanel from './MiddlePanel';
import DeviceForm from './DeviceForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageOne from './PageOne'; 

function App() {
    const [showButtons, setShowButtons] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [deviceData, setDeviceData] = useState(null);
    const [error, setError] = useState(null);
    const [showCard, setShowCard] = useState(false);
    const [loading, setLoading] = useState(false);

    const isMounted = useRef(true);

    const toggleButtons = () => {
        setShowButtons(prevState => !prevState);
    };

    const handleGetDeviceClick = async () => {
        if (!inputValue) {
            setError('Please enter a device value');
            setDeviceData(null);
            setShowCard(true);
            return;
        }

        setLoading(true); 

        try {
            setError(null);
            const response = await axios.get(`http://localhost:8088/devices/${inputValue}`);
            if (isMounted.current) {
                setDeviceData(response.data);
            }
        } catch (err) {
            if (isMounted.current) {
                console.error('Error fetching device data:', err);
                setDeviceData(null);
                setError('Device not found');
            }
        } finally {
            setLoading(false);
            setShowCard(true);
        }
    };

    useEffect(() => {
        let cancelTokenSource = axios.CancelToken.source();

        return () => {
            cancelTokenSource.cancel('Component unmounted');
            isMounted.current = false;
        };
    }, []);

   
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <div className="App-content">
                    <SidePanel showButtons={showButtons} toggleButtons={toggleButtons} />
                    <Routes>
                        <Route path="/" element={<MiddlePanel
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                            handleGetDeviceClick={handleGetDeviceClick}
                            showCard={showCard}
                            loading={loading}
                            error={error}
                            deviceData={deviceData}
                        />} />
                        <Route path="/form" element={<PageOne />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
