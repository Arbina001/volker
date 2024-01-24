import logo from "./logo.svg";
import "./App.css";
import { GlobalStyles } from "./App.style";
import { Advantagespage } from "./advantages/advantages";
import { Footerpage } from "./footer/footer";
import { Header } from "./header/header";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Advantagespage />
      <Footerpage />
      <Header />
    </div>
  );
}

export default App;
