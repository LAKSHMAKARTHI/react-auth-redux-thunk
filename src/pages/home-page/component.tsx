/* 
    Developed by LK - Feb 2022 
*/

import React from 'react';
import { CenterContent } from '../../components/styled-common';
import { Row, Col, Typography, Skeleton } from 'antd';
import { background } from '../../consts/images';
const { Title, Paragraph } = Typography;

interface Props {
}

const HomeComponent = (props: Props) : JSX.Element => {
  return (
    <CenterContent>
      <Row>
        <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 12}} xl={{span: 12}} xxl={{span: 12}} style={{textAlign: "left", padding: "0px 4rem"}}>
          <Title level={2}>Simple App for Redux-Thunk</Title>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non lorem nibh. Suspendisse ac blandit ipsum, eu sagittis eros. Maecenas at posuere augue. Quisque ultricies massa a magna pharetra faucibus. Aliquam sed euismod lectus. Sed auctor dui non dictum imperdiet. Mauris porttitor lacinia pellentesque. Sed non consequat lorem. Fusce vitae egestas arcu.</Paragraph>
          <Paragraph>Vestibulum ligula massa, rutrum vitae nisi vel, semper ornare ipsum. Pellentesque gravida semper commodo. Suspendisse ipsum enim, egestas sit amet elementum eu, interdum ut neque. Mauris id sem augue. Nam non odio in erat dapibus tristique ut non neque. Aenean ac tortor sed nunc pulvinar auctor a sit amet felis. Sed posuere felis sit amet mi fermentum tincidunt. Aenean pellentesque lobortis lacus quis auctor. Vestibulum nisl tellus, bibendum eu laoreet id, sollicitudin in nulla. Quisque dignissim nulla quam, at finibus sapien eleifend ut. Quisque sed sem non nunc condimentum convallis eget sit amet metus.</Paragraph>
        </Col>
        <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 12}} xl={{span: 12}} xxl={{span: 12}} style={{textAlign: "center"}}>
          <img src={background} style={{height: 400, width: 400, borderRadius: "5rem", boxShadow: "1.5px 1.5px 4px grey"}}></img>
        </Col>
      </Row>
    </CenterContent>
  );
}

export default HomeComponent;
