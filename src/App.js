import logo from './logo.svg';
import './App.css';
import { GlobalStyles } from './App.style';
import { Managmentpage } from './managmnet/managment';
import { Financepage } from './finance/finance';
import { Housepage } from './house/house';
import { Mapspage } from './maps/maps';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Managmentpage/>
      <Financepage/>
      <Housepage/>
      <Mapspage/>
    </div>
  );
}

export default App;
