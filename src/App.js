

import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div >
  <Header></Header>
  <Routes>
      <Route path="/"  element={<Home></Home>}></Route>
      <Route path="about"  element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
