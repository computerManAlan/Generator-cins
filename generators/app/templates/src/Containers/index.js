import React from 'react';
import { render } from 'react-dom';
import { Button, Layout, Empty } from 'antd';
import './style.less'

const {
  Header, Footer, Sider, Content,
} = Layout;


class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div>
        <div id="exap">
          <Layout>
            <Header>欢迎使用 CINS 脚手架</Header>
            <Content>
              <Empty />
            </Content>
          </Layout>
        </div>
      </div>
    )
  }
}

export default Main;
