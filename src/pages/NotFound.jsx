import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <div className="error-number">404</div>

        <div className="error-icon">📚</div>

        <h1>Page Not Found</h1>

        <p>
          Oops! The page you're looking for doesn't exist.
        </p>

        <div className="invalid-url">
          <span>Invalid URL:</span>
          <strong>{location.pathname}</strong>
        </div>

        <Link to="/" className="primary-btn">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;