import React from 'react';
import {Routes,Route} from "react-router-dom";
import Navigation from './routes/navigation/navigation.component';
import FormLogin from './routes/form-login/form_login.component';
import FormRegister from './routes/form-register/form_register.component';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<FormLogin/>} />
          <Route path="/register" element={<FormRegister/>}/>
        </Route>
      </Routes>
  );
}

export default App;
