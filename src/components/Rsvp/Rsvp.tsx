import React, { useRef } from 'react'
import './Rsvp.css'

const Rsvp = () => {
  const nikah_day = new Date('2024-02-12')
  const now = new Date()
  const diff = nikah_day.getTime() - now.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1

  return (
    <div id="rsvp">
      <div className="container-divider-rsvp">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
        </svg>
      </div>
      <div className='rsvp__container'>

        <div className="countdown__container">
          <h2>Counting days</h2>
          <p className='countdown__number'>{days}</p>
          <p className='map__text-english countdown'>days</p>
        </div>

        <div className="prayer">
          <h2>Doa // Prayer</h2>
          <h1>بارك الله لكما وبارك عليكما
            وجمع بينكما في خير</h1>
          <p className='map__text-english'>May Allah bless everything for you two and shower His Blessings upon the two of you and may He bring you together in everything that is good.</p>
        </div>


      </div>
      <div className="container-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  )
}

export default Rsvp