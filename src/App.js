import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Main />
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
