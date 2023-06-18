import './App.css';
import MainRouets from './Routes/MainRouets';
import BottomPart from './componet/BottomPart';
import Navbar from './componet/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRouets />
      <BottomPart />
    </div>
  );
}

export default App;
