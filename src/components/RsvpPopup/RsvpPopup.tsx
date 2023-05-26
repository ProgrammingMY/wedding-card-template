import React, { useState, useRef, FC } from 'react'
import './RsvpPopup.css'

interface IData {
    TableName: string;
    Item: {
        name: { S: string };
        message: { S: string };
        phone: { S: string };
        total: { N: string };
        has_message: { S: string };
    };
}

interface IProp {
    showPopup: boolean;
    setRsvpPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

// const endpoint = 'https://vk8q89waxk.execute-api.ap-southeast-1.amazonaws.com/default/wedding-RSVP';
const endpoint = '';

const RsvpPopup: FC<IProp> = ({ showPopup, setRsvpPopup }) => {
    const [complete, setComplete] = useState(false);

    const formRef = useRef<HTMLFormElement>(null);
    // handle submission
    const handleSubmit = async (data: React.FormEvent<HTMLFormElement>) => {
        if (!formRef.current) return;

        // prevent default form submission
        data.preventDefault();

        // get form data
        const formData = new FormData(formRef.current);
        // create object from form data
        const entries = Object.fromEntries(formData.entries());

        const request: IData = {
            TableName: 'rsvp-loqmanxmira',
            Item: {
                name: { S: String(entries.name) },
                message: { S: String(entries.message) },
                phone: { S: String(entries.phone) },
                total: { N: String(entries.total) },
                has_message: { S: String(entries.message !== '') },
            }
        }

        console.log(request);

        // send data to aws api using axios
        // save API calls
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        });

        (data.target as HTMLFormElement).reset();
        setComplete(true);
        setRsvpPopup(false);
    }

    return (
        <div>
            <div className={`rsvp-popup-container ${showPopup ? 'active' : ''}`} onClick={() => setRsvpPopup(false)}>
                <div className={`rsvp-popup ${showPopup ? 'active' : ''}`} onClick={(event) => event.stopPropagation()}>
                    <button className='close-button' onClick={() => setRsvpPopup(false)}>&times;</button>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <p>Nama / Name</p>
                        <input type="text" name="name" required placeholder='' />

                        <p>No Telefon / Phone Number</p>
                        <input type="tel" name="phone" placeholder='' />

                        <p>Jumlah Kehadiran / Number of Guest(s)</p>
                        <input type="number" name="total" required placeholder='' />

                        <p>Ucapan / Wishes (optional)</p>
                        <textarea name="message" placeholder='' maxLength={255}></textarea>

                        {complete ? <p className="complete">Response sent!</p> : <button type="submit" className="rsvp__btn rsvp">Send</button>}
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RsvpPopup