import './App.css';

import Login_Page from './Components/Signup_Login_Page/Login.jsx';
import Signup_Page from './Components/Signup_Login_Page/Signup.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login_Page />} />
        <Route path="/signup" element={<Signup_Page />} />
      </Routes>
    </Router>
  );
}

export default App;
