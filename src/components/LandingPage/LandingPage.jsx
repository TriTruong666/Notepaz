import '../../styles/LandingPage.css';
import React from 'react';
import assets from '../../storage/assets';
import { Link } from 'react-router-dom';
class LandingPage extends React.Component {
  openLink = (url) => {
    window.open(url, '_blank');
  };
  render() {
    return (
      <main className='landing'>
        <div className="intro">
          <div className="intro-text">
            <span>Welcome to</span>
            <strong>Notepaz Website</strong>
          </div>
          <Link className='begin-btn' to="/note">
            <span className="material-symbols-outlined">
              note_add
            </span>
            <small>New Note</small>
          </Link>
        </div>
        <footer className='info-dev'>
          <div className="info-text">
            <span>developed by</span>
            <strong>Truong Hoang Tri</strong>
          </div>
          <div className="social">
            <img onClick={() => this.openLink('https://github.com/TriTruong666')} src={assets.icons.icon1} alt="" />
            <img onClick={() => this.openLink('https://www.instagram.com/medusa_shopz/')} src={assets.icons.icon2} alt="" />
            <img src={assets.icons.icon3} alt="" />
          </div>
        </footer>
      </main>
    )
  }
}


export default LandingPage;
