/* eslint-disable react/prop-types */
const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
        <p className="text-gray-600 mb-1">Author: {book.author}</p>
        <p className="text-gray-500 mb-1">Category: {book.category}</p>
        <p className="text-yellow-600 font-bold">⭐ {book.rating}/5</p>
      </div>
    </div>
  );
};

export default BookCard;
