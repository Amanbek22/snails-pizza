import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<div>Main</div>} />
        <Route path="/login" element={<div>Login</div>} />
      </Routes>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
