import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

// Application routes connect the Home, Browse, Details, Add Book and 404 pages.

function App() {
  const location = useLocation();

  // Hide the Navbar on the 404 page as required by the assignment.
  const isNotFound =
    !["/", "/books", "/add-book"].includes(location.pathname) &&
    !location.pathname.startsWith("/book/") &&
    !location.pathname.startsWith("/books/");

  return (
    <>
      {!isNotFound && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books" element={<BrowseBooks />} />

        <Route path="/books/:category" element={<BrowseBooks />} />

        <Route path="/book/:id" element={<BookDetails />} />

        <Route path="/add-book" element={<AddBook />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;