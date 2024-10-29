"use client";

import ResultsTable from "@/components/Advocates/ResultsTable";
import Search from "@/components/Advocates/Search";
import { useAdvocates } from "@/hooks/useAdvocate";
import { useAdvocateFilter } from "@/hooks/useAdvocateFilter";

const LoadingState = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
  </div>
);

interface ErrorStateProps {
  message: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message }) => (
  <div className="text-center p-8">
    <p className="text-red-600">Error: {message}</p>
  </div>
);

export default function Home() {
  const { advocates, isLoading, error } = useAdvocates();
  const { searchTerm, setSearchTerm, filteredAdvocates } = useAdvocateFilter(advocates);

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Solace Advocates</h1>

        {error && <ErrorState message={error} />}

        {isLoading ? (
          <LoadingState />
        ) : (
          <>
            <Search
              advocates={advocates}
              term={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <ResultsTable
              filteredAdvocates={filteredAdvocates}
              term={searchTerm}
            />
          </>
        )}
      </div>
    </main>
  );
}

