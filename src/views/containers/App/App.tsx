import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Palette from '../Palette/Palette';

const App = () => {
  return (
    <Routes>
      <Route path='/palette' element={<Palette />} />
    </Routes>
  );
};

export default App;
