import React, { useEffect } from 'react'
import './Invite.css'

// assets
import BISMILLAH from '../../assets/page2/bismillah.png'
import FLOWERS from '../../assets/page1/petal.GIF'
import GOLD from '../../assets/page2/gold.png'

const abah = "FATHER'S NAME"
const mak = "MOTHER'S NAME"
const bride = "Bride's Name"
const groom = "Groom's Name"

const Invite = () => {


    return (
        <>
            {/* <div class="container-divider invite">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
                </svg>
            </div> */}

            <div className='invite-container'>


                <div className='invite__assets-bismillah'>

                    <img src={BISMILLAH} alt="" />
                </div>
                <div className='invite__assets-text'>
                    <p className='text-malay2'>DENGAN PENUH KESYUKURAN KEPADA</p>
                    <p className='text-malay2'>ALLAH S.W.T.</p>
                </div>
                <div className='invite__assets-text'>
                    <h2>{abah}</h2>
                    <h2>&</h2>
                    <h2>{mak}</h2>
                </div>
                <div className='invite__assets-text'>
                    <p className='text-malay2'>MENJEMPUT YANG BERBAHAGIA</p>
                    <p className='text-malay2' style={{ marginBottom: '1rem' }}>DATUK / DATO' / DATIN / TUAN / PUAN / ENCIK / CIK<br></br>SEKELUARGA</p>
                    <p className='text-malay2'>UNTUK MERAIKAN MAJLIS PERKAHWINAN</p>
                    <p className='text-malay2'>ANAKANDA KAMI DAN PASANGANNYA</p>
                </div>
                <div className='invite__assets-pengantin'>
                    <img src={GOLD} className="invite__assets-border" alt="" />
                    <h2>{bride}</h2>
                    <h2>&</h2>
                    <h2>{groom}</h2>
                    {/* <img src={FLOWERS} alt="" className='petals' /> */}
                    <img src={GOLD} className="invite__assets-border" alt="" />
                </div>

            </div>
            <div class="container-divider-bottom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
                </svg>
            </div>

        </>


    )
}

export default Invite