import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function PageOne() {
    const [formData, setFormData] = useState({
        equip_inst_id: 0,
        status: "",
        category: "",
        vendor: "",
        model: "",
        sanitize_model_id: 0,
        description: "",
        shelf: "",
        hostname: "",
        ip_address_v4: "",
        netmask_v4: "",
        ip_address_v6: "",
        netmask_v6: ""
    });
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await axios.post('http://localhost:8088/devices/', formData); // axios.post('http://localhost:8088/devices', data)

            setResponse(result.data);
            setError(null);
        } catch (err) {
            console.error(err);  
            const errorString = String(err)
            setError(errorString);
            setResponse(null);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Device Form heading</h5>
                    <form onSubmit={handleSubmit}>
                        {Object.keys(formData).map((key, index) => (
                            <div key={index} className="mb-3 d-flex align-items-center">
                                <label className="form-label me-2">
                                    {key.replace(/_/g, ' ').charAt(0).toUpperCase() + key.replace(/_/g, ' ').slice(1)}:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name={key}
                                    value={formData[key]}
                                    onChange={handleChange}
                                    style={{flexGrow: 1}}
                                />
                            </div>
                        ))}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    {response && (
                        <div className="mt-5">
                            <h5>Response:</h5>
                            <pre>{JSON.stringify(response, null, 2)}</pre>
                        </div>
                    )}
                    {error && (
                        <div className="mt-3 alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PageOne;
