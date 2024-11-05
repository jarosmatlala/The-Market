import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Layout from './Components/Layout';
import About from './Components/About';


function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Layout />
    </div>
  );
}

export default App;
