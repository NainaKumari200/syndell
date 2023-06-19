import React from 'react'
import './Header.css'; 


export default function HeaderComp() {
  return (
    <header className="header">
    <nav className="navbar flex">
      <div className="container">
        <div className="logo">
          {/* <a href="/">SyndellTech</a> */}
          <span class="site-logo-img"><a href="https://syndelltech.com/" class="custom-logo-link" rel="home"><img width="190" height="40" alt="Syndell Logo" nitro-lazy-src="https://cdn-hnbmp.nitrocdn.com/LElQzOcDEtpKVRMhheBmLbNTSGDyqNjj/assets/images/optimized/rev-01d97d4/wp-content/uploads/2023/05/New-Logo-Syndell.png" class="custom-logo lazyloaded" decoding="async" nitro-lazy-empty="" id="MTc5OToyNjg=-1" src="https://cdn-hnbmp.nitrocdn.com/LElQzOcDEtpKVRMhheBmLbNTSGDyqNjj/assets/images/optimized/rev-01d97d4/wp-content/uploads/2023/05/New-Logo-Syndell.png"/></a></span>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>

  
)
}
