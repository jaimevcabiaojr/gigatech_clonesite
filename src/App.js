import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import Navbar1 from './components/Navbar1';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Mainpage/>
    {/* <Navbar1/> */}
    </div>
  );
}

export default App;
