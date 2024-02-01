import { useState } from "react";
import kommuneListe from "../Selector/KommuneSelector";

import { YearSelector } from "../Selector/YearSelector";

const base = "https://data.brreg.no/enhetsregisteret/api/enheter";

function SearchFunction() {
  const [filters, setFilter] = useState({
    kommunenummer: kommuneListe,
    size: 10000,
    frastiftelsesdato: `${YearSelector}-01-01 `,
    tilstifdelsesdato: `${YearSelector}-12-31`,
  });

  const currentUrl = `${YearSelector}`;

  return <>{console.log(currentUrl)}</>;
}
export default SearchFunction;
