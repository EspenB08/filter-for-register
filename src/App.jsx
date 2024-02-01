import './App.css'

import KommuneListe from './Components/api/APIpath';
import { YearSelector } from './Components/api/data';

function App() {

  return (
    <>
  <KommuneListe></KommuneListe>
  <YearSelector></YearSelector>
  <p>hei</p>
   </>
    
  )
}

export default App
