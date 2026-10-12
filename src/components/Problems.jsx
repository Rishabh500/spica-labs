import React from 'react';

const problems = [
  {
    title: "Too much repetitive work",
    description: "Automate routine administrative tasks."
  },
  {
    title: "Missed leads and follow-ups",
    description: "Capture inquiries and maintain consistent follow-up."
  },
  {
    title: "Disconnected software",
    description: "Connect tools and eliminate manual data transfer."
  },
  {
    title: "Slow customer responses",
    description: "Provide faster assistance across supported channels."
  },
  {
    title: "Scattered business knowledge",
    description: "Make company information easier to search and use."
  },
  {
    title: "Manual reporting",
    description: "Streamline data collection and reporting workflows."
  }
];

export function Problems() {
  return (
    <section className="problems">
      <div className="wrap">
        <div className="sec-head">
          <h2>Where Can AI Make a Difference?</h2>
        </div>
        <div className="pgrid">
          {problems.map((p, idx) => (
            <div className="p" key={idx}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
