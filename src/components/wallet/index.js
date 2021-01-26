import React, { useState, useEffect } from 'react';
import {Row,Col, Avatar, Input, Button, Layout, Menu, Breadcrumb } from 'antd';
import hold from '../../assets/hold3x.png';
import send from '../../assets/slide/Send3x.png';
import buy from '../../assets/slide/trade.png'; 
import bgImg from '../../assets/slide/bg.png';  
import invest from '../../assets/slide/invest.png';
import appstore from '../../assets/button/website/appstore.png';
import ggplay from '../../assets/button/website/play.png';
import apk from '../../assets/button/website/apk.png';
import arrowRight from '../../assets/Arrow/Website/chevron.png';
import footerAppLogo from '../../assets/squad-logo.png';
import GA from '../../services/GaEvents';
import wallet1 from '../../assets/Wallet/Wallet22x.png';  
import wallet2 from '../../assets/Wallet/Wallet12x.png';  
import wallet3 from '../../assets/Wallet/Wallet42x.png';  

import telegram from '../../assets/telegram.png';
import twitter from '../../assets/twitter.png';

import pageShield from '../../assets/pageshield.png';
import pageSwrap from '../../assets/pageswap.png';
import pageFee from '../../assets/pagefee.png';
import Apis from '../../services/Apis';

import { Carousel } from 'antd';
 
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
        if(this.crousel !=null & this.crousel2 != null){
            this.crousel.prev();
            this.crousel2.prev();
        }
    }
    async componentDidMount() {
         
        const interval = setInterval(() => {  
             this.onChange();
        }, 3000);
    
        const report = await Apis.getReportDashboard();
        localStorage.setItem("report", JSON.stringify(report));
        this.setState({report:report});
        
  
      }
    
      
  render(){
      let totalShield , PdexVolume , Pdex24hVolume, liquitidy;
      if( this.state.report !=null){
        totalShield = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.state.report.DepositVolume);
        liquitidy = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.state.report.Liquitidy);
        PdexVolume = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.state.report.PdexVolume);
        Pdex24hVolume = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.state.report.Pdex24hVolume);
      }
  return (  
        <div>
            <Row justify="end"  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12} className="slideRight">
                    <Carousel 
                     ref={node => {
                        this.crousel = node;
                      }}
                      style={{width:'240px'}} 
                      > 
                    <h2 className="slide-tile">  <span className="send">Send</span></h2>
                    <h2 className="slide-tile">   <span className="gray">Hold</span></h2>  
                    </Carousel>
                    <h2 className="slide-tile" style={{marginTop:'-40px'}}> 
                    crypto <br/>
                    privately.</h2>
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
                     style={{background:`url(${bgImg}) no-repeat`,right:'10px',backgroundSize:'contain',
                     position: 'absolute'}}>
                         <Carousel 
                            ref={node => {
                                this.crousel2 = node;
                            }} 
                            > 
                            <img className="imgCr"  src={send}/>
                            <img className="imgCr"  src={hold}/>
                            </Carousel>  
                        </div>
                </Col>
            </Row>
            <Row justify="end" style={{marginTop:'265px'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={6} className="news-text padding0">Total shielded: {totalShield}</Col>
                <Col span={6} className="news-text padding0">Total liquidity: {liquitidy}</Col>
                <Col span={6} className="news-text padding0" >Anonymous trades: {PdexVolume}</Col>
                <Col span={6} className="news-text padding0">24h trading vol: {Pdex24hVolume}</Col>
            </Row>
    
            <Row justify="end" style={{marginTop:'130px'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12} className="news-text">
                        <img className="pageHomeImage"  src={wallet1}/>
                     </Col>
                <Col span={12} className="news-text " style={{paddingLeft:'130px'}}> 
                            <div className="box-header mobile">
                              Get privacy for any <br/>cryptocurrency.
                            </div>
                            <div className="box-desc mobile">
                                <br/><br/>
                                Hint: You don’t need privacy coins to have privacy. 
                                <br/><br/>
                                You can anonymize your Bitcoin, Ether, USDT, and hundreds of thousands of other currencies. Disappear from public ledgers in a matter of minutes. 
                                <br/><br/>
                            </div>

                            <div className="box-link"> 
                                <a href="https://we.incognito.org/t/shielding-cryptocurrencies-turning-any-cryptocurrency-into-a-privacy-coin/83"> 
                                    <span style={{display:'flex'}}>How it works <img src={arrowRight} className="box-arrow" /></span>
                                </a>
                            </div>
                            <div className="box-link">
                               
                              <a href="https://we.incognito.org/c/tech/interoperability"> 
                                <span style={{display:'flex'}}>Privacy for Bitcoin, Ethereum and more <img src={arrowRight} className="box-arrow" /></span>
                               </a>
                            </div>

                </Col>
            </Row>

            <Row justify="end" style={{marginTop:'130px'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
               <Col span={12} className="news-text" style={{paddingRight:'130px'}}> 
                            <div className="box-header">
                            Send and receive <br/>without a trace.
                            </div>
                            <div className="box-desc">
                                <br/><br/>
                                Transact any amount of any currency at near zero fees. And that’s not all – going Incognito also makes your Bitcoin go 7x faster.
                                <br/><br/>
                            </div>

                            <div className="box-link">
                            <a href="https://we.incognito.org/t/scaling-blockchain-privacy-with-dynamic-sharding/169"> 
                                    <span style={{display:'flex'}}>Explore privacy at scale <img src={arrowRight} className="box-arrow" /></span>
                                </a>
                                </div>
                            <div className="box-link">
                              
                                <a href="https://we.incognito.org/t/how-to-shield-send-receive-and-unshield/1114"> 
                                    <span style={{display:'flex'}}>How to send and receive privately <img src={arrowRight} className="box-arrow" /></span>
                                </a>
                              
                            </div> 

                </Col>
                <Col span={12} className="news-text"> 
                <img className="pageHomeImage"  src={wallet2}/>
                </Col>
                
            </Row>

            <Row justify="end" style={{marginTop:'130px'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12} className="news-text"> 
                <img className="pageHomeImage"  src={wallet3}/>
                </Col>
                <Col span={12} className="news-text" style={{paddingLeft:'130px'}}> 
                            <div className="box-header">
                            Open-source.<br/>Open-minded.
                            </div>
                            <div className="box-desc">
                                <br/><br/>
                                The Incognito Wallet is completely open-source, the combined effort of users and developers from all over the world. People building privacy for people.
                                <br/><br/>
                            </div>

                            <div className="box-link">
                                
                                <a href="https://we.incognito.org/"> 
                                    <span style={{display:'flex'}}>Talk to other users <img src={arrowRight} className="box-arrow" /></span>
                                </a>
                            </div>
                            <div className="box-link">
                              
                                <a href="https://github.com/incognitochain/incognito-wallet"> 
                                    <span style={{display:'flex'}}>Browse the code <img src={arrowRight} className="box-arrow" /></span>
                                </a>
                            </div>

                </Col>
            </Row>

            
            <Row justify="end" className="footer-fullwidth" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={24} className="news-text"> 
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
