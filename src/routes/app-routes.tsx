/* 
    Developed by LK - Feb 2022 
*/

import React from 'react';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Result, Button } from 'antd';
import MainLayoutComponent from '../pages/layouts/main-layout-component';
import AuthLayoutComponent from '../pages/layouts/auth-layout-component';
import HomeContainer from '../pages/home-page/container';
import LoginContainer from '../pages/auth/login-page/container';
import DashboardContainer from '../pages/dashboard-page/container';
import { RequireAuth } from './auth-route';
import { checkAuth } from '../utils/services';

const AppRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={ checkAuth() !== null ? <MainLayoutComponent /> : <AuthLayoutComponent />}>
              <Route index element={<HomeContainer />} />
              <Route path="/login" element={<LoginContainer />} />
              <Route
                path="/dashboard"
                element={
                  <RequireAuth>
                    <DashboardContainer />
                  </RequireAuth>
                }
              />
              <Route path="*" element={<Result status="404" title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary"><Link to="/">Back Home</Link></Button>} />} />
          </Route>
      </Routes>
  );
};

export default AppRoutes;