import logo from './logo.svg';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products/index'
import Error from './Components/Pages/Error'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Products' element={<Products />} />
              <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
