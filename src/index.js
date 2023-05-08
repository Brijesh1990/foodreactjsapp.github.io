import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/Navigation';
import FoodMenu from './pages/FoodMenu';
import  UpdateFood from './components/UpdateFood';
import AddFood from './pages/AddFood';
const root = ReactDOM.createRoot(document.getElementById('food-mgt'));
root.render(
  <React.StrictMode>
       <BrowserRouter>
       <Navigation />
       <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/foodmenu' element={<AddFood />}></Route>

        <Route path='/updatefood/:id' element={<UpdateFood />}></Route>
       </Routes>
       </BrowserRouter>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
