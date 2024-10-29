import { Advocate } from "@/types/Advocate";
import { useEffect, useState } from "react";

export const useAdvocates = () => {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdvocates = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/advocates");
        const data = await response.json();
        setAdvocates(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch advocates');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAdvocates();
  }, []);

  return { advocates, isLoading, error };
};