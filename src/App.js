import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// page & layout imports
import Homepage from './pages/Homepage';
import PageDetails from './pages/PageDetails';
import SiteHeader from './components/SiteHeader';

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/details/:id" element={<PageDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
