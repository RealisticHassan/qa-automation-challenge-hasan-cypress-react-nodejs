import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import CityForm from './components/CityForm';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/city' element={<CityForm></CityForm>}></Route>
      </Routes>
    </Router>
    <ToastContainer />
  </React.StrictMode>
);

reportWebVitals();
