/* 
    Developed by LK - Feb 2022 
*/

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Outlet } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { Link  } from 'react-router-dom';
import styled from 'styled-components';
import { FacebookIcon } from 'react-share';
import platform from 'platform';
import { AppState } from '../../state/reducers/root-reducer';
import { AuthAction} from '../../state/models/auth-model';
import { logoutRequest } from '../../state/actions/auth-action';
import { ProfileAction } from '../../state/models/profile-model';
import { getProfileRequest } from '../../state/actions/profile-action';
import ProfileModalComponent from '../../components/profile-modal';

const { Content, Footer } = Layout;

interface Props {
  status: string,
  profileData: any,
  getProfileRequest: () => void,
  logoutRequest: () => void
}

const styles = {
  footerContent : { display: "flex", alignItems: "center", justifyContent: "center" },
  socialIcon: { margin: "0px 4px" }
}

const MainLayoutComponent = ( props : Props) : JSX.Element => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    props.getProfileRequest()
  }, []);

  return (
    <Layout>
      <StyledHeader style={{padding: "0 24px 0px 0px"}}>
      <StyledHeading><Link to="/">Auth</Link></StyledHeading>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key='home'><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key='dashboard'><Link to="/dashboard">Dashboard</Link></Menu.Item>
          <Menu.Item key='profile' onClick={() => { setVisible(true) }}>Profile</Menu.Item>
          <Menu.Item disabled={props.status === "trigger"} key='logout' onClick={() => { props.logoutRequest()  }}>Logout</Menu.Item>
        </Menu>
      </StyledHeader>
      <Content>
          <div className="site-layout-content" style={{ marginTop: "4.5rem" }}>
            <Outlet />
          </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <div style={styles.footerContent}>
          {platform.name} | <FacebookIcon style={styles.socialIcon} size={16} round={true} />
        </div>
      </Footer>
      <ProfileModalComponent 
        visible={visible}
        data={props.profileData}
        onHandle={() => {
          setVisible(false)
        }}
      />
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

const mapStateToProps = (state: AppState) => {
  return {
    status: state.authReducer.status,
    profileData: state.profileReducer.data
  }
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AuthAction | ProfileAction>
) => ({
  logoutRequest: bindActionCreators(logoutRequest, dispatch),
  getProfileRequest: bindActionCreators(getProfileRequest, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayoutComponent);
