import { Advocate } from "@/types/Advocate";
import { useCallback } from "react";


interface ResultsTableProps {
  filteredAdvocates: Advocate[];
  term: string;
}

// This component will highlight search terms.
const Highlight: React.FC<{ text: string; term: string }> = ({ text, term }) => {
  if (!term.trim()) return <>{text}</>;

  //split text based on search term
  const parts = text.split(new RegExp(`(${term})`, 'gi'));

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === term.toLowerCase() ? (
          // i as key is not ideal, but as this is rebuilt as the term change, and we arent re-ordering, it should be okay.
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
      <table className="min-w-full ">
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
            const key = advocate.firstName + advocate.phoneNumber;
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
                  {advocate.specialties.map((specialty) => (
                    <div key={specialty} className="pl-2">
                      <HighlightCell content={specialty} />
                    </div>
                  ))}
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

}

export default ResultsTable;