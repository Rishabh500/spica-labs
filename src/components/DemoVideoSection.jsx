import React, { useState } from 'react';
import { CONFIG } from '../config';

export function DemoVideoSection() {
  const [isPlayingModal, setIsPlayingModal] = useState(false);
  const bookingHref = CONFIG.bookingUrl || "#contact";

  // Channel & Tech Stack Tags
  const techStack = [
    { name: "Meta / Facebook Ads", badge: "Trigger" },
    { name: "Google Ads Lead Forms", badge: "Trigger" },
    { name: "Inbound Phone Calls", badge: "Trigger" },
    { name: "Retell AI / Vapi Voice", badge: "AI Calling" },
    { name: "OpenAI GPT-4", badge: "Rating" },
    { name: "HubSpot / GoHighLevel", badge: "CRM" },
    { name: "WhatsApp & SMS", badge: "Speed < 60s" },
    { name: "Calendar & Slack", badge: "15m SLA" }
  ];

  return (
    <section className="video-showcase-section" id="demo-video">
      <div className="wrap">
        {/* Section Heading */}
        <div className="video-header text-center">
          <p className="eyebrow">⚡ SPEED-TO-LEAD AUTOMATION & AI VOICE QUALIFIER</p>
          <h2>Transform Inbound Calls & Ad Leads into Qualified CRM Deals in Under 60 Seconds.</h2>
          <p className="lead" style={{ margin: "16px auto 0", maxWidth: "78ch" }}>
            Watch how our automated workflow captures leads instantly from <strong>Facebook & Meta Ads</strong>, 
            <strong> Google Ads</strong>, and <strong>inbound phone calls</strong>, automatically dials or responds with 
            an intelligent AI voice agent, qualifies their budget and intent, updates your CRM, and triggers instant 
            WhatsApp follow-ups with calendar booking links.
          </p>
        </div>

        {/* Highlight Stats Bar */}
        <div className="stats-strip">
          <div className="stat-item">
            <span className="stat-number">&lt; 60s</span>
            <span className="stat-label">Speed to First Call / WhatsApp</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">391%</span>
            <span className="stat-label">Higher Lead Conversion Rate</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Automated CRM & Transcript Sync</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">15 min</span>
            <span className="stat-label">Hot Lead Sales Rep SLA Alert</span>
          </div>
        </div>

        {/* Video Player Placeholder or Live Embed */}
        <div className="video-container-wrapper">
          <div className="video-frame">
            <div className="video-topbar">
              <div className="video-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="video-title">
                <span className="live-indicator" /> Live Automation Demo: Meta & Google Ads → Retell AI Call → CRM → WhatsApp
              </div>
              <div className="video-badges">
                <span className="badge">1080p HD</span>
                <span className="badge ok">60s SLA</span>
              </div>
            </div>

            {CONFIG.demoVideoUrl ? (
              <div className="video-embed-box">
                {CONFIG.demoVideoUrl.endsWith('.mp4') ? (
                  <video controls className="responsive-video">
                    <source src={CONFIG.demoVideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    src={CONFIG.demoVideoUrl}
                    title="SpicaLabs Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="responsive-iframe"
                  />
                )}
              </div>
            ) : (
              /* High-Impact Interactive Video Placeholder */
              <div
                className="video-placeholder"
                onClick={() => setIsPlayingModal(true)}
                role="button"
                tabIndex={0}
                aria-label="Play Demo Video Walkthrough"
              >
                {/* Visual Backdrop Overlay */}
                <div className="video-backdrop-mesh" />

                {/* Animated Sound Wave Graphics */}
                <div className="audio-wave-bars">
                  <span style={{ animationDelay: '0.1s' }} />
                  <span style={{ animationDelay: '0.4s' }} />
                  <span style={{ animationDelay: '0.2s' }} />
                  <span style={{ animationDelay: '0.6s' }} />
                  <span style={{ animationDelay: '0.3s' }} />
                  <span style={{ animationDelay: '0.5s' }} />
                  <span style={{ animationDelay: '0.2s' }} />
                  <span style={{ animationDelay: '0.7s' }} />
                </div>

                {/* Center Play Button with Pulsing Glow */}
                <div className="play-button-wrap">
                  <div className="play-ripple" />
                  <button className="play-button" aria-label="Play video">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                <div className="video-caption">
                  <h3>Watch the Live n8n + AI Voice Workflow in Action</h3>
                  <p>Click to view walkthrough · <em>Transform ad leads into booked sales calls in 60s</em></p>
                  <div className="video-duration-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>03:42 Demo Walkthrough</span>
                  </div>
                </div>

                <div className="placeholder-helper-note">
                  <span>💡 Tip: You can insert your YouTube, Loom, or MP4 URL in <code>src/config.js</code> under <code>demoVideoUrl</code></span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal: Interactive Walkthrough Preview when clicking placeholder */}
        {isPlayingModal && !CONFIG.demoVideoUrl && (
          <div className="modal-backdrop" onClick={() => setIsPlayingModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>⚡ Demo Walkthrough Preview</h3>
                <button
                  className="modal-close"
                  onClick={() => setIsPlayingModal(false)}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-callout">
                  <strong>Ready to add your video?</strong>
                  <p>
                    Simply open <code style={{ color: "var(--blue2)" }}>src/config.js</code> and set your video link in{' '}
                    <code style={{ color: "var(--blue2)" }}>demoVideoUrl</code> (e.g. YouTube, Vimeo, Loom, or direct MP4). It will render automatically in place of this preview.
                  </p>
                </div>
                <h4>What this workflow delivers to your clients:</h4>
                <ul className="modal-feature-list">
                  <li>
                    <strong>Instant Ad Lead Ingestion:</strong> Connects Meta (Facebook/Instagram) Lead Ads and Google Ads Lead Forms in real-time.
                  </li>
                  <li>
                    <strong>Immediate AI Voice Call:</strong> Triggers Retell AI / Vapi voice agents within 60 seconds to speak with the prospect, answer questions, and screen for budget.
                  </li>
                  <li>
                    <strong>Smart Qualification & Scoring:</strong> OpenAI rates the lead as Hot/Warm/Cold with call transcript and sentiment attached.
                  </li>
                  <li>
                    <strong>Full CRM Sync & Sales Alert:</strong> Updates HubSpot/GoHighLevel instantly and fires a 15-minute SLA notification into your sales team's Slack channel.
                  </li>
                  <li>
                    <strong>WhatsApp Booking Link:</strong> Sends personalized WhatsApp/SMS with 3 calendar slots for 1-click meeting confirmation.
                  </li>
                </ul>
                <div style={{ marginTop: "20px", display: "flex", gap: "12px", justifyContent: "flex-end" }}>
                  <button className="btn btn-ghost" onClick={() => setIsPlayingModal(false)}>
                    Close
                  </button>
                  <a className="btn btn-primary" href={bookingHref} onClick={() => setIsPlayingModal(false)}>
                    Book a Discovery Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Workflow Explanation to Attract Clients */}
        <div className="workflow-breakdown">
          <div className="sec-head">
            <p className="eyebrow">HOW THE WORKFLOW OPERATES</p>
            <h2>The 5-Stage Automated Lead Acceleration Engine</h2>
            <p className="lead">
              Built on enterprise-grade automation pipelines (n8n & custom APIs), this workflow turns cold ad clicks into warm sales conversations without any manual intervention.
            </p>
          </div>

          <div className="workflow-steps-grid">
            {/* Step 1 */}
            <div className="wf-card">
              <div className="wf-badge">STAGE 01</div>
              <div className="wf-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </div>
              <h3>Omnichannel Capture &amp; 24h Deduplication</h3>
              <p>
                Webhook triggers capture inquiries instantly from <strong>Facebook Lead Ads</strong>, 
                <strong> Google Ads</strong>, landing page forms, or direct phone calls.
              </p>
              <ul className="wf-features">
                <li>Automatic 24-hour deduplication check</li>
                <li>Payload normalization across ad formats</li>
                <li>Instant webhook intake in &lt; 500ms</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="wf-card featured-wf">
              <div className="wf-badge hot">STAGE 02 · UNDER 60 SECONDS</div>
              <div className="wf-icon-wrap highlight">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <h3>Instant AI Outbound Call &amp; Inbound Routing</h3>
              <p>
                Checks business hours and immediately dispatches a natural conversational AI agent 
                (via Retell AI / Vapi) to engage the prospect.
              </p>
              <ul className="wf-features">
                <li>Under 60-second speed-to-lead response</li>
                <li>Intelligent retry engine if the call is unanswered</li>
                <li>Handles inbound calls and transcribes audio live</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="wf-card">
              <div className="wf-badge">STAGE 03</div>
              <div className="wf-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              </div>
              <h3>OpenAI Lead Qualification &amp; Rating</h3>
              <p>
                OpenAI parses the live conversation, evaluates budget, timeline, and project needs, 
                and assigns a qualification verdict.
              </p>
              <ul className="wf-features">
                <li>Automated score: <em>Hot</em>, <em>Warm</em>, or <em>Cold</em></li>
                <li>Extracts decision timeline &amp; budget tier</li>
                <li>Generates executive call summary notes</li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="wf-card">
              <div className="wf-badge">STAGE 04</div>
              <div className="wf-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3>Automated CRM Upsert &amp; Transcript Archival</h3>
              <p>
                Synchronizes the contact directly to your CRM (HubSpot, GoHighLevel, Salesforce, Pipedrive) 
                with zero manual data entry.
              </p>
              <ul className="wf-features">
                <li>Upserts contact record &amp; attaches lead ID</li>
                <li>Attaches audio recording &amp; full transcript</li>
                <li>Updates lead temperature and pipeline stage</li>
              </ul>
            </div>

            {/* Step 5 */}
            <div className="wf-card featured-wf">
              <div className="wf-badge hot">STAGE 05 · CLOSING LOOP</div>
              <div className="wf-icon-wrap highlight">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3>Instant WhatsApp Follow-up &amp; 1-Click Booking</h3>
              <p>
                Hot leads receive an immediate personalized WhatsApp or SMS with 3 open calendar slots, 
                while sales reps get a 15-minute SLA Slack alert.
              </p>
              <ul className="wf-features">
                <li>Instant WhatsApp &amp; SMS with calendar slots</li>
                <li>Auto-books slot with calendar confirmation</li>
                <li>Slack / Teams alert for sales rep with 15-min SLA</li>
                <li>5-day automated nurture sequence if unbooked</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Supported Ecosystem Badges */}
        <div className="tech-ecosystem-box">
          <h4>Supported Integrations &amp; Infrastructure</h4>
          <div className="tech-tags-list">
            {techStack.map((tech, idx) => (
              <div className="tech-tag" key={idx}>
                <span className="tech-name">{tech.name}</span>
                <span className="tech-badge">{tech.badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action inside video section */}
        <div className="video-cta-bottom text-center">
          <h3>Ready to Deploy This Speed-to-Lead Engine for Your Business?</h3>
          <p className="lead" style={{ margin: "10px auto 26px" }}>
            Stop losing 70%+ of paid ad leads to slow manual follow-ups. Let AI qualify and book your next clients in seconds.
          </p>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <a className="btn btn-primary" href={bookingHref}>
              Book a Strategy Call
            </a>
            <a className="btn btn-ghost" href="#contact">
              Request Custom Workflow Build
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
