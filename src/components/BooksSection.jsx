
import { useLimitedBooks } from "../hooks/useLimitedBooks";
import BookCard from "./ BookCard";


const BooksSection = () => {
  const { books, loading } = useLimitedBooks(6);

  if (loading) return <p className="text-center p-4">Loading books...</p>;

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">📚 Featured Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default BooksSection;
