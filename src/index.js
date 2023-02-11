import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, hashHistory } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <hashHistory>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </hashHistory>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
