import { useState, useEffect } from "react";

const URL = `https://data.ssb.no/api/klass/v1/versions/1710.json`;

function kommuneListe() {
  const [kommuner, setKommuner] = useState(null);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.classificationItems)
        setKommuner(data.classificationItems);
      });
  }, []);
  return (
    <div className="dropdownList">
      <select placeholder="velg kommune.">
        {kommuner !== null?
           kommuner.map((companyInfo) =>{
            return(
                <option key={companyInfo.code}>{companyInfo.name}</option>
                )
        })
            : null}
      </select>
    </div>
  );
}
export default kommuneListe;
