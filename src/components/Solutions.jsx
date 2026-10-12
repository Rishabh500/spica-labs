import React from 'react';

const solutionsData = [
  {
    title: "AI Automation",
    description: "Eliminate repetitive work and connect your business workflows.",
    icon: (
      <svg className="icon" viewBox="0 0 44 44" fill="none" strokeWidth="1.6" aria-hidden="true">
        <rect x="4" y="4" width="14" height="14" rx="3" stroke="#3B82F6" />
        <rect x="26" y="26" width="14" height="14" rx="3" stroke="#8B5CF6" />
        <path d="M18 11h8a4 4 0 014 4v11" stroke="#60A5FA" />
      </svg>
    ),
    items: [
      "Business process automation",
      "Lead capture and follow-up",
      "WhatsApp and email automation",
      "Appointment scheduling and reminders",
      "Document processing and data extraction",
      "CRM, calendar, and software integrations"
    ],
    outcomes: "Less manual work, faster responses, fewer missed opportunities."
  },
  {
    title: "AI Agents",
    description: "Build AI assistants that can understand requests, use business tools, and help your team get work done.",
    icon: (
      <svg className="icon" viewBox="0 0 44 44" fill="none" strokeWidth="1.6" aria-hidden="true">
        <circle cx="22" cy="22" r="6" stroke="#3B82F6" />
        <circle cx="8" cy="10" r="3.5" stroke="#8B5CF6" />
        <circle cx="36" cy="10" r="3.5" stroke="#8B5CF6" />
        <circle cx="22" cy="38" r="3.5" stroke="#8B5CF6" />
        <path d="M11 12l7 6M33 12l-7 6M22 28v7" stroke="#60A5FA" />
      </svg>
    ),
    items: [
      "Customer support assistants",
      "Sales and lead qualification agents",
      "Internal knowledge assistants",
      "Operations assistants",
      "Research and information-gathering agents"
    ],
    outcomes: "Faster service, better access to information, and more efficient workflows."
  },
  {
    title: "Custom AI Solutions",
    description: "Build AI-powered applications tailored to your business requirements.",
    icon: (
      <svg className="icon" viewBox="0 0 44 44" fill="none" strokeWidth="1.6" aria-hidden="true">
        <path d="M22 4l16 9v18l-16 9-16-9V13z" stroke="#3B82F6" />
        <path d="M22 4v36M6 13l32 18M38 13L6 31" stroke="#8B5CF6" opacity="0.6" />
      </svg>
    ),
    items: [
      "Custom AI applications",
      "Knowledge assistants over company documents",
      "Intelligent document analysis",
      "Internal business tools and dashboards",
      "AI-powered search and information retrieval",
      "Integration with existing business systems"
    ],
    outcomes: "Better access to business information, more informed decisions, and solutions built around specific operational needs."
  }
];

export function Solutions() {
  return (
    <section id="solutions">
      <div className="wrap">
        <div className="sec-head">
          <h2>Practical AI. Real Business Impact.</h2>
          <p className="lead">
            From automating repetitive tasks to building intelligent business applications, we turn AI opportunities into solutions your team can actually use.
          </p>
        </div>
        <div className="cards">
          {solutionsData.map((sol, index) => (
            <article className="card" key={index}>
              {sol.icon}
              <h3>{sol.title}</h3>
              <p className="d">{sol.description}</p>
              <ul>
                {sol.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="out">
                <b>Outcomes:</b> {sol.outcomes}
              </p>
              <a className="more" href="#contact">
                Explore Solutions <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
