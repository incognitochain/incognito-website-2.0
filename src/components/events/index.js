import React, { useState, useEffect } from 'react';
import {Row,Col, Avatar, Input, Button, Layout, Menu, Breadcrumb,Statistic} from 'antd';
import hold from '../../assets/slide/shield.png';
import send from '../../assets/slide/send.png';
import buy from '../../assets/slide/Trade3x.png'; 
import bgImg from '../../assets/slide/bg.png';  
import invest from '../../assets/slide/Provide3x.png';
import appstore from '../../assets/button/website/appstore.png';
import ggplay from '../../assets/button/website/play.png';
import apk from '../../assets/button/website/apk.png';
import arrowRight from '../../assets/Arrow/Website/chevron.png';
import footerAppLogo from '../../assets/squad-logo.png';
import GA from '../../services/GaEvents';

import dex12 from '../../assets/Trade/DEX12x.png';
import dex22 from '../../assets/Trade/DEX22x.png';
import dex32 from '../../assets/Trade/DEX32x.png';
import Apis from '../../services/Apis';

import telegram from '../../assets/telegram.png';
import twitter from '../../assets/twitter.png';
import Lottie from 'react-lottie';
import trang1 from '../../assets/animations/trang1.json'
import trang2 from '../../assets/animations/trang2.json'
import trang3 from '../../assets/animations/trang3.json'
import trang4 from '../../assets/animations/trang4.json'



import { Carousel } from 'antd';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK


class SlideItem extends React.Component{
    constructor(props){
        super(props);

        let data = localStorage.getItem("report");
        let report = JSON.parse(data) 
        this.state = {
            index:0,
            report:report,
        };
        this.crousel = React.createRef();
        this.crousel2 = React.createRef();
        this.onChange = this.onChange.bind(this); 

    }
     
    onChange(){ 
      
    }
    async componentDidMount() {
          
         
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
        <div>
            <Row justify="end"  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12} className="slideRight"> 
                    <h2 className="event-title"  > Join the internet's  <br/>
                    biggest privacy adventure </h2> 
                    <p className="event-sub" style={{marginTop:'8px', marginBottom:'0px'}}>Take a secret path through the privacy layer of the internet. 
                    Find hidden codes to win cryptocurrency, privacy products, and cool identity-protecting hardware devices.
                    </p>
                    <p className="event-bold" style={{marginTop:'22px', marginBottom:'50px' }}>Live now in the Incognito app.</p>
 

                    <a onClick={()=>GA.clickIOS()} href="https://apps.apple.com/us/app/incognito-crypto-wallet/id1475631606?ls=1">
                        <img  src={appstore}/>
                    </a>
                    <a onClick={()=>GA.clickGPlay()} href="https://play.google.com/store/apps/details?id=com.incognito.wallet">
                        <img  src={ggplay}/>
                    </a>
                    <a onClick={()=>GA.clickApk()}  href="https://github.com/incognitochain/incognito-wallet/releases">
                        <img  src={apk}/>
                    </a>
                </Col>
                <Col span={12} className="slideLeft"> 
                     <div class="bgBackgroudSlide" 
                     style={{backgroundSize:'contain',
                     position: 'absolute'}}>
                           <Lottie options={trang1Ops}
                                height={522}
                                width={551}/>
                        </div>
                </Col>
            </Row>
             
    
            <Row justify="end" style={{marginTop:'130px'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12} className="news-text">
                <Lottie options={trang2Ops}
                                height={410}
                                width={551}/>
                     </Col>
                <Col span={12} className="news-text" style={{paddingLeft:'130px',paddingTop:'60px'}}> 
                            <div className="box-header">
                            The hunt is on.
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

            <Row justify="end" style={{marginTop:'53px'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
               <Col span={12} className="news-text" style={{paddingRight:'130px',paddingTop:'60px'}}> 
                            <div className="box-header">
                            Be smart.<br/>
                            Get lucky.
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
                <Col span={12} className="news-text"> 
                <Lottie options={trang3Ops}
                                height={410}
                                width={551}/>
                </Col>
                
            </Row>

            <Row justify="end" style={{marginTop:'53px'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12} className="news-text"> 
                <Lottie options={trang4Ops}
                                height={410} />
                </Col>
                <Col span={12} className="news-text" style={{paddingLeft:'130px',paddingTop:'120px'}}> 
                            <div className="box-header">
                            Try your hand at 1 BTC.
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

            
            <Row justify="end" className="footer-fullwidth" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={24} className="news-text" > 
                    <h2><img style={{width:'80px'}} src={footerAppLogo}/></h2>
                    <p style={{fontSize:'18px',fontFamily:'SF-Pro-Display-Regular'}}>Get the app. </p>
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
 
                </Row>  
                </Col>
            </Row>
             
            <Row justify="end" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="footer-social">
                <div class="telegram">
                    <a  href="https://t.me/incognitochain" className="news-text-botton">
                        <img src={telegram}  style={{width:'20px'}} />
                    </a>
                    <a  href="https://twitter.com/incognitochain"  className="news-text-botton"> <img style={{width:'20px'}}  src={twitter} /></a>    
                   
                    </div>
            </Row>


        </div> 
    );
  }
}
 
export default SlideItem; 
