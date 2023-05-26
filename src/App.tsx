import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Invite from './components/Invite/Invite';
import Rsvp from './components/Rsvp/Rsvp';
import Guestbook from './components/Guestbook/Guestbook';
import Map from './components/Map/Map';
import Navbar from './components/Navbar/Navbar';
import RsvpPopup from './components/RsvpPopup/RsvpPopup';
import WishPopup from './components/WishPopup/WishPopup';
import StartPopup from './components/StartPopup/StartPopup';

// import music from './assets/lovers_oath.ogg';

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.classList.remove('hide');
      observer.unobserve(entry.target);
    }
    else {
      entry.target.classList.remove('show');
      entry.target.classList.add('hide');
    }
  }
  )
}, { threshold: 0.5 });


const App = () => {
  // states
  const [wishPopup, setWishPopup] = useState<boolean>(false);
  const [rsvpPopup, setRsvpPopup] = useState<boolean>(false);

  // pop up at the page loads
  const [startPopup, setStartPopup] = useState<boolean>(true);


  useEffect(() => {
    const pageElements = document.querySelectorAll('.paper');
    const observe = () => {
      pageElements.forEach((pageElement) => {
        observer.observe(pageElement);
      });
    }

    window.addEventListener('load', observe);

    return () => {
      window.removeEventListener('load', observe);
    }
  }, [])

  const pages = [
    { id: 1, component: <><Header /></>, name: "header" },
    { id: 2, component: <><Invite /></>, name: "invite" },
    { id: 3, component: <><Map /></>, name: "map" },
    { id: 4, component: <><Rsvp /></>, name: "prayer" },
    { id: 5, component: <><Guestbook setWishPopup={setWishPopup} /></>, name: "wish" },
    { id: 6, component: <><Footer /></>, name: "footer" },
  ];

  return (
    <div className='kad-kahwin'>

      {pages.map((page) => (
        <div key={page.id} className={`paper ${page.name}`} >
          {page.component}
        </div>
      ))}
      {/* pass ref to navbar */}
      <Navbar handleRsvp={setRsvpPopup} handleWish={setWishPopup} />


      <RsvpPopup showPopup={rsvpPopup} setRsvpPopup={setRsvpPopup} />
      <WishPopup showPopup={wishPopup} setWishPopup={setWishPopup} />

      {/* start pop up during page loads */}
      {startPopup && <StartPopup />}
    </div>
  )
}

export default App