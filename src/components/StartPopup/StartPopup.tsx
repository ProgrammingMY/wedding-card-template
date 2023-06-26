import React, { useEffect } from 'react'
import './StartPopup.css'

// audio DOM element
const audio = document.getElementsByTagName('audio')[0];

const handleClose = () => {
    const popup = document.getElementById('content')
    const popupContainer = document.getElementById('popup-container')
    popup?.classList.add('hide')
    popupContainer?.classList.remove('active')

    audio.play() // play the audio
}



const StartPopup = () => {
    useEffect(() => {
        const closeButton = document.getElementById('ok-button')
        closeButton?.addEventListener('click', handleClose)
        return () => {
            closeButton?.removeEventListener('click', handleClose)
        }

    }, [])

    return (
        <>
            <div id='popup-container' className='popup-container active'>
                <div id='content' className='popup-content'>
                    <h2>Assalamualaikum and Greetings!</h2>
                    <p className='popup-text'>
                        This online wedding card template is created by Loqman & Mira
                        <br></br><br></br>
                        <a href="https://www.linkedin.com/in/loqman-al-hakim-aripin/">Loqman's LinkedIn</a>
                        <br></br>
                        <a href="https://github.com/akkeyron/wedding-card-template/tree/master">Github</a>
                        <br></br><br></br>
                        Click OK to proceed


                    </p>
                    <button id='ok-button'>OK</button>
                </div>
            </div>
        </>
    )
}

export default StartPopup