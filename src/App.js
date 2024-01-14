import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import Error from './pages/Error';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header/>
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </div>
  );
}

export default App;
