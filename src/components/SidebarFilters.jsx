import { Search, Star } from "lucide-react";

const SidebarFilters = () => {
  return (
    <aside className="space-y-8 bg-gradient-to-b from-[#0c4a6e] to-[#164e63] text-white p-5 rounded-xl shadow-xl sticky top-4">
      
      {/* Search by Types */}
      <div>
        <h2 className="font-bold text-xl mb-3 border-b pb-2">Search By Category</h2>
        <div className="space-y-3 text-sm">
          {["All Books", "Academic", "Research Paper", "E-Book", "Magazine"].map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-cyan-500" />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <h2 className="font-bold text-xl mb-3 border-b pb-2">Sort By</h2>
        <div className="space-y-3 text-sm">
          {["Recently Added", "Most Borrowed", "Alphabetical (A-Z)", "Alphabetical (Z-A)"].map((sort) => (
            <label key={sort} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="sort" className="accent-cyan-500" />
              <span>{sort}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Authors */}
      <div>
        <h2 className="font-bold text-xl mb-3 border-b pb-2">By Authors</h2>
        <div className="relative mb-3">
          <Search className="absolute left-3 top-3 text-gray-300" size={18} />
          <input
            type="text"
            placeholder="Search Authors"
            className="w-full pl-10 p-2 rounded-md text-black"
          />
        </div>
        <div className="max-h-32 overflow-y-auto space-y-2 text-sm bg-white p-3 rounded-lg text-black">
          {["Solaiman Shipon", "Shipon Rahman", "Himel", "Saleha"].map((author) => (
            <label key={author} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-cyan-500" />
              <span>{author}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Department Wise */}
      <div>
        <h2 className="font-bold text-xl mb-3 border-b pb-2">By Department</h2>
        <div className="max-h-32 overflow-y-auto space-y-2 text-sm bg-white p-3 rounded-lg text-black">
          {["CSE", "EEE", "BBA", "English", "Law", "Pharmacy"].map((dept) => (
            <label key={dept} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-cyan-500" />
              <span>{dept}</span>
            </label>
          ))}
        </div>
      </div>


      {/* Ratings */}
      <div>
        <h2 className="font-bold text-xl mb-3 border-b pb-2">Ratings</h2>
        <div className="space-y-2 text-sm">
          {[5,4,3,2,1].map((rating) => (
            <label key={rating} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="rating" className="accent-cyan-500" />
              <div className="flex text-yellow-400">
                {Array.from({length: rating}).map((_, i) => (
                  <Star key={i} size={16} fill="yellow" />
                ))}
              </div>
            </label>
          ))}
        </div>
      </div>

    </aside>
  );
};

export default SidebarFilters;
