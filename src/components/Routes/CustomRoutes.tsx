import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Destination from '../../pages/Destination';
import Home from '../../pages/Home';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
    </Routes>
  );
};

export default CustomRoutes;
