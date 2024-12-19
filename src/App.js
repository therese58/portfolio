import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer.js';
import Sidebar from './layout/Sidebar';

// 페이지 컴포넌트
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import Project from './pages/Project.js';
import Contact from './pages/Contact.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* 헤더 */}
        <Header></Header>
        
        {/* 사이드바 */}
        <Sidebar></Sidebar>

        {/* 라우팅 영역 */}
        <main>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="/project" element={<Project></Project>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
          </Routes>
        </main>

        {/* 푸터 */}
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
