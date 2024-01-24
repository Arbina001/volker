import logo from './logo.svg';
import './App.css';
import { GlobalStyles } from './App.style';
import { Advantagespage } from './advantages/advantages';
import { Footerpage } from './footer/footer';
import { Header } from './header/header';
import { Productpage } from './products/products';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Advantagespage/>
      <Footerpage/>
      <Productpage/>
      <Header/>
    </div>
  );
}

export default App;
