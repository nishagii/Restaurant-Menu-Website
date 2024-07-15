import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        // Basic email validation with a regular expression
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleNameChange = (event) => {
        const { value } = event.target;
        setName(value);
        if (value.length < 3) {
            setNameError('Name should be at least 3 characters');
        } else {
            setNameError('');
        }
    };

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
        if (!validateEmail(value)) {
            setEmailError('Please enter a valid email');
        } else {
            setEmailError('');
        }
    };

    const handleContactNumberChange = (event) => {
        const { value } = event.target;
        setContactNumber(value);
        // You can add validation for contact number if needed
    };

    return (
        <div className="forms">
            <form action="" className="form-labels">
                <label htmlFor="name">Enter your name : </label>
                <br />
                <input
                    className="box"
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleNameChange}
                    onBlur={handleNameChange} // Validate on blur
                />
                {nameError && <span className="error">{nameError}</span>}
                <br />
                <br />
                <label htmlFor="email">Enter your Email : </label>
                <br />
                <input
                    className="box"
                    type="text"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailChange} // Validate on blur
                />
                {emailError && <span className="error">{emailError}</span>}
                <br />
                <br />
                <label htmlFor="contactNumber">Enter your Contact Number : </label>
                <br />
                <input
                    className="box"
                    type="text"
                    id="contactNumber"
                    placeholder="Enter your contact number"
                    value={contactNumber}
                    onChange={handleContactNumberChange}
                />
                <br />
                <br />
                <label htmlFor="contactNumber">Enter toy details : </label>
                <br />
                <input
                    className="box"
                    type='text'
                    id="contactNumber"
                    placeholder="Description"
                    value={contactNumber}
                    onChange={handleContactNumberChange}
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>

            <div className="details">
                <p>
                    John Doe, <br />
                    Head of Client Relations, <br />
                    njdToys PVT.LTD, <br />
                    1234 Elm Street, <br />
                    Suite 567 Springfield, <br />
                    IL 62701 USA
                    <br />
                    <br />
                    Telephone : +1 (555) 123-4567 <br />
                    E-mail : <a href="mailto:johndoe@xyzlegal.com">johndoe@xyzlegal.com</a> <br />
                </p>
            </div>
        </div>
    );
};

export default Contact;
