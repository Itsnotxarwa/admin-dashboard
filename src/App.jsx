import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from "./admin-dash-Components/admin-dashboard"
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/admin-dashboard" element={<AdminDashboard />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
