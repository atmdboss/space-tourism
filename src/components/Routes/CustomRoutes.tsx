import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Destination from '../../pages/Destination';
import Home from '../../pages/Home';
import Crew from '../../pages/Crew';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
    </Routes>
  );
};

export default CustomRoutes;
