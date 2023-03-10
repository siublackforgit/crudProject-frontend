import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>   
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post" element={<Post />} />
        </Routes>
        </HashRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
