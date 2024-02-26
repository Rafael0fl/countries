import { Route,Routes } from 'react-router-dom';

import Home from './components/Home/Home.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';


function App(){
  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<LandingPage />}/>
    </Routes>
  )
}

export default App
