import { Advocate } from "@/types/Advocate";
import { useCallback } from "react";
import Specialties from "./Specialties";

interface ResultsTableProps {
  filteredAdvocates: Advocate[];
  term: string;
}

// This component will highlight search terms.
const Highlight: React.FC<{ text: string; term: string }> = ({ text, term }) => {
  if (!term.trim()) return <>{text}</>;
  const parts = text.split(new RegExp(`(${term})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === term.toLowerCase() ? (
          <span key={i} className="bg-yellow-200 font-medium">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};


const ResultsTable: React.FC<ResultsTableProps> = ({ filteredAdvocates, term }) => {
  const HighlightCell = useCallback(
    ({ content }: { content: string }) => (
      <Highlight text={content} term={term} />
    ),
    [term]
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-3 px-4 text-center">First</th>
            <th className="py-3 px-4 text-center">Last</th>
            <th className="py-3 px-4 text-center">City</th>
            <th className="py-3 px-4 text-center">Degree</th>
            <th className="py-3 px-4 text-left">Specialties</th>
            <th className="py-3 px-2 text-center">Years of Experience</th>
            <th className="py-3 px-4 text-center">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate) => {
            const key = advocate.id;
            return (
              <tr key={key} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-2 px-4 text-center">
                  <HighlightCell content={advocate.firstName} />
                </td>
                <td className="py-2 px-4 text-center">
                  <HighlightCell content={advocate.lastName} />
                </td>
                <td className="py-2 px-4 text-center">
                  <HighlightCell content={advocate.city} />
                </td>
                <td className="py-2 px-4 text-center">
                  <HighlightCell content={advocate.degree} />
                </td>
                <td className="py-2 px-4">
                  <Specialties
                    specialties={advocate.specialties}
                    HighlightCell={HighlightCell}
                  />
                </td>
                <td className="py-2 px-4 text-center">{advocate.yearsOfExperience}</td>
                <td className="py-2 px-4 text-center">{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;