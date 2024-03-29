import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home/home.component';
import Navigation from './routes/Navigation/navigation.component';
import SignIn from './routes/SignIn/sign-in.component';

const Shop = () => {
  return (
    <h2>This is my Shop!</h2>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='' element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='sign-in' element={<SignIn/>} />
      </Route>
    </Routes>
  );
}

export default App;