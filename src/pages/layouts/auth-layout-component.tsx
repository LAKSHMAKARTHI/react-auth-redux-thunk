/* 
    Developed by LK - Feb 2022 
*/

import React from 'react';
import { Outlet } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { Link  } from 'react-router-dom';
import styled from 'styled-components';
import { FacebookIcon } from 'react-share';
import platform from 'platform';

const { Content, Footer } = Layout;

interface Props {
}

const styles = {
  footerContent : { display: "flex", alignItems: "center", justifyContent: "center" },
  socialIcon: { margin: "0px 4px" }
}

const AuthLayoutComponent = (props: Props) : JSX.Element => {
  return (
    <Layout>
      <StyledHeader style={{padding: "0 24px 0px 0px"}}>
        <StyledHeading><Link to="/">Auth</Link></StyledHeading>
        <Menu theme="dark" mode="horizontal" className='main-menu' style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Menu.Item key='home'><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key='login'><Link to="/login">Login</Link></Menu.Item>
          </Menu>
      </StyledHeader>
      <Content>
         <div className="site-layout-content">
           <Outlet />
         </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <div style={styles.footerContent}>
          {platform.name} | <FacebookIcon style={styles.socialIcon} size={16} round={true} />
        </div>
      </Footer>
    </Layout>
  );
}

const StyledHeader = styled(Layout.Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

const StyledHeading = styled.label`
  text-align: center;
  width: 100px;
  color: #fff;
  font-weight: bold;
  font-size: 22px;
`;

export default AuthLayoutComponent;