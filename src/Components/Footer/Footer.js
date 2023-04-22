import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-regular-svg-icons'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-distributed">
    <div className="footer-right">
      <a href="#">
      <FontAwesomeIcon icon={faBookmark} />
      </a>
      <a href="#">
      <FontAwesomeIcon icon={faBookmark} />
      </a>
      <a href="#">
      <FontAwesomeIcon icon={faBookmark} />
      </a>
      <a href="#">
      <FontAwesomeIcon icon={faBookmark} />
      </a>
    </div>
    <div className="footer-left">
      <p className="footer-links">
        <a className="link-1" href="#">
          Home
        </a>
        <a href="#">Blog</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Faq</a>
        <a href="#">Contact</a>
      </p>
      <p>Belstacks © 2015</p>
    </div>
  </footer>
  )
}

export default Footer