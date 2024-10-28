import { useState } from "react";

const Specialties: React.FC<{
  specialties: string[];
  HighlightCell: ({ content }: { content: string }) => JSX.Element;
}> = ({ specialties, HighlightCell }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const PREVIEW_COUNT = 1;

  if (specialties.length <= PREVIEW_COUNT) {
    return (
      <div className="pl-2">
        {specialties.map((specialty) => (
          <div key={specialty}>
            <HighlightCell content={specialty} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="pl-2">
      {/* Always show the first specialty */}
      <div>
        <HighlightCell content={specialties[0]} />
      </div>
      
      {/* Show remaining specialties when expanded */}
      {isExpanded && (
        <div className="mt-1">
          {specialties.slice(PREVIEW_COUNT).map((specialty) => (
            <div key={specialty}>
              <HighlightCell content={specialty} />
            </div>
          ))}
        </div>
      )}
      
      {/* Toggle button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 hover:text-blue-800 text-sm mt-1 cursor-pointer"
      >
        {isExpanded ? 'Show less...' : `Show ${specialties.length - PREVIEW_COUNT} more...`}
      </button>
    </div>
  );
};

export default Specialties;