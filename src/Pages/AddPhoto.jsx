import React from 'react'
import image1 from '../assets/images.jpg'
import image2 from '../assets/image2.png'

function AddPhoto({ left , hide }) {
    return (
        <div className='AddPhoto' id='AddPHoto' style={{ left: left }}>
            <button onClick={hide}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="30"><path d="M10.6,12.71a1,1,0,0,1,0-1.42l4.59-4.58a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L9.19,9.88a3,3,0,0,0,0,4.24l4.59,4.59a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z" /></svg>
                <p>Go back</p>
            </button>
            <div className="imageDiv">
                <div className="img1">
                    <img src={image1} alt="image1" />
                </div>
            </div>
            <div className="addPhotoSection">
                <div onClick={() => {
                    window.location.href = '/photo'
                }} className="section1">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" height="76" viewBox="0 0 24 24" width="76" data-name="Layer 1"><path d="m19 0h-6a5.006 5.006 0 0 0 -5 5v.1a5.009 5.009 0 0 0 -4 4.9v.1a5.009 5.009 0 0 0 -4 4.9v4a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5v-.1a5.009 5.009 0 0 0 4-4.9v-.1a5.009 5.009 0 0 0 4-4.9v-4a5.006 5.006 0 0 0 -5-5zm-17 15a3 3 0 0 1 3-3h6a2.988 2.988 0 0 1 2.638 1.6l-3.455 3.463-.475-.479a1.992 1.992 0 0 0 -2.708-.111l-4.621 3.96a2.96 2.96 0 0 1 -.379-1.433zm12 4a3 3 0 0 1 -3 3h-6a2.971 2.971 0 0 1 -1.118-.221l4.406-3.779.476.481a2 2 0 0 0 2.828 0l2.408-2.413zm4-5a3 3 0 0 1 -2 2.816v-1.816a5.006 5.006 0 0 0 -5-5h-5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3zm4-5a3 3 0 0 1 -2 2.816v-1.816a5.006 5.006 0 0 0 -5-5h-5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3zm-18 6a1 1 0 1 1 1 1 1 1 0 0 1 -1-1z" /></svg>
                    <p>Choose photo from gallery</p>
                </div>
                <div className="section2">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="76" height="76"><path d="M19,4h-.508L16.308,1.168A3.023,3.023,0,0,0,13.932,0H10.068A3.023,3.023,0,0,0,7.692,1.168L5.508,4H5A5.006,5.006,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A5.006,5.006,0,0,0,19,4ZM9.276,2.39A1.006,1.006,0,0,1,10.068,2h3.864a1.008,1.008,0,0,1,.792.39L15.966,4H8.034ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H19a3,3,0,0,1,3,3Z" /><path d="M12,8a6,6,0,1,0,6,6A6.006,6.006,0,0,0,12,8Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,18Z" /></svg>
                    <p>Take photo with camera</p>
                </div>
            </div>
        </div>
    )
}

export default AddPhoto