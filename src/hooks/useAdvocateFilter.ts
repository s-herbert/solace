import { useState, useMemo } from 'react';
import { Advocate } from '@/types/Advocate';

export const useAdvocateFilter = (advocates: Advocate[]) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAdvocates = useMemo(() => {
    const searchTermLower = searchTerm.toLowerCase();
    return advocates.filter((advocate) => (
      advocate.firstName?.toLowerCase().includes(searchTermLower) ||
      advocate.lastName?.toLowerCase().includes(searchTermLower) ||
      advocate.city?.toLowerCase().includes(searchTermLower) ||
      advocate.degree?.toLowerCase().includes(searchTermLower) ||
      advocate.specialties?.some(specialty =>
        specialty.toLowerCase().includes(searchTermLower)
      )
    ));
  }, [advocates, searchTerm]);

  return { searchTerm, setSearchTerm, filteredAdvocates };
};
