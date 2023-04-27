import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarpgm from './Components/Navbarpgm';
import Navbarpgm1 from './Components/Navbarpgm1';
import Navbarpgn2 from './Components/Navbarpgn2';
import Navbarpgm3 from './Components/Navbarpgm3';

function App() {
  return (
    <div className="App">
      <h1>Navbars</h1>
      <hr />
      <Navbarpgm />
      <hr />
      <Navbarpgm1 />
      <hr />
      <Navbarpgn2 />
      <hr />
      <Navbarpgm3 />
      <hr />


    </div>
  );
}

export default App;
