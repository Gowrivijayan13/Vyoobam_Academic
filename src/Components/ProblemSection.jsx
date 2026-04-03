import React, { useEffect, useRef, useState } from "react";
import "./ProblemSection.css";

// Import your images here:
import sadImg from "../assets/before.png";
import happyImg from "../assets/after.png";


const ProblemSection = () => {
  const [phase, setPhase] = useState("sad"); 
  const intervalRef = useRef(null);

  useEffect(() => {
    // Replicate the video's before/after animation loop
    const cycle = () => {
      setPhase("sad");
      setTimeout(() => setPhase("transitioning"), 2800);
      setTimeout(() => setPhase("happy"), 3400);
      setTimeout(() => setPhase("sad"), 6800);
    };

    cycle();
    intervalRef.current = setInterval(cycle, 7200);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="problem-section">
      <div className="problem-inner">
        {/* ── LEFT: Animated Before / After Cards ── */}
        <div className="ps-left">
          <div className={`ps-image-stage ${phase}`}>
            {/* SAD card */}
            <div className="ps-img-card ps-img-sad">
              <img src={sadImg} alt="Student struggling" />
              <div className="ps-img-label ps-label-before">
                <span className="ps-dot ps-dot-red" />
                Before Vyoobam Tech
              </div>
            </div>

            {/* HAPPY card */}
            <div className="ps-img-card ps-img-happy">
              <img src={happyImg} alt="Student with offer letter" />
              <div className="ps-img-label ps-label-after">
                <span className="ps-dot ps-dot-green" />
                After Vyoobam Tech
              </div>
            </div>

            {/* Glow pulse on transition */}
            <div className="ps-transition-burst" />
          </div>

          {/* Floating badge */}
          <div className="ps-badge">
            <span className="ps-badge-icon"></span>
            <span>Real Results, Real Careers</span>
          </div>
        </div>

        {/* ── RIGHT: Content Card ── */}
        <div className="ps-right">
          <div className="problem-card">
            <div className="ps-tag">The Hard Truth</div>

            <h2 className="problem-heading">
              Why Your Degree Alone{" "}
              <span className="ps-gradient-text">Isn't Enough</span>
            </h2>

            <p className="problem-content">
              Graduating with theory alone is no longer sufficient. Employers
              today are looking for <strong>practical skills</strong>,{" "}
              <strong>confidence</strong>, and{" "}
              <strong>hands-on experience</strong> to succeed in the modern
              workplace.
            </p>

            <ul className="problem-list">
              <li>
                <span className="ps-icon"></span>
                Struggle in interviews with no real projects
              </li>
              <li>
                <span className="ps-icon"></span>
                Lack confidence when it matters most
              </li>
              <li>
                <span className="ps-icon"></span>
                Miss out on top job opportunities
              </li>
            </ul>

            <a href="/courses" className="ps-cta-btn">
              <span>Explore Courses</span>
              <svg
                className="ps-btn-arrow"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;