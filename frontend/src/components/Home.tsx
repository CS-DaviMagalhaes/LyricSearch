import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "../App.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-overlay">
        <h1 className="welcome-title">Welcome to Lyric Search!</h1>
        <p className="description">
        Search for a song by writing a piece of it's lyrics
        </p>
        <div className="button-container">
          <Link to="/consulta">
            <button className="consulta-button">Start</button>
          </Link>
          <a
            href="https://github.com/CS-DaviMagalhaes/LyricSearch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github-button">
              <FaGithub size={20} /> GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
