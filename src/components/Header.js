import { useState } from 'react'
import { CSSTransition } from "react-transition-group";
import ProfileNav from './ProfileNav'

const Header = ({ setShowQueue }) => {
  const [showProfileNav, setShowProfileNav] = useState(false)
  return (
    <div>
      <header className={ showProfileNav ? 'open-menu' : '' }>
          <img src={ require("../assets/W_logo_big.svg").default } alt="" className="header-logo" />

          <div className="header-side">
              <div className="header-side-item clickable" onClick={ () => setShowProfileNav(!showProfileNav) }>
                  { showProfileNav ? <img src={ require("../assets/close_black.svg").default } alt="" /> : <img src={ require("../assets/profile.svg").default } alt="" /> }
                  <p>Profil</p>
              </div>
              <div className="header-side-item">
                  <img src={ require("../assets/hamburger.svg").default } alt="" />
                  <p>Menu</p>
              </div>
          </div>
      </header>

      <CSSTransition in={ showProfileNav } timeout={ 1000 } classNames="nav-transition" unmountOnExit>
        <ProfileNav setShowProfileNav={ setShowProfileNav } setShowQueue={ setShowQueue } />
      </CSSTransition>
    </div>
  )
}

export default Header