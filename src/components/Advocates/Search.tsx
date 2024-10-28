
import { Advocate } from "@/types/Advocate";
import { Dispatch, SetStateAction, useState } from "react";

interface SearchProps {
  advocates: Advocate[];
  term: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setFilteredAdvocates: Dispatch<SetStateAction<Advocate[]>>;
}

const Search: React.FC<SearchProps> = ({ advocates, setFilteredAdvocates, setSearchTerm, term }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;

    setSearchTerm(searchTerm);
    const searchTermLower = searchTerm.toLowerCase();
    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        advocate.firstName?.toLowerCase().includes(searchTermLower) ||
        advocate.lastName?.toLowerCase().includes(searchTermLower) ||
        advocate.city?.toLowerCase().includes(searchTermLower) ||
        advocate.degree?.toLowerCase().includes(searchTermLower) ||
        advocate.specialties?.some(specialty =>
          specialty.toLowerCase().includes(searchTermLower)
        )
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const resetClick = () => {
    setSearchTerm('');
    setFilteredAdvocates(advocates);
  };


  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-6">
      <p>Search Advocates</p>
      <label htmlFor="search-term">
        Filtered by: <span>{term}</span>
      </label>
      <input
        placeholder="Advocate name, specialty, location..."
        onChange={handleSearch}
        name="search"
        id="search-term"
        value={term}
        className="rounded-md border border-gray-300 w-full max-w-2xl block"
      />
      <button className="mt-2 px-2 py-1 bg-gray-100 rounded-md border border-gray-300" onClick={resetClick}>Reset</button>
    </div>
  );
}

export default Search;