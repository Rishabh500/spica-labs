import React from 'react';

const steps = [
  {
    num: "01",
    title: "Understand",
    description: "We learn how your business operates, where time is being lost, and what needs improvement."
  },
  {
    num: "02",
    title: "Identify",
    description: "We identify practical AI and automation opportunities based on business value, feasibility, and expected impact."
  },
  {
    num: "03",
    title: "Build",
    description: "We develop and integrate a solution around your workflows, existing tools, and requirements."
  },
  {
    num: "04",
    title: "Improve",
    description: "We monitor performance, gather feedback, and refine the solution as your business evolves."
  }
];

export function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="sec-head">
          <h2>From Business Problem to Working Solution.</h2>
        </div>
        <ol className="steps" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {steps.map((s, idx) => (
            <li className="step" key={idx}>
              <div className="n">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
