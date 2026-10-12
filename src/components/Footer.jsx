import React from 'react';
import { CONFIG } from '../config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <a className="brand" href="#home" aria-label="SpicaLabs.ai home">
              <span className="logo" role="img" aria-label="SpicaLabs.ai"></span>
            </a>
            <p style={{ marginTop: '14px', color: '#fff', fontWeight: 600 }}>
              AI Solutions That Work.
            </p>
            <p style={{ marginTop: '6px' }}>
              AI automation, intelligent agents, and custom AI applications for growing businesses.
            </p>
          </div>

          <div>
            <h4>Navigate</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#demo">Interactive Demo</a></li>
              <li><a href="#process">How We Work</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Connect</h4>
            <ul id="social">
              {CONFIG.email && (
                <li>
                  <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
                </li>
              )}
              {CONFIG.social && CONFIG.social.map((s, idx) => (
                <li key={idx}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="copy" style={{ maxWidth: 'none' }}>
          © {currentYear} SpicaLabs.ai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
