import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Navbar from './pages/Navbar';
import Homepage from './pages/HomePage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import BlogDetailpage from './pages/BlogDetailPage';


const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blogdetail" element={<BlogDetailpage />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  </Router>
);

export default App;


