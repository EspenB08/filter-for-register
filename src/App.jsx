import "./App.css";
import KommuneListe from "./Components/Selector/KommuneSelector";
import { YearSelector } from "./Components/Selector/YearSelector";
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
  // {
  //   console.log(data)
  //   bedriftsData !== null
  //     ? 
  //     bedriftsData.map((bedriftInfo) => {
  //         return (
  //           <p key={bedriftInfo.code} value={bedriftInfo.code}>
  //             {bedriftInfo._embedded.enheter.navn}
  //           </p>
  //         );
  //       })
  //     : null;
  // }
 
       
  

  return (
    <>
      <KommuneListe setActiveKommune={setActiveKommune} />
      <YearSelector setActiveYear={setActiveYear} />
      <button onClick={() => handleSearch(activeKommune, activeYear)}>
        Search
      </button>
    </>
  );
}

export default App;
