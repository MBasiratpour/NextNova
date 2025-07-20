import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Drones from './pages/Drones';
import VRGlasses from './pages/VRGlasses';
import Compare from './pages/Compare';
import DroneDetail from './pages/DroneDetail';
import VRDetail from './pages/VRDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drones" element={<Drones />} />
          <Route path="/drones/:id" element={<DroneDetail />} />
          <Route path="/vr-glasses" element={<VRGlasses />} />
          <Route path="/vr-glasses/:id" element={<VRDetail />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;