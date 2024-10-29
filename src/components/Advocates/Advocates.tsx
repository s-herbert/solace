'use client';

import { useState } from 'react';
import { Advocate } from '@/types/Advocate';
import Search from './Search';
import ResultsTable from './ResultsTable';
import { useAdvocateFilter } from '@/hooks/useAdvocateFilter';
import ErrorState from '../Statuses/ErrorState';

interface AdvocatesProps {
  initialAdvocates: Advocate[];
}



const Advocates: React.FC<AdvocatesProps> = ({ initialAdvocates }) => {
  const { searchTerm, setSearchTerm, filteredAdvocates } = useAdvocateFilter(initialAdvocates);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      {error && <ErrorState message={error} />}
      
      <Search
        advocates={initialAdvocates}
        term={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <ResultsTable 
        filteredAdvocates={filteredAdvocates} 
        term={searchTerm} 
      />
    </>
  );
}

export default Advocates;