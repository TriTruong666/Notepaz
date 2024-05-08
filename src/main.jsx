import ReactDOM from 'react-dom/client'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Notepaz from './components/Note/Notepaz.jsx';
import './styles/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/note" element={<Notepaz />}></Route>
    </Routes>
  </BrowserRouter>
)
