import { Advocate } from "@/types/Advocate";


interface ResultsTableProps {
  filteredAdvocates: Advocate[];
}

const ResultsTable: React.FC<ResultsTableProps> = ({filteredAdvocates}) => {
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
            <th className="py-3 px-4 text-center">Years of Experience</th>
            <th className="py-3 px-4 text-center">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate) => {
            const key = advocate.firstName + advocate.phoneNumber;
            return (
              <tr key={key} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-2 px-4 text-center">{advocate.firstName}</td>
                <td className="py-2 px-4 text-center">{advocate.lastName}</td>
                <td className="py-2 px-4 text-center">{advocate.city}</td>
                <td className="py-2 px-4 text-center">{advocate.degree}</td>
                <td className="py-2 px-4">
                  {advocate.specialties.map((s) => (
                    <div key={s} className="pl-2">{s}</div>
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