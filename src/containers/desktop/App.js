import React, { useState, useEffect } from 'react';
import logo from '../../assets/Logo.png';
import searchicon from '../../assets/retry.png';
import axios from 'axios';
import {Row,Col, Avatar, Input, Button, Layout, Menu, Breadcrumb } from 'antd';
import Dex from '../../components/dex/index';
import Wallet from '../../components/wallet/index';
import Events from '../../components/events/index';
import Checking from '../../components/checking/index';
import Faq from '../../components/faq/index';
import './App.scss'; 
import WAValidator from '@swyftx/api-crypto-address-validator';
import {INCO_CHAIN} from '../../services/const';
import GA from '../../services/GaEvents';
import { withRouter } from "react-router";
import { BrowserRouter as Router, Switch,  Route, Link } from "react-router-dom";
import AboutUs from './AboutUs'; 

const { Header, Content, Footer } = Layout;

//function App() {
class App extends React.Component{

  constructor(pros){
    super(pros); 
    this.state = {
      address: null,
      network:null,
      loading:false,
      error:false,
    }; 
     
  }  
    
  render(){ 
    //console.log(this.props);
    const selected = (this.props.location.pathname =="/" ? '/home' : this.props.location.pathname);
    console.log("selected",selected);
    return ( 
        <Layout className="layout" >
          <Header className="header-cus">
            <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{margin:0}} >  
            <Col span={12} style={{ textAlign:"left", padding:'0'}} >
              <Link to={'/'}>
                  {/* <Avatar size={40} style={{position:'absolute',top:'12px',marginLeft:'0px',backgroundColor:'#000000'}} /> */}
                  <img src={logo}  style={{width:'158px',position:'absolute',top:'30px',marginLeft:'0px'}} />
              </Link> 
              </Col>
              <Col  span={12} style={{ textAlign:"right", padding:'0'}} > 
                <Menu className="topMenu" mode="horizontal" selectedKeys={[selected]} style={{marginTop:'20px'}}> 
                <Menu.Item key="/home"><Link className="dex" to={'/'}>pDEX</Link></Menu.Item>
                <Menu.Item key="/wallet"><Link className="dex" to={'/wallet'}>Wallet</Link></Menu.Item>
                <Menu.Item key="/faq"><Link className="dex" to={'/faq'}>FAQs</Link></Menu.Item>
                <Menu.Item key="/about-you"> <Link className="about-you" to={'/about-you'}>About you</Link></Menu.Item> 
                <Menu.Item key="/about-us"> <a className="about-us" href='https://we.incognito.org/'>About us</a>  </Menu.Item>
                </Menu>
              </Col> 
          </Row>
          </Header> 
          <Content className="content">    
            <Switch>
                <Route path="/" exact  >
                  <Dex />   
                </Route>
                <Route path="/quest" exact  >
                  <Events />   
                </Route> 
                <Route path="/faq" exact  >
                  <Faq />   
                </Route> 
                <Route path="/wallet" exact  >
                  <Wallet />   
                </Route>
                <Route path="/about-you" exact>
                    <Checking/>
                </Route>
                    <Route path="/about-us" exact>
                <AboutUs/>
                </Route>  
              </Switch>
          </Content>
          {/* <Footer className="footer-text">Incognito is an <span className="blue">open-source blockchain</span> built by a <span className="blue">community of privacy geeks</span>.</Footer> */}
        </Layout>
    
    );
  }
}

export default withRouter(App);
