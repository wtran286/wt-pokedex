import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import './App.scss';
import { Pokedex } from './pages/Pokedex/Pokedex';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Pokedex />} path='*' />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
