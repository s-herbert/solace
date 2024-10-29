import { Advocate } from "@/types/Advocate";
import { Dispatch, SetStateAction } from "react";

interface SearchProps {
  advocates: Advocate[];
  term: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ advocates, setSearchTerm, term }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleReset = () => {
    setSearchTerm('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
      <div className="flex items-center gap-4">
        <label htmlFor="search-term" className="whitespace-nowrap font-medium text-gray-700">
          Search Advocates:
        </label>
        <input
          placeholder="Advocate name, specialty, location..."
          onChange={handleSearch}
          name="search"
          id="search-term"
          value={term}
          className="rounded-md border border-gray-300 w-full max-w-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button 
          className="px-2 py-2 bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-200 transition-colors" 
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      {term && (
        <p className="text-sm text-gray-600">
          Filtering by: <span className="font-medium">{term}</span>
        </p>
      )}
    </div>
  );
}

export default Search;