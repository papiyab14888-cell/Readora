import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

function Home() {
  const books = useSelector((state) => state.books);

  const categories = [
    { name: "Fiction", icon: "📖" },
    { name: "Non-Fiction", icon: "🧠" },
    { name: "Sci-Fi", icon: "🚀" },
    { name: "Romance", icon: "💕" },
    { name: "Mystery", icon: "🔍" }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">WELCOME TO READORA</p>

          <h1>
            Your next great
            <span> story</span> awaits.
          </h1>

          <p>
            Explore a world of imagination, knowledge and unforgettable
            stories. Find your next favourite book today.
          </p>

          <Link to="/books" className="primary-btn">
            Explore Books →
          </Link>
        </div>

        <div className="hero-icon">📚</div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="section-heading">
          <p>EXPLORE</p>
          <h2>Browse by Category</h2>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/books/${category.name}`}
              className="category-card"
            >
              <span>{category.icon}</span>
              <h3>{category.name}</h3>
              <small>Explore books →</small>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Books */}
      <section className="section popular-section">
        <div className="section-heading">
          <p>READERS' CHOICE</p>
          <h2>Popular Books</h2>
        </div>

        <div className="book-grid">
          {books.slice(0, 4).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <div className="center-btn">
          <Link to="/books" className="secondary-btn">
            View All Books →
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;