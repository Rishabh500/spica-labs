import React, { useState } from 'react';

const STAGE_NAMES = [
  "Customer Inquiry",
  "AI Understands the Request",
  "Smart Lead Qualification",
  "Personalized Follow-Up",
  "Follow-Up Ready"
];

const INITIAL_RULES = [
  { label: "Budget stated", checked: true },
  { label: "Location stated", checked: true },
  { label: "Specific requirement stated", checked: true },
  { label: "Preferred date given", checked: false }
];

const EXTRACTED_DATA = {
  req: "Consultation booking",
  loc: "Online",
  bud: "Up to $150",
  pref: "Weekday mornings",
  intent: "Ready to book"
};

const DEFAULT_MSG = "Hi! Thanks for your interest in booking a consultation. I'll help you find options within your budget. Which date works best for you?";

export function WorkflowDemo() {
  const [stage, setStage] = useState(0);
  const [channel, setChannel] = useState("form"); // "form" | "voice"
  const [rules, setRules] = useState(INITIAL_RULES);
  const [message, setMessage] = useState(DEFAULT_MSG);

  const score = rules.filter(r => r.checked).length;
  const getPriority = () => {
    if (score >= 3) return { label: "High priority", badgeClass: "hi" };
    if (score === 2) return { label: "Medium priority", badgeClass: "" };
    return { label: "Low priority", badgeClass: "lo" };
  };

  const handleRuleToggle = (index) => {
    setRules(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], checked: !updated[index].checked };
      return updated;
    });
  };

  const handleNext = () => {
    if (stage < 4) {
      setStage(stage + 1);
    } else {
      setStage(0);
      setMessage(DEFAULT_MSG);
    }
  };

  const handlePrev = () => {
    if (stage > 0) {
      setStage(stage - 1);
    }
  };

  const priority = getPriority();
  const missingRules = rules
    .filter(r => !r.checked)
    .map(r => r.label.replace(" given", "").replace(" stated", "").toLowerCase());

  // Activity timeline steps
  const timelineSteps = [
    channel === "voice" ? "Call answered and transcribed" : "Inquiry received",
    "Details extracted",
    "Priority suggested",
    "Reply drafted",
    "Task and appointment request proposed"
  ];

  const crmStatusLabels = ["", "Summarised", "Qualified", "Draft ready", "Ready for review"];

  return (
    <section className="demo" id="demo">
      <div className="wrap">
        <div className="sec-head">
          <h2>See an AI Workflow in Action.</h2>
          <p className="lead">
            An illustrative example of AI-powered inquiry handling and booking follow-up. Step through it, tick the rules, and edit the message.
          </p>
        </div>

        {/* SVG Pipeline Diagram */}
        <div className="chartwrap">
          <svg
            viewBox="0 0 1020 200"
            role="img"
            aria-label="Flowchart: customer inquiry, AI extracts details, rules qualify the lead and flag missing details, a personalised reply is drafted, then a person reviews before anything is sent or booked."
            id="flow"
          >
            <defs>
              <marker id="ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0L8 4L0 8z" fill="#60A5FA" />
              </marker>
            </defs>

            {/* Connecting arrows */}
            <path className="ar" d="M160 75 H216" markerEnd="url(#ah)" />
            <path className="ar" d="M372 75 H428" markerEnd="url(#ah)" />
            <path className="ar" d="M584 75 H640" markerEnd="url(#ah)" />
            <path className="ar" d="M796 75 H852" markerEnd="url(#ah)" />
            <path className="ar br" d="M509 120 V165 H721 V114" markerEnd="url(#ah)" />
            <text className="tl2" x="615" y="185" textAnchor="middle">Missing details? Ask for them in the reply</text>
            <path className="ar" d="M85 130 V116" markerEnd="url(#ah)" />

            {/* Node: Voice Agent */}
            <g className={`cn ${channel === "voice" && stage === 0 ? "on" : ""}`} id="cnv">
              <rect x="10" y="130" width="150" height="52" rx="12" />
              <g className="ic" transform="translate(20 141) scale(.75)">
                <rect x="9" y="3" width="6" height="11" rx="3" />
                <path d="M5 11a7 7 0 0014 0M12 18v3" />
              </g>
              <text className="t" x="85" y="153" textAnchor="middle">Voice agent</text>
              <text className="tl2" x="85" y="171" textAnchor="middle">Answers calls</text>
            </g>

            {/* Node 01: Customer Inquiry */}
            <g className={`cn ${stage === 0 ? "on" : stage > 0 ? "done" : ""}`} id="cn0">
              <text className="tl2" x="85" y="20" textAnchor="middle">Website form or call</text>
              <rect x="10" y="40" width="150" height="70" rx="12" />
              <g className="ic" transform="translate(22 47) scale(.75)">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </g>
              <text className="n" x="85" y="64" textAnchor="middle">01</text>
              <text className="t" x="85" y="86" textAnchor="middle">Customer inquiry</text>
            </g>

            {/* Node 02: AI Understands */}
            <g className={`cn ${stage === 1 ? "on" : stage > 1 ? "done" : ""}`} id="cn1">
              <text className="tl2" x="297" y="20" textAnchor="middle">AI summary</text>
              <rect x="222" y="40" width="150" height="70" rx="12" />
              <g className="ic" transform="translate(234 47) scale(.75)">
                <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
              </g>
              <text className="n" x="297" y="64" textAnchor="middle">02</text>
              <text className="t" x="297" y="86" textAnchor="middle">AI understands</text>
            </g>

            {/* Node 03: Qualify Lead */}
            <g className={`cn ${stage === 2 ? "on" : stage > 2 ? "done" : ""}`} id="cn2">
              <text className="tl2" x="509" y="20" textAnchor="middle">Business rules</text>
              <path d="M509 30 L584 75 L509 120 L434 75 Z" />
              <g className="ic" transform="translate(501 34) scale(.75)">
                <path d="M3 5h18l-7 8v6l-4-2v-4z" />
              </g>
              <text className="n" x="509" y="64" textAnchor="middle">03</text>
              <text className="t" x="509" y="86" textAnchor="middle">Qualify lead</text>
            </g>

            {/* Node 04: Personalised reply */}
            <g className={`cn ${stage === 3 ? "on" : stage > 3 ? "done" : ""}`} id="cn3">
              <text className="tl2" x="721" y="20" textAnchor="middle">WhatsApp / Email</text>
              <rect x="646" y="40" width="150" height="70" rx="12" />
              <g className="ic" transform="translate(658 47) scale(.75)">
                <path d="M4 5h16v11H9l-5 4z" />
              </g>
              <text className="n" x="721" y="64" textAnchor="middle">04</text>
              <text className="t" x="721" y="86" textAnchor="middle">Personalised reply</text>
            </g>

            {/* Node 05: Ready for review */}
            <g className={`cn ${stage === 4 ? "on" : stage > 4 ? "done" : ""}`} id="cn4">
              <text className="tl2" x="933" y="20" textAnchor="middle">CRM / Calendar</text>
              <rect x="858" y="40" width="150" height="70" rx="12" />
              <g className="ic" transform="translate(870 47) scale(.75)">
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12l3 3 5-6" />
              </g>
              <text className="n" x="933" y="64" textAnchor="middle">05</text>
              <text className="t" x="933" y="86" textAnchor="middle">Ready for review</text>
            </g>
          </svg>
        </div>

        {/* Two-panel Grid: Stage Controller + Live CRM View */}
        <div className="dgrid">
          {/* Left Panel: Workflow Stages */}
          <div className="panel">
            <div className="rail" role="tablist" aria-label="Workflow stages">
              {STAGE_NAMES.map((name, i) => (
                <button
                  key={i}
                  role="tab"
                  className={i === stage ? "on" : i < stage ? "done" : ""}
                  aria-selected={i === stage}
                  onClick={() => setStage(i)}
                >
                  <b>0{i + 1}</b>
                  <span>{name}</span>
                </button>
              ))}
            </div>

            <div className="stage" aria-live="polite">
              {stage === 0 && (
                <div>
                  <h3>01. Customer Inquiry</h3>
                  <p className="d">A customer submits a website form, or speaks to the AI voice agent by phone.</p>
                  <div className="seg" role="group" aria-label="Inquiry channel">
                    <button
                      type="button"
                      aria-pressed={channel === "form"}
                      onClick={() => setChannel("form")}
                    >
                      Website form
                    </button>
                    <button
                      type="button"
                      aria-pressed={channel === "voice"}
                      onClick={() => setChannel("voice")}
                    >
                      Voice agent call
                    </button>
                  </div>

                  {channel === "form" ? (
                    <div className="msg">
                      <small>Sample inquiry from Alex Morgan (alex@example.com) via website form</small>
                      Hi, I'd like to book a consultation. Online is fine, my budget is up to $150 and weekday mornings work best. Can you help me find a time?
                    </div>
                  ) : (
                    <div className="msg">
                      <small>Sample call with Alex Morgan, transcribed by the voice agent</small>
                      <b>Agent:</b> Hello, thanks for calling. How can I help?<br />
                      <b>Caller:</b> Hi, I'd like to book a consultation. Online is fine, my budget is up to $150 and weekday mornings work best.<br />
                      <b>Agent:</b> Thanks. I'll pass your details to the team so they can find a time. Could I take your name and number?
                    </div>
                  )}
                  <p className="fine">
                    Today, someone has to read this, work out what's needed, write a reply, update records, find a time and remember to follow up.
                  </p>
                </div>
              )}

              {stage === 1 && (
                <div>
                  <h3>02. AI Understands the Request</h3>
                  <p className="d">The AI extracts the important details and prepares a concise summary.</p>
                  <div className="fields">
                    <div className="fld">
                      <small>Requirement</small>
                      <span>{EXTRACTED_DATA.req}</span>
                    </div>
                    <div className="fld">
                      <small>Location</small>
                      <span>{EXTRACTED_DATA.loc}</span>
                    </div>
                    <div className="fld">
                      <small>Budget</small>
                      <span>{EXTRACTED_DATA.bud}</span>
                    </div>
                    <div className="fld">
                      <small>Preference</small>
                      <span>{EXTRACTED_DATA.pref}</span>
                    </div>
                    <div className="fld wide">
                      <small>Intent</small>
                      <span>{EXTRACTED_DATA.intent}</span>
                    </div>
                    <div className="fld wide">
                      <small>Summary</small>
                      <span>Wants to book an online consultation, up to $150, on weekday mornings. No specific date yet.</span>
                    </div>
                  </div>
                </div>
              )}

              {stage === 2 && (
                <div>
                  <h3>03. Smart Lead Qualification</h3>
                  <p className="d">
                    The workflow checks the details against configurable business rules and flags what's missing. Try changing the rules.
                  </p>
                  <ul className="rules">
                    {rules.map((r, i) => (
                      <li key={i}>
                        <label>
                          <input
                            type="checkbox"
                            checked={r.checked}
                            onChange={() => handleRuleToggle(i)}
                          />
                          {r.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                  <div className="rec">
                    <span className={`badge ${priority.badgeClass}`}>{priority.label}</span>
                    {score} of 4 demo rules met
                    {missingRules.length ? `. Missing: ${missingRules.join(", ")}.` : "."}
                  </div>
                  <p className="fine">
                    Priority here uses illustrative demo rules (3 or more met = high). It is not a validated prediction.
                  </p>
                </div>
              )}

              {stage === 3 && (
                <div>
                  <h3>04. Personalized Follow-Up</h3>
                  <p className="d">The AI drafts a reply based on the request. Edit it, then preview.</p>
                  <label htmlFor="mt">Draft message</label>
                  <textarea
                    id="mt"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div className="bubble">{message}</div>
                  <p className="fine">
                    Preview only. This message has not been sent. The same reply could go by WhatsApp, email, or a voice agent callback.
                  </p>
                </div>
              )}

              {stage === 4 && (
                <div>
                  <h3>05. Follow-Up Ready</h3>
                  <p className="d">Proposed next actions, ready for a person to review.</p>
                  <ul className="acts">
                    <li>Save the inquiry to the lead list<span className="badge">Proposed</span></li>
                    <li>Create a follow-up task<span className="badge">Proposed</span></li>
                    <li>Prepare an appointment request<span className="badge">Proposed</span></li>
                    <li>Offer a voice agent callback (optional)<span className="badge">Proposed</span></li>
                    <li>Flag the inquiry for the sales team<span className="badge">Proposed</span></li>
                  </ul>
                  <div className="final">Workflow completed. Follow-up ready for review.</div>
                  <p className="fine">
                    No message has been sent, no call has been made and no appointment has been booked.
                  </p>
                </div>
              )}
            </div>

            <div className="ctl">
              <button
                className="btn btn-ghost"
                disabled={stage === 0}
                style={{ opacity: stage === 0 ? 0.5 : 1 }}
                onClick={handlePrev}
              >
                Back
              </button>
              <button className="btn btn-primary" onClick={handleNext}>
                {stage === 4 ? "Restart demo" : "Next stage"}
              </button>
            </div>
          </div>

          {/* Right Panel: Simulated CRM View */}
          <div className="panel">
            <div className="crm-bar">
              <svg viewBox="0 0 30 30" aria-hidden="true">
                <rect width="30" height="30" rx="8" fill="#2A1F5C" />
                <rect x="7" y="8" width="16" height="3" rx="1" fill="#A78BFA" />
                <rect x="7" y="13.500" width="16" height="3" rx="1" fill="#60A5FA" />
                <rect x="7" y="19" width="16" height="3" rx="1" fill="#A78BFA" opacity="0.7" />
              </svg>
              Lead list
              <span>Demo CRM view</span>
            </div>
            <div className="crm" aria-live="polite">
              {stage === 0 ? (
                <div className="empty">Inquiry received. Waiting for the workflow to process it.</div>
              ) : (
                <>
                  <div>
                    <h4>Lead</h4>
                    <div className="row live">
                      <div className="top">
                        <span>
                          Alex Morgan <small style={{ color: "var(--muted)", fontWeight: 500 }}>(sample)</small>
                        </span>
                        <span className={`badge ${stage >= 4 ? "ok" : ""}`}>
                          {crmStatusLabels[stage]}
                        </span>
                      </div>
                      <div className="meta">
                        {EXTRACTED_DATA.req} · {EXTRACTED_DATA.loc} · {EXTRACTED_DATA.bud}
                      </div>
                      {stage >= 2 && (
                        <div>
                          <span className={`badge ${priority.badgeClass}`}>{priority.label}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4>Activity</h4>
                    <ul className="tl">
                      {timelineSteps.map((stepText, idx) => (
                        <li key={idx} className={idx <= stage ? "on" : ""}>
                          {stepText}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {stage === 4 && (
                    <div>
                      <h4>Follow-up task (proposed)</h4>
                      <div className="row">
                        <div className="top">
                          <span>Review and send reply to Alex</span>
                          <span className="badge">Proposed</span>
                        </div>
                        <div className="meta">
                          Appointment request prepared, not booked. Not saved to a real CRM in this demo.
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <p className="fine">
          Demo only. Sample data is invented for illustration. Priority comes from simple demo rules, not a validated prediction. Nothing here sends a message, places a call, books an appointment, or saves data.
        </p>
      </div>
    </section>
  );
}
