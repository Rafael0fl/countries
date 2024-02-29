import { Route,Routes } from 'react-router-dom';

import Home from './components/Home/Home.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Detail from './components/Detail/Detail.jsx';

function App(){
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/detail' element={<Detail/>}/>
    </Routes>
  )
}

export default App
