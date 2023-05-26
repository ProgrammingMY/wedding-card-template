import React, { useRef, useState, useEffect, FC } from 'react'
import './Guestbook.css'
import axios from 'axios';

// const endpoint = 'https://vk8q89waxk.execute-api.ap-southeast-1.amazonaws.com/default/wedding-RSVP';
const endpoint = '';

interface IData {
    TableName: string;
    Item: {
        name: { S: string };
        message: { S: string };
        has_message: { S: string };
    };
}

interface IProp {
    setWishPopup: React.Dispatch<React.SetStateAction<boolean>>;
}


const Guestbook: FC<IProp> = ({ setWishPopup }) => {
    // const [wishes, setWishes] = useState([
    //     {
    //         "name": { "S": "admad" },
    //         "message": { "S": "testing one two three" }
    //     },
    // ]);

    const [isloading, setLoading] = useState(false);

    // fetch from api using fetch
    // display loading message
    const fetchWishes = async () => {
        console.log("get new records");
        setLoading(true);
        const response = await fetch(endpoint);
        const data = await response.json();
        // setWishes(data.Items);
        sessionStorage.setItem('wishes', JSON.stringify(data.Items));
        setLoading(false);
    };

    window.addEventListener('load', fetchWishes);

    // useEffect(() => {
    //     fetchWishes();
    // }, []);

    const wishes = JSON.parse(sessionStorage.getItem('wishes') || '[]');

    return (
        <section id="guestbook">
            <div className='guestbook__wishes'>
                <div className='guestbook__box'>
                    <h2>UCAPAN // WISHES</h2>
                    {isloading && <div>Put your wish here</div>}
                    <ul>
                        {wishes.map((wish: any, index: number) => (
                            <li key={index}>
                                {/* message that overflows the box will be next line */}
                                <strong>{wish.name.S}</strong>
                                <p>{wish.message.S}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='guestbook__button'>
                    <button className="rsvp__btn wish" onClick={() => setWishPopup(true)}>Hantar Ucapan</button>
                </div>


            </div>

            {/* // get button to pop up window to send wishes */}

        </section>
    )
}

export default Guestbook