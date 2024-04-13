import React, { useState } from 'react'

function SignIn({ isVisible , hide }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleButtonClick = () => {
        hide();
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        setName('');
        setEmail('');
    };
    return (
        <>
            {
                isVisible && (
                    <div className='Signin'>
                        <svg onClick={handleButtonClick} className='close' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="36px" height="36px"><path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)" /><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)" /></svg>
                        <form onSubmit={handleSubmit}>
                            <label>
                                <input
                                    placeholder='Email'
                                    type="text"
                                    value={name}
                                    onChange={handleNameChange}
                                    required
                                />
                            </label>
                            <br />
                            <label>
                                <input
                                    placeholder='Password'
                                    type="password"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </label>
                            <br />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                )
            }
        </>
    )
}

export default SignIn