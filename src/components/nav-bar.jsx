import logo from '../assets/logo.svg'
import usr from '../assets/usr.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBinoculars, faTools, faBell, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

import './style.css'

function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#f2f2f2' }}>
        <div className="container-fluid ms-5">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Deep Thought" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-5 gx-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                <FontAwesomeIcon icon={faHome} className="icon-blue"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                <FontAwesomeIcon icon={faBinoculars} className="icon-blue"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin">
                <FontAwesomeIcon icon={faTools} className="icon-blue"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin">
                <FontAwesomeIcon icon={faBell} className="icon-blue"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin">
                  <img src={usr} alt="user" className="user-profile" /> 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin">
                <FontAwesomeIcon icon={faEllipsisVertical} className="menu" /> 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default NavBar;
