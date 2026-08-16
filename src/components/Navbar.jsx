import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        📚 Readora
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/books">Browse Books</Link>
        <Link to="/add-book">Add Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;