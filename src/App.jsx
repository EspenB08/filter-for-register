import "./App.css";
import KommuneListe from "./Components/Selector/KommuneSelector";
import { YearSelector } from "./Components/Selector/YearSelector";
import SearchFunction from "./Components/api/searchfunction";
import { useEffect, useState } from "react";

function App() {
  const [activeKommune, setActiveKommune] = useState("");
  const [activeYear, setActiveYear] = useState(0);
  const [data, setData] = useState(null)

  const handleSearch = async (kommune, year) =>{
   console.log(kommune)
   try {
      const response = await fetch(`https://data.brreg.no/enhetsregisteret/api/enheter?kommunenummer=${kommune}&size=10000&fraStiftelsesdato=${year}-01-01&tilStiftelsesdato=${year}-12-31`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
const dataFeedback = data? data._embedded.enheter:null
       
  console.log(dataFeedback)

  return (
    <>
      <KommuneListe setActiveKommune={setActiveKommune} />
      <YearSelector setActiveYear={setActiveYear} />
      <button onClick={() => handleSearch(activeKommune, activeYear)}>
        Search
      </button>
      <div>
        {dataFeedback !== null
          ? dataFeedback.map((kommuneInfo) => {
              return (
                <p
                  key={kommuneInfo.organisasjonsnummer}
                  value={kommuneInfo.organisasjonsnummer}
                >
                  Navn: {kommuneInfo.navn} <br></br>
                  organisasjonsnummer: {kommuneInfo.organisasjonsnummer}
                  <br></br>
                  Stiftelsesdato: 
                  {kommuneInfo.registreringsdatoEnhetsregisteret}
                </p>
              );
            })
          : null}
      </div>
    </>
  );
}

export default App;