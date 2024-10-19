// pages/results.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Results() {
  const [score, setScore] = useState('');
  const [feedback, setFeedback] = useState('');

  const evaluateScore = () => {
    let message;
    if (score < 3) {
      message = "You may need more practice. Focus on clarity and eliminating filler words.";
    } else if (score < 7) {
      message = "Good job! Keep practicing to refine your speaking skills.";
    } else {
      message = "Excellent! You're well on your way to acing those interviews!";
    }
    setFeedback(message);
  };

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <title>LockedIn - Personal Results</title>
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">LockedIn</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="/results">Personal Results</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/tips">General Tips</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container text-center mt-5">
        <h1>Your Personal Interview Results</h1>
        <p>Enter your speaking score and get personalized feedback.</p>

        <h2>Your Score</h2>
        <input
          type="number"
          id="scoreInput"
          className="form-control"
          min="0"
          max="10"
          placeholder="Enter your score (0-10)"
          style={{ width: '300px', margin: '0 auto' }}
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button className="btn btn-secondary mt-3" onClick={evaluateScore}>
          Submit Score
        </button>

        {feedback && (
          <div id="feedback" className="feedback mt-4">{feedback}</div>
        )}
        <img 
          src="https://images.javatpoint.com/javascriptpages/images/random-image-generator-in-javascript7.png" 
          alt="Personal Results" 
          className="result-image"
        />
      </div>

      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}
