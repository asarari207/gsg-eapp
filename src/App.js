import logo from './logo.svg';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Components/Pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
              <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
