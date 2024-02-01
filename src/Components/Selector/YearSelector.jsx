export const YearSelector = ({ setActiveYear }) => {
 
    const generateArray = (aroundNumber) =>
    Array.from({ length: 30 }, (v, i) => i + aroundNumber);

  const data = generateArray(1995);
  const makeItem = function (x) {
    return (
      <option key={x} value={x}>
        {x}
      </option>
    );
  };
 
  const handleOnChange = (event) => {
    setActiveYear(event.target.value);
  };

  return (
    <>
      <select onChange={handleOnChange}>
        <option disabled selected>
          please choose your year
        </option>
        {data.map(makeItem)}
      </select>
    </>
  );
};
