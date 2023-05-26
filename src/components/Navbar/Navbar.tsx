import * as React from 'react';
import { useState, useRef, useEffect, FC } from 'react';
import './Navbar.css'

// nav icons
import { TfiArrowCircleDown, TfiArrowCircleUp } from 'react-icons/tfi'
import { SlVolume2, SlVolumeOff } from 'react-icons/sl'
import { RxHamburgerMenu } from 'react-icons/rx'
import { SlEnvolope } from 'react-icons/sl'
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { IoLocationOutline } from 'react-icons/io5'

// audio DOM element
const audio = document.getElementsByTagName('audio')[0];

// interface
interface IProps {
  handleRsvp: React.Dispatch<React.SetStateAction<boolean>>;
  handleWish: React.Dispatch<React.SetStateAction<boolean>>;
}



const Navbar: FC<IProps> = ({ handleRsvp, handleWish }) => {
  // React states
  const [muted, setMuted] = useState(false);

  const togglePlayPause = () => {
    const prevState = muted;
    setMuted(!prevState);
    if (!audio) return;

    if (prevState === false) {
      audio.pause();

    } else if (prevState === true) {
      audio.play();
    }
  }

  document.addEventListener("visibilitychange", event => {
    if (document.visibilityState === "visible" && !muted) {
      audio.play();
    }  else {
      audio.pause();
    }
  })

  

  const resetPopup = (popup: string | null) => {
    if (popup === 'rsvp') {
      handleWish(false);
    }
    else if (popup === 'wish') {
      handleRsvp(false);
    }
    else {
      handleRsvp(false);
      handleWish(false);
    }
  }

  return (
    <nav className='nav-button'>
      {/* music player */}
      <div onClick={() => {
        togglePlayPause();
        resetPopup(null);
      }
      }
        className="nav-btn"
      >
        {muted === false ? <SlVolume2 size={28} /> : <SlVolumeOff size={28} />}
        <small>MUSIC</small>
      </div>

      {/* rsvp button */}
      <div onClick={() => {
        handleRsvp((prev) => !prev)
        resetPopup('rsvp');
      }
      }
        className="nav-btn"
      >
        <SlEnvolope size={28} />
        <small>RSVP</small>
      </div>

      {/* wish button */}
      <a onClick={() => {
        resetPopup(null);
      }
      }
        className="nav-btn"
        href='#guestbook'
      >
        <HiOutlinePencilSquare size={28} />
        <small>WISH</small>
      </a>

      {/* map button */}
      <a onClick={() => {
        resetPopup(null);
      }
      }
        className="nav-btn"
        href='#map'
      >
        <IoLocationOutline size={28} />
        <small>MAP</small>
      </a>
    </nav>
  )
}

export default Navbar;