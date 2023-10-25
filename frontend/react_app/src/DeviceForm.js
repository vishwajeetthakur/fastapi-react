// DeviceForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card } from 'react-bootstrap';

function DeviceForm() {
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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:8088/devices/${formData.equip_inst_id}`, formData);
            setResponse(res.data);
        } catch (error) {
            console.error('Error updating device:', error);
        }
    };

    return (
        <Container className="mt-5">
            <Card>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        {Object.keys(formData).map((key) => (
                            <Form.Group key={key} className="mb-3">
                                <Form.Label>{key}</Form.Label>
                                <Form.Control type="text" name={key} value={formData[key]} onChange={handleChange} />
                            </Form.Group>
                        ))}
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                    {response && <pre className="mt-4">{JSON.stringify(response, null, 2)}</pre>}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default DeviceForm;
