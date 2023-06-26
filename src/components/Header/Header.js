import React from 'react'
import './Header.css'
import INITIAL from '../../assets/page1/initial.png'
import WALIMAH from '../../assets/page1/walimah.png'
import FLOWERS from '../../assets/page1/petal.GIF'

const Header = () => {
  return (

    <div className='main__header'>
      <div className='bg-image'></div>
      <div className='main__content'>
        <div className='main__header-title'>

          <p className='text-header' >WEDDING INVITATION</p>

        </div>

        <div className='main__header-pengantin'>

          <div className='pengantin-header'>

            <h2>GROOM <br></br>&<br></br>BRIDE</h2>
          </div>
        </div>

        <div className='main__header-venue'>
          <p className='text-header' >SATURDAY | 30TH OF FEBRUARY 2024</p>

        </div>
      </div>



      <div class="container-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class='shape-fill'></path>
        </svg>
      </div>
    </div>

  )
}

export default Header