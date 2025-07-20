
import { useLimitedBooks } from "../hooks/useLimitedBooks";
import BookCard from "./ BookCard";


const BooksSection = () => {
  const { books, loading } = useLimitedBooks(8);

  if (loading) return <p className="text-center p-4">Loading books...</p>;

  return (
        <div className=" px-[8px] py-8 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 w-full max-w-6xl">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
