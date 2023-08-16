import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About';
import './styles/App.css';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectList />} />
      </Routes>
    </>
  );
}

export default App;
