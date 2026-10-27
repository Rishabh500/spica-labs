import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-ai.png';
import { CONFIG } from '../config';
import './Navbar.css';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const bookingHref = CONFIG.bookingUrl || "#contact";
  const bookingTarget = CONFIG.bookingUrl ? "_blank" : undefined;
  const bookingRel = CONFIG.bookingUrl ? "noopener noreferrer" : undefined;

  return (
    <header>
      <div className="wrap nav">
        <a className="brand" href="#home" aria-label="SpicaLabs AI home">
            <img className="logo-img" src={logo} alt="SpicaLabs AI" />
        </a>
        <button
          className="menu-btn"
          id="menuBtn"
          aria-expanded={isOpen}
          aria-controls="links"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
            {isOpen ? (
              <path d="M4 4l12 12M16 4L4 16" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
        <nav
          className={`links ${isOpen ? 'open' : ''}`}
          id="links"
          aria-label="Primary"
        >
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#demo-video" onClick={closeMenu}>Video Demo</a>
          <a href="#solutions" onClick={closeMenu}>Solutions</a>
          <a href="#demo" onClick={closeMenu}>Interactive Demo</a>
          <a href="#process" onClick={closeMenu}>How We Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a
            className="btn btn-primary"
            href={bookingHref}
            target={bookingTarget}
            rel={bookingRel}
            onClick={closeMenu}
          >
            Book a Discovery Call
          </a>
        </nav>
      </div>
    </header>
  );
}
