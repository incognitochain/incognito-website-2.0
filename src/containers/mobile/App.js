import React, { useState, useEffect } from 'react';
import logo from '../../assets/Logo.png';
import axios from 'axios';
import {Row,Col,Drawer, Avatar, Input, Button, Layout, Menu, Breadcrumb } from 'antd';
import WAValidator from '@swyftx/api-crypto-address-validator';
import {INCO_CHAIN} from '../../services/const';
import appstore from '../../assets/button/mobile/appstore.png';
import ggplay from '../../assets/button/mobile/play.png';
import apk from '../../assets/button/mobile/apk.png';
import menuIcon from '../../assets/Arrow/Mobile/Menu.png';
import closeIcon from '../../assets/Arrow/Mobile/Close.png';
import arrow from '../../assets/arrow.png';
import GA from '../../services/GaEvents';
import { withRouter } from "react-router";
import { BrowserRouter as Router, Switch,  Route, Link } from "react-router-dom";
import AboutUs from './AboutUs';
import Dex from '../../components/dex/mobilehome';
import Faq from '../../components/faq/mobilehome';

import Wallet from '../../components/wallet/wallet.mobile';
import Events from '../../components/events/mobilehome';

import Checking from '../../components//checking/mobile';
//import Checking from './Checking';
import { Flex, WhiteSpace } from 'antd-mobile';
import './Style.css';
//function App() {
class App extends React.Component{

  constructor(pros){
    super(pros);
    this.state = {
      address: null,
      network:null,
      loading:false,
      error:false,
      open: false,
      visible:false,
    };
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render(){
    const selected = (this.props.location.pathname =="/" ? '/home' : this.props.location.pathname);

    return (

      <div className="flex-container">
          <Switch>
            <Route path="/" exact  >
              <Wallet />
            </Route>
            <Route path="/wallet" exact  >
              <Wallet />
            </Route>
            <Route path="/dex" exact  >
              <Dex />
            </Route>
            <Route path="/quest" exact  >
              <Events />
            </Route>
            <Route path="/faq" exact  >
              <Faq />
            </Route>
            <Route path="/about-you" exact>
                <Checking/>
            </Route>
                <Route path="/about-us" exact>
            <AboutUs/>
            </Route>
          </Switch>


           <Drawer
                placement={'right'}
                closable={false}
                visible={this.state.visible}
                key={'right'}
              >

                <Menu className="topMenu"  style={{marginTop:'60px'}}  mode="vertical" onSelect={this.handleOk}   selectedKeys={[selected]}>
                    <Menu.Item key="/dex"><Link className="dex" to={'/dex'}>pDEX</Link></Menu.Item>
                    {/* <Menu.Item key="/quest"><Link className="dex" to={'/quest'}>Quest</Link></Menu.Item> */}
                    <Menu.Item key="/home"> <Link className="about-you" to={'/'}>Wallet</Link></Menu.Item>
                    <Menu.Item key="/faq"><Link className="faq" to={'/faq'}>FAQs</Link></Menu.Item>
                    <Menu.Item key="/about-you"> <Link className="about-you" to={'/about-you'}>About you</Link></Menu.Item>
                    <li class="ant-menu-item"><a className="about-us" href='https://we.incognito.org/'>About us</a> </li>
                </Menu>

              </Drawer>
        </div>
    );
  }
}

export default withRouter(App);
