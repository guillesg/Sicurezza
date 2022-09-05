import './App.css';
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
