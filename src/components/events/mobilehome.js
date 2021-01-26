import React, { useState, useEffect } from 'react';
import {Row,Col, Avatar, Input, Button, Layout, Menu, Breadcrumb } from 'antd';
import hold from '../../assets/slide/shield.png';
import send from '../../assets/slide/send.png';
import buy from '../../assets/slide/trade.png'; 
import mobiletrade from '../../assets/mobiletrade.png';  
import bgImg from '../../assets/slide/bg.png';  
import invest from '../../assets/slide/invest.png';
import appstore from '../../assets/button/website/appstore.png';
import ggplay from '../../assets/button/website/play.png';
import apk from '../../assets/button/website/apk.png';
import arrowRight from '../../assets/Arrow/Website/chevron.png';
import footerAppLogo from '../../assets/squad-logo.png';
import GA from '../../services/GaEvents';


import dex12 from '../../assets/Trade/DEX12x.png';
import dex22 from '../../assets/Trade/DEX22x.png';
import dex32 from '../../assets/Trade/DEX32x.png';

import telegram from '../../assets/telegram.png';
import twitter from '../../assets/twitter.png';

import { Flex, WhiteSpace } from 'antd-mobile';
import { Carousel } from 'antd';

import Lottie from 'react-lottie';
import trang1 from '../../assets/animations/trang1.json'
import trang2 from '../../assets/animations/trang2.json'
import trang3 from '../../assets/animations/trang3.json'
import trang4 from '../../assets/animations/trang4.json'

 
class MobileHome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index:0
        };
        // this.crousel = React.createRef();
        // this.crousel2 = React.createRef();
        // this.onChange = this.onChange.bind(this);
    }
     
    onChange(){ 
        // if(this.crousel !=null & this.crousel2 != null){
        //     this.crousel.prev();
        //     this.crousel2.prev();
        // }
    }
    componentDidMount() {
         
        // const interval = setInterval(() => {  
        //      this.onChange();
        // }, 3000);
        
      }
    
      
  render(){

    const trang1Ops = {
        loop: true,
        autoplay: true, 
        animationData: trang1,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      const trang2Ops = {
        loop: true,
        autoplay: true, 
        animationData: trang2,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      const trang3Ops = {
        loop: true,
        autoplay: true, 
        animationData: trang3,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      const trang4Ops = {
        loop: true,
        autoplay: true, 
        animationData: trang4,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      
  return (  
        <Flex  wrap="wrap" style={{padding:'0px 10px'}}>      
            
            <Row justify="center" style={{marginTop:'60px', width:'100%'}}> 
                
            <Col span={24} className="news-text" > 
                            <div className="box-header">
                            <h2> Join the internet's  <br/>
                            biggest privacy adventure </h2>
                            <Lottie options={trang1Ops}
                                height={308}
                                width={325}/>
                            </div>
                            <div className="box-desc">
                                <p><br/><br/>
                                Take a secret path through the privacy layer of the internet. 
                                Find hidden codes to win cryptocurrency, privacy products, and cool identity-protecting hardware devices.
                                </p>
                               <p className="event-bold">Live now in the Incognito app.</p> 

                               <p>

                                  <a onClick={()=>GA.clickIOS()} href="https://apps.apple.com/us/app/incognito-crypto-wallet/id1475631606?ls=1">
                                    <img className="foot-app-link" src={appstore}/>
                                    </a>
                                    <a onClick={()=>GA.clickGPlay()} href="https://play.google.com/store/apps/details?id=com.incognito.wallet">
                                        <img className="foot-app-link" src={ggplay}/>
                                    </a>
                                    <a onClick={()=>GA.clickApk()}  href="https://github.com/incognitochain/incognito-wallet/releases">
                                        <img className="foot-app-link" src={apk}/>
                                    </a>
                                    
                               </p>
                            </div>

 
                </Col>
                 
            </Row> 
            <Row justify="end" style={{marginTop:'60px'}}> 
                <Col span={24} className="news-text" > 
                            <div className="box-header">
                                <h2> The hunt is on.</h2>
                                <Lottie options={trang2Ops}
                                height={308}
                                width={325}/>
                            </div>
                            <div className="box-desc">
                                <br/><br/>
                                We hid special codes all over the internet. Will you find them? That depends. How much do you know about privacy? Do you know your way around the crypto world? How well do you know Incognito?
                               
                                <br/><br/>
                            </div> 


                            <div className="box-link"> 
                            <a href="https://we.incognito.org/t/join-the-privacy-quest-earn-prizes/7204"> 
                                    <span style={{display:'flex'}}>Find out more <img src={arrowRight} className="box-arrow" /></span>
                                </a>
                            </div> 
 
                </Col>
            </Row>

            <Row justify="end" style={{marginTop:'60px'}}> 
                <Col span={24} className="news-text" > 
                            <div className="box-header">
                            <h2> Be smart.<br/>
                            Get lucky. </h2>
                            <Lottie options={trang3Ops}
                                height={308}
                                width={325}/>
                            </div>
                            <div className="box-desc">
                                <br/><br/>
                                Every code you unlock allows you to take a turn on the lucky wheel. Spin to win not just BTC, PRV and XMR, but also privacy-focused software and hardware.
                                
                            
                                <br/><br/>
                            </div> 


                            <div className="box-link"> 
                            <a href="https://we.incognito.org/t/privacy-quest-what-prizes-can-i-win/7364"> 
                                    <span style={{display:'flex'}}>See what prizes you can win<img src={arrowRight} className="box-arrow" /></span>
                                </a>
                            </div> 
 
                </Col>
               
                
            </Row>

            <Row justify="end" style={{marginTop:'60px'}}> 
                <Col span={24} className="news-text" > 
                            <div className="box-header">
                            <h2>Try your hand at 1 BTC.</h2>
                            <Lottie options={trang4Ops} 
                                width={325}/>
                            </div> 
                            <div className="box-desc">
                                <br/><br/>
                                The lucky wheel is extra lucky for some people. Land on LOTTO to unlock a chance at the biggest prize. Someone’s gotta win. Will it be you?
                                <br/><br/>
                            </div> 
                            <div className="box-link"> 
                            <a href="https://we.incognito.org/t/quest-documentation-wheel-and-lottery/7955/18"> 
                                    <span style={{display:'flex'}}>Read how luck is determined <img src={arrowRight} className="box-arrow" /></span>
                                </a>
                            </div>  

                </Col>
            </Row> 
            
            <Row justify="end" className="footer-fullwidth"  style={{marginTop:'60px'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={24} className="news-text"> 
                    <h2><img style={{width:'80px'}} src={footerAppLogo}/></h2>
                    <p>Get the app. </p>
                </Col>
                <Col span={24} className="news-text"> 
                    <a onClick={()=>GA.clickIOS()} href="https://apps.apple.com/us/app/incognito-crypto-wallet/id1475631606?ls=1">
                       <img className="foot-app-link" src={appstore}/>
                    </a>
                    <a onClick={()=>GA.clickGPlay()} href="https://play.google.com/store/apps/details?id=com.incognito.wallet">
                        <img className="foot-app-link" src={ggplay}/>
                    </a>
                    <a onClick={()=>GA.clickApk()}  href="https://github.com/incognitochain/incognito-wallet/releases">
                        <img className="foot-app-link" src={apk}/>
                    </a>
                </Col>
                <Col span={24} className="news-text">
                            
                <Row justify="end" style={{marginTop:'25px',   justifyContent: 'center'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <a  href="https://github.com/incognitochain" className="news-text-botton">Code </a>
                    <a  href="https://we.incognito.org/t/incognito-core-dev-2020-roadmap/552" className="news-text-botton">Roadmap</a>
                    <a  href="https://incscan.io/" className="news-text-botton">Network</a>
                    <a  href="https://we.incognito.org/t/incognito-whitepaper-incognito-mode-for-cryptonetworks/168" className="news-text-botton">Whitepaper</a>
                    <a  href="https://we.incognito.org/" className="news-text-botton">Community</a>        

                    <div class="telegram"style={{marginTop:'20px'}} >
                    <a  href="https://t.me/incognitochain" className="news-text-botton">
                        <img src={telegram}  style={{width:'20px'}} />
                    </a>
                    <a  href="https://twitter.com/incognitochain"  className="news-text-botton"> <img style={{width:'20px'}}  src={twitter} /></a>    
                   
                    </div>

                </Row> 
                </Col>
            </Row>
        </Flex> 
    );
  }
}
 
export default MobileHome; 
