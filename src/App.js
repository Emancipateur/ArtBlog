import './App.css';
import { Route, Routes } from 'react-router';
import Home from './page/Home';

function App() {
  
  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>

    </div>

 
  );


}

export default App;
