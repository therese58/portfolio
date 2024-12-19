import React from 'react';
import ReactDOM from 'react-dom/client';

//폰트
import 'pretendard/dist/web/static/pretendard.css';

//플러그인
import 'bootstrap/dist/css/bootstrap.min.css'; 

//커스터마이징
import './style/_globals.scss' 

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);