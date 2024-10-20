import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router'; // Import useRouter

export default function Home() {
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const showWelcomeMessage = () => {
      const welcomeMessage = document.createElement("div");
      welcomeMessage.className = "alert alert-info";
      welcomeMessage.innerText =
        "Welcome! Let's get ready for your next job interview!";
      document.body.insertBefore(welcomeMessage, document.body.firstChild);

      setTimeout(() => {
        welcomeMessage.remove();
      }, 5000);
    };
    showWelcomeMessage();
  }, []);

  const talkToAI = () => {
    router.push('/chat'); // Navigate to the chat page
  };

  return (
    <>
      <Head>
        <title>LockedIn - Home</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">LockedIn</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/results">Personal Results</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tips">General Tips</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container text-center mt-4">
        <div className="video-container">
          <video controls className="w-100" style={{ maxHeight: '400px' }}>
          <source src="1019(3).mp4" type="video/mp4" />
                      Your browser does not support the video tag.
          </video>
        </div>

        <h1 className="mt-4">Welcome to LockedIn AI Coach!</h1>
        <p>Your personal AI assistant to help you ace job interviews.</p>
        <button id="talkToAI" className="btn btn-primary hover-effect" onClick={talkToAI}>
          Talk to AI
        </button>
        <br></br>
        <h3 className="mt-5">About</h3>
      
        <p>
          Struggling with getting job interviews? Try our interview simulator. See
          if you can pass the challenge. Speak without stuttering (no saying "um",
          "but", "uh", "like", "well", "and yeah"). Speak fluidly. Talk to our sample model.
          We decided to create this due to the amount of recruitments people are aiming for.
          Job interviews can be super nerve-wracking! That’s why we created 
          LockedIn, (Inspired by Linkedin) an AI coach powered by Hume AI that lets you practice with a virtual interviewer. 
          Our platform makes it easy and fun to sharpen your skills, get feedback, and build your 
          confidence—all while simulating real interview situations. We believe everyone deserves 
          a shot at their dream job, and with our AI-powered coach, we’re here to help you get there. 
          Let’s ace those interviews together!
        </p>

        <h3 className="mt-5">How to Use</h3>
        <ol className="text-start mx-auto" style={{ maxWidth: '400px' }}>
          <li>Watch the video</li>
          <li>Practice an interview with our Sample Model</li>
          <li>Compare your score</li>
          <li>Use results to engrain into your subconscious and try again</li>
        </ol>

        <div id="feedback" className="feedback mt-4"></div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}
