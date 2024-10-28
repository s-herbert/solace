import { Advocate } from "@/app/page";
import { Dispatch, SetStateAction, useState } from "react";

interface SearchProps {
  advocates: Advocate[];
  setFilteredAdvocates: Dispatch<SetStateAction<Advocate[]>>;
}

const Search: React.FC<SearchProps> = ({ advocates, setFilteredAdvocates }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;

    setSearchTerm(searchTerm);

    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        advocate.firstName?.includes(searchTerm) ||
        advocate.lastName?.includes(searchTerm) ||
        advocate.city?.includes(searchTerm) ||
        advocate.degree?.includes(searchTerm) ||
        advocate.specialties?.includes(searchTerm)
      );
    });
    console.log("filtering advocates...", filteredAdvocates);

    setFilteredAdvocates(filteredAdvocates);
  };

  const resetClick = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
  };


  return (
    <div>
      <p>Search</p>
      <p>
        Searching for: <span id="search-term">{searchTerm}</span>
      </p>
      <input style={{ border: "1px solid black" }} onChange={handleSearch} name="search" />
      <button onClick={resetClick}>Reset Search</button>
    </div>
  );

}

export default Search;