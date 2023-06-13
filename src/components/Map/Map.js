import React from 'react'
import './Map.css'
import FLOWER from '../../assets/page3/pink_flower.png'
import { SiWaze, SiGooglemaps } from 'react-icons/si'
import { TfiLocationPin } from 'react-icons/tfi'
import { CiClock2 } from 'react-icons/ci'
import { BsHeart } from 'react-icons/bs'
import { RxCalendar } from 'react-icons/rx';

// icons
import waze from '../../assets/page3/waze-icon.svg';
import google from '../../assets/page3/google-maps-icon.svg';

// address to the venue
const google_location = 'https://goo.gl/maps/P1ULEPu2fQptmvfp8'
const waze_location = 'https://www.waze.com/en/live-map/directions/my/federal-territory-of-kuala-lumpur/kuala-lumpur/kuala-lumpur-city-centre?place=ChIJ14gJ49NJzDERmsAj2n9LSkY'
const address1 = "Location Line 1";
const address2 = "Location Line 2";
const address3 = "Location Line 3";


const Map = () => {
    return (
        <section id='map'>
            <div className='map__container'>
                <div className='map__flower-left'>
                    <img src={FLOWER} alt="" />
                </div>
                <div className='map__flower-right'>
                    <img src={FLOWER} alt="" />
                </div>
                <div className='map__text'>
                    <RxCalendar size={28} />
                    <p className='map__text-malay'>SABTU | 31 FEBRUARI 2024</p>
                    <p className='map__text-english'>Saturday | 31st FEBRUARY 2024</p>
                </div>

                <div className='map__text'>
                    <TfiLocationPin size={28} />
                    <p className='map__text-malay'>{address1}</p>
                    <p className='map__text-malay'>{address2}</p>
                    <p className='map__text-malay'>{address3}</p>
                </div>

                <div className='map__text'>
                    <CiClock2 size={28} />
                    <p className='map__text-malay'>11.00 AM - 04.00 PM</p>
                </div>

                <div className='map__text'>
                    <BsHeart size={28} />
                    <p className='map__text-malay'>KETIBAAN PENGANTIN | 12 TENGAHARI</p>
                    <p className='map__text-english'>Arrival of Bride & Groom | 12 PM</p>

                </div>

                <div className='map__text'>
                    <p className='map__text-malay'>Tekan di bawah untuk navigasi</p>
                    <p className='map__text-english'>&#8595; Press below for navigation &#8595;</p>

                    <div className='map__links'>
                        <div className='map__link'>
                            <a href={waze_location} target="_blank" rel='noopener noreferrer'><img src={waze} /></a>
                        </div>

                        <div className='map__link'>
                            <a href={google_location} target="_blank" rel='noopener noreferrer'><img src={google} /></a>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    )
}

export default Map