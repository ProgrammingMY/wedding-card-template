import React, { useState, useRef, FC } from 'react'
import './WishPopup.css'

interface IData {
    TableName: string;
    Item: {
        name: { S: string };
        message: { S: string };
        has_message: { S: string };
    };
}

interface IProp {
    showPopup: boolean;
    setWishPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

// const endpoint = 'https://vk8q89waxk.execute-api.ap-southeast-1.amazonaws.com/default/wedding-RSVP';
const endpoint = '';

const WishPopup: FC<IProp> = ({ showPopup, setWishPopup }) => {
    // const [showPopup, setShowPopup] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const [wishComplete, setWishComplete] = useState(false);

    const updateWishes = (item: IData) => {
        const wishes = sessionStorage.getItem('wishes') || '[]';
        console.log(item)
        if (wishes) {
            const newWishes = JSON.parse(wishes);
            newWishes.unshift(item.Item);
            sessionStorage.setItem('wishes', JSON.stringify(newWishes));
        } 
        // first ever wish in the board
        else {
            sessionStorage.setItem('wishes', JSON.stringify(item.Item));
        }
    }

    // handle submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const entries = Object.fromEntries(formData.entries());
        const request: IData = {
            TableName: 'rsvp-loqmanxmira',
            Item: {
                name: { S: String(entries.name) },
                message: { S: String(entries.message) },
                has_message: { S: String('true') }
            }
        }

        // post to api
        console.log(entries);
        // save API calls
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        });

        // reset form
        (event.target as HTMLFormElement).reset();
        setWishComplete(true);
        updateWishes(request);
        setWishPopup(false);
    };

    return (
        <div>
            <div className={`rsvp-popup-container ${showPopup ? 'active' : ''}`} onClick={() => setWishPopup(false)}>
                <div className={`popup ${showPopup ? 'active' : ''}`} onClick={(event) => event.stopPropagation()}>
                    <button className='close-button' onClick={() => setWishPopup(false)}>&times;</button>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <p>Nama / Name</p>
                        <input type="text" name="name" required placeholder='' />

                        <p>Ucapan / Wishes</p>
                        <textarea name="message" required placeholder='' maxLength={255} />

                        {wishComplete ? <p className='complete'>Ucapan telah terkirim!</p> : <button type="submit" className='rsvp__btn ucapan'>Send</button>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default WishPopup