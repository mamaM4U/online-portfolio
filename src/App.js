import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Interests from './pages/Interests';
import Awards from './pages/Awards';


class App extends React.Component {
  render (){
   return (
   <div className="App">
     <Routes>
        <Route index element={<About/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/interests' element={<Interests/>} />
        <Route path='/awards' element={<Awards/>} />
      </Routes>
      <Header/>
      <Footer/>
    </div>
    )
  }
}

export default App;
