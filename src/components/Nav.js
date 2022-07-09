import React, { useEffect } from 'react'
import './Nav.css'

function Nav() {

    const [show, setShow] = React.useState(false);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        setShow(window.scrollY > 100)
      });

    }, []);
    

  return (
    <div className={`nav-container ${show && 'nav-container-black'}`}>
      <img 
      className='nav-logo' 
      src='https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png' 
      alt='Netflix'
      />
      <img 
      className='nav-avatar' 
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU' 
      alt='Avatar'
      />
    </div>
  )
}

export default Nav;