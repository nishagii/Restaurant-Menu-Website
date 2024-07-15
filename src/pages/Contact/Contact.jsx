import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className="form">
            <form action="" className="form-labels">
                <label htmlFor="name">Enter your name : </label>
                <br />
                <input
                    className="box"
                    type="text"
                    id="name"
                    placeholder=" Enter your name"
                />
                <br />
                <br />
                <label htmlFor="name">Enter your Email : </label>
                <br />
                <input
                    className="box"
                    type="text"
                    id="email"
                    placeholder=" Enter your email"
                />
                <br />
                <br />
                <label htmlFor="name">Enter your Contact Number : </label>
                <br />
                <input
                    className="box"
                    type="text"
                    id="name"
                    placeholder=" Enter your contact number"
                />
                <br />
                <br />
            </form>

            <p className="details">
                John Doe, <br /> Head of Client Relations, <br />
                ToyMe PVT.LTD,
                <br /> 1234 Elm Street,
                <br /> Suite 567 Springfield,<br /> IL 62701 USA <br /> <br />
                +1 (555) 123-4567 <br />
                <a href="johndoe@xyzlegal.com <br />">
                    johndoe@xyzlegal.com <br />
                </a>
            </p>
        </div>
    );
}

export default Contact;
