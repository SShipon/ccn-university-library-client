
import { useLimitedBooks } from "../hooks/useLimitedBooks";
import BookCard from "./ BookCard";


const BooksSection = () => {
  const { books, loading } = useLimitedBooks(6);

  if (loading) return <p className="text-center p-4">Loading books...</p>;

  return (
        <div className=" bg-gray-100 dark:bg-black px-[10px] py-10 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-5xl">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
