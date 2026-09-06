

import MatchesFilter from "./MatchesFilter";
import MatchesList from "./MatchesList";

function MatchesContent() {
  return (
    <>
      <MatchesFilter />
      <div className="my-10">
        <MatchesList />
      </div>
    </>
  );
}

export default MatchesContent;
