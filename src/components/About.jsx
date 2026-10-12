import React from 'react';

const principles = [
  {
    title: "Practical by design",
    description: "Focus on solving real problems instead of adopting AI for its own sake."
  },
  {
    title: "Works with your tools",
    description: "Integrate with your existing software and workflows where technically feasible."
  },
  {
    title: "Built for real use",
    description: "Consider reliability, security, human oversight, and maintainability from the beginning."
  },
  {
    title: "Focused on business value",
    description: "Define success using meaningful outcomes such as time saved, faster response, and reduced manual effort."
  },
  {
    title: "Designed to evolve",
    description: "Start with a focused solution and expand as your needs change."
  }
];

export function About() {
  return (
    <section className="why" id="about">
      <div className="wrap why-grid">
        <div>
          <h2>AI Built Around Your Business.</h2>
          <p className="lead" style={{ marginTop: '16px' }}>
            SpicaLabs.ai is an AI solutions company for growing businesses. We start with the problem, not the technology.
          </p>
        </div>
        <div className="principles">
          {principles.map((pr, idx) => (
            <div className="pr" key={idx}>
              <h3>{pr.title}</h3>
              <p>{pr.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
