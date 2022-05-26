import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Crud from './pages/Crud';
import Watcher from './pages/Watcher';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Watcher />} />
          <Route path="crud" element={<Crud />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
