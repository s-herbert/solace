"use client";

import ResultsTable from "@/components/Advocates/ResultsTable";
import Search from "@/components/Advocates/Search";
import { Advocate } from "@/types/Advocate";
import { useEffect, useState } from "react";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);

  useEffect(() => {
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      }).catch((err) => console.log('JSON err: ', err));
    }).catch((err) => console.log('Fetch error: ', err));
  }, []);

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Solace Advocates</h1>
        <Search advocates={advocates} setFilteredAdvocates={setFilteredAdvocates} term={searchTerm} setSearchTerm={setSearchTerm} />
        <ResultsTable filteredAdvocates={filteredAdvocates} term={searchTerm} />
      </div>
    </main>
  );
}
