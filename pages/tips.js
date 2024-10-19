// pages/tips.js
import Head from 'next/head';
import Link from 'next/link';

export default function Tips() {
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
        <title>LockedIn - General Tips</title>
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
                <Link className="nav-link" href="/results">Personal Results</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="/tips">General Tips</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container text-center mt-4">
        <h1 className="mt-4">General Tips for Interview Success</h1>
        <p>Use these tips to enhance your interview performance.</p>

        <div className="mt-5">
          <h3>1. Practice speaking without fillers</h3>
          <p>
            Eliminate words like "um", "uh", and "like" from your speech to make a
            stronger impression.
          </p>

          <h3>2. Don't pause for too long</h3>
          <p>Pausing too long is the equivalent of stuttering.</p>

          <h3>3. Speak clearly and slowly</h3>
          <p>
            Don’t rush your answers. Take your time to articulate your thoughts
            clearly.
          </p>

          <h3>4. Prepare answers for common questions</h3>
          <p>
            Have structured answers ready for common interview questions like
            "Tell me about yourself."
          </p>

          <h3>5. Ask meaningful questions</h3>
          <p>
            Prepare questions about the company or role to show your interest.
          </p>
        </div>
      </div>

      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}