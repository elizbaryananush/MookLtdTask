import React, { useEffect, useState } from 'react'
import image from '../assets/images.jpg'
import SignIn from './SignIn';
import AddPhoto from './AddPhoto';

function Main() {
    const [isVisible, setIsVisible] = useState(false);
    const [left, setLeft] = useState('375px')

    const hide = () => {
        setIsVisible(false)
    }

    const handleImageClick = () => {
        setLeft('0px')
    };

    const hideAddPhoto = () => {
        setLeft('375px')
    };

    return (
        <div className='Main' style={left === '0px' ? { maxHeight: '811px', overflow: 'hidden' } : null}>
            <AddPhoto left={left} hide={hideAddPhoto} />
            {isVisible && <SignIn isVisible={isVisible} hide={hide} />}
            <div className="main">
                <div className="Navbar">
                    <h1>OneAI</h1>
                    <button onClick={() => setIsVisible(true)}>Sign in</button>
                </div>
                <div className="items">
                    <div onClick={handleImageClick} className="item">
                        <img src={image} alt="girlPhoto" />
                        <h1>Lego</h1>
                    </div>
                    <div onClick={handleImageClick} className="item">
                        <img src={image} alt="girlPhoto" />
                        <h1>Lego</h1>
                    </div>
                </div>
                <footer>
                    <p>Get help at support@avgen.me</p>
                    <p>Copyright © 2024 Mook Ltd. All rights reserved.</p>
                </footer>
            </div>
        </div>
    )
}

export default Main