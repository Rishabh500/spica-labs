import React from 'react';
import { CONFIG } from '../config';

export function CtaBanner() {
  const bookingHref = CONFIG.bookingUrl || "#contact";
  const bookingTarget = CONFIG.bookingUrl ? "_blank" : undefined;
  const bookingRel = CONFIG.bookingUrl ? "noopener noreferrer" : undefined;

  return (
    <section className="cta" style={{ paddingTop: '96px' }}>
      <div className="wrap">
        <div className="cta-box">
          <h2>Let's Make AI Work for Your Business.</h2>
          <p className="lead">
            Tell us about a process that takes too much time, a workflow that needs improvement, or an opportunity you want to explore. We'll help you identify a practical next step.
          </p>
          <div className="cta-row">
            <a
              className="btn btn-primary"
              href={bookingHref}
              target={bookingTarget}
              rel={bookingRel}
            >
              Book a Discovery Call
            </a>
            <a className="btn btn-ghost" href="#contact">
              Tell Us What You Want to Automate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
