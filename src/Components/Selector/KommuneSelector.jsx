import { useState, useEffect } from "react";

const URL = `https://data.ssb.no/api/klass/v1/versions/1710.json`;

function kommuneListe({setActiveKommune}) {
  const [kommuner, setKommuner] = useState(null);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.classificationItems)
        setKommuner(data.classificationItems);
      });
  }, []);
  const handleOnChange = (event) =>{
    setActiveKommune(event.target.value)
console.log(kommuner)
  }
    return (
      <div className="dropdownList">
      <select placeholder="velg kommune." onChange={handleOnChange}>
        {kommuner !== null?
           kommuner.map((kommuneInfo) =>{
             return(
               <option key={kommuneInfo.code} value={kommuneInfo.code}>{kommuneInfo.name}</option>
               )
              })
              : null}
      </select>
    </div>
  );
}
export default kommuneListe;
