import React, { useState } from 'react';
import './add.css';
import AdminNav from './AdminNav'

const AddClass = () => {
    const [formData, setFormData] = useState({
        className: '',
        classCode: '',
        description: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');

        try {
            const response = await fetch('/api/classes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to add class');
            }

            const data = await response.json();
            setSuccessMessage(`Class added successfully: ${data.className}`);
            setFormData({ className: '', classCode: '', description: '' });
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <>
        <AdminNav />
        <div className="add">
            <h2>Add New Class</h2>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="className">Class Name:</label>
                    <input
                        type="text"
                        id="className"
                        name="className"
                        value={formData.className}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="classCode">Class Code:</label>
                    <input
                        type="text"
                        id="classCode"
                        name="classCode"
                        value={formData.classCode}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Add Class</button>
            </form>
        </div>
    </>
    );
};

export default AddClass;
