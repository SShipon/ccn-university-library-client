// import BooksSection from "./BooksSection";
import BookList from "./BookList";
import SidebarFilters from "./SidebarFilters";

const BooksPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Sidebar */}
      <div className="md:col-span-1 py-4">
        <SidebarFilters />
      </div>

      {/* Books */}
      <div className="md:col-span-3">
        {/* <BooksSection /> */}
         <BookList />
      </div>
    </div>
  );
};

export default BooksPage;
