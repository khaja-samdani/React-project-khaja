
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import Aboutpage from './Aboutpage';
import HandTpage from './HandTpage';
import Navbar from './Navbar';

function App() {
  
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<Aboutpage />}/>
          <Route path="h&t" element={<HandTpage />}/>
        </Routes>
      </div>
  );
}
export default App;
