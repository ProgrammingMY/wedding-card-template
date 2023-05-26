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
          <p className='text-header' >SATURDAY | DD-TH OF MONTH YEAR</p>

        </div>
      </div>



    </div>

  )
}

export default Header