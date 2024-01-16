import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Member from './Pages/Member';
import LinkToTop from './LinkToTop';

function App() {

  return (
    <BrowserRouter>
      <LinkToTop/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/member' element={<Member/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
