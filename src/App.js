import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer.js';

import Cursor from './components/cursor.js';

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
        
        <Cursor></Cursor>
        {/* 사이드바 */}
        {/* <Sidebar></Sidebar> */}

        {/* 라우팅 영역 */}
        <main>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/profile" element={<section id="profile"><Profile /></section>} />
            <Route path="/project" element={<section id="project"><Project /></section>} />
            <Route path="/contact" element={<section id="contact"><Contact /></section>} />
          </Routes>
        </main>

        {/* 푸터 */}
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
