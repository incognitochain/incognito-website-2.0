import React, { useState, useEffect } from 'react';
import {Row,Col, Avatar, Input, Button, Layout, Menu, Breadcrumb } from 'antd';
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

import rediticon from '../../assets/redit.png';
import telegram from '../../assets/telegram.png';
import twitter from '../../assets/twitter.png';


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
            <Row justify="end" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12} className="slideRight">
                    <Carousel 
                     ref={node => {
                        this.crousel = node;
                      }}
                      style={{width:'400px'}} 
                      >
                    <h2 className="slide-tile">  <span className="blue">Trade</span>  <br/>crypto <br/> privately. </h2> 
                    <h2 className="slide-tile">   <span className="green">Provide</span> <br/>liquidity <br/> for privacy.</h2>
                    
                    </Carousel>
                    {/* <h2 className="slide-tile" style={{marginTop:'-40px'}}> 
                    for privately.</h2> */}
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
                            <img className="imgCr"  src={buy}/>
                            <img className="imgCr"  src={invest}/>
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
                        <img className="pageHomeImage"  src={dex12}/>
                     </Col>
                <Col span={12} className="news-text" style={{paddingLeft:'130px'}}> 
                            <div className="box-header">
                                A truly anonymous<br/> crypto exchange.
                            </div>
                            <div className="box-desc"> 
                                <br/><br/>
                                Yeah you can buy bitcoin without ID. But real privacy is so much more than that – advanced cryptography also obscures your trading history and transactional activity.
                                <br/><br/>
                            </div>

                            <div className="box-link"> 
                                <a href="https://we.incognito.org/t/sending-cryptocurrencies-confidentially-ring-signature-homomorphic-commitment-and-zero-knowledge-range-proofs/170"> 
                                    <span style={{display:'flex'}}>See what privacy is made of <img src={arrowRight} className="box-arrow" /></span>
                                </a>
                            </div>
                            <div className="box-link"> 
                              <a href="https://incscan.io/pdex/overview"> 
                                <span style={{display:'flex'}}>View the charts <img src={arrowRight} className="box-arrow" /></span>
                               </a>
                            </div>

                </Col>
            </Row>

            <Row justify="end" style={{marginTop:'130px'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
               <Col span={12} className="news-text" style={{paddingRight:'130px'}}> 
                            <div className="box-header">
                            Seamless<br/>
                            cross-chain swaps. 
                            </div>
                            <div className="box-desc">
                                <br/><br/>
                                Trade BTC for XMR. ETH for BNB. DAI for BTC. And more. Move between the world’s biggest exchanges to get the best rates, and stay anonymous the entire time.
                                <br/><br/>
                            </div>

                            <div className="box-link">
                            <a href="https://we.incognito.org/t/pdex-the-first-privacy-protecting-decentralized-exchange/66"> 
                                    <span style={{display:'flex'}}>More on how the pDEX works <img src={arrowRight} className="box-arrow" /></span>
                                </a>
                                </div>
                            <div className="box-link"> 
                                <a href="https://we.incognito.org/t/pethereum-specifications/1688"> 
                                    <span style={{display:'flex'}}>Learn about Incognito mode for DeFi <img src={arrowRight} className="box-arrow" /></span>
                                </a>
                              
                            </div> 

                </Col>
                <Col span={12} className="news-text"> 
                <img className="pageHomeImage"  src={dex22}/>
                </Col>
                
            </Row>

            <Row justify="end" style={{marginTop:'130px'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12} className="news-text"> 
                <img className="pageHomeImage"  src={dex32}/>
                </Col>
                <Col span={12} className="news-text" style={{paddingLeft:'130px'}}> 
                            <div className="box-header">
                                 Permissionless.<br/> Zero trading fees.
                            </div>
                            <div className="box-desc">
                                <br/><br/>
                                Most crypto exchanges violate crypto’s core values. That’s why this one is powered by people, open-source, and free. Free to trade, free to list, free to play.
                                <br/><br/>
                            </div>

                           
                            <div className="box-link"> 
                                <a href="https://we.incognito.org/t/start-listing-erc20-tokens-on-pdex-for-free/2170"> 
                                    <span style={{display:'flex'}}>List your token <img src={arrowRight} className="box-arrow" /></span>
                                </a>
                            </div>
                            <div className="box-link"> 
                                <a href="https://we.incognito.org/t/provide/4247"> 
                                    <span style={{display:'flex'}}>Provide liquidity and earn rewards <img src={arrowRight} className="box-arrow" /></span>
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
                    <a  href="https://www.reddit.com/r/IncognitoChain/"  className="news-text-botton"> <img style={{width:'20px'}}  src={rediticon} /></a>    
                    
                    </div>
            </Row>


        </div> 
    );
  }
}
 
export default SlideItem; 
