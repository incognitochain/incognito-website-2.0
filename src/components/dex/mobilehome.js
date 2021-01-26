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
  return (  
        <Flex  wrap="wrap" style={{padding:'0px 10px'}}>      
            {/* <Row justify="end" style={{marginTop:'245px'}}>
                <Col span={6} className="news-text">Total shielded: $12,000,000</Col>
                <Col span={6} className="news-text">Total liquidity: $9,000,000</Col>
                <Col span={6} className="news-text">Anonymous trades: $9,187,1874</Col>
                <Col span={6} className="news-text">24h trading vol: $200,000</Col>
            </Row> */}
            <Row justify="center" style={{marginTop:'60px', width:'100%'}}> 
                <Col span={24} className="news-text" > 
                            <div className="box-header"  style={{textAlign:"center"}} >
                                <h2 className="bigTitle" style={{textAlign:"center"}}> <span className="blue">Trade</span> crypto<br/> privately. </h2> 
                                <img className="pageHomeImage"  src={mobiletrade}/>
                            </div> 

                </Col>
            </Row> 
            <Row justify="end" style={{marginTop:'90px'}}> 
                <Col span={24} className="news-text" > 
                            <div className="box-header">
                                <h2> A truly anonymous<br/> crypto exchange.</h2>
                                <img className="listImage"  style={{margin:'0 auto'}} src={dex12}/>
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

            <Row justify="end" style={{marginTop:'60px'}}> 
                <Col span={24} className="news-text" > 
                            <div className="box-header">
                            <h2> Seamless<br/>
                            cross-chain swaps. </h2>
                            <img className="listImage"  src={dex22}/>
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
               
                
            </Row>

            <Row justify="end" style={{marginTop:'60px'}}> 
                <Col span={24} className="news-text" > 
                            <div className="box-header">
                            <h2>  Permissionless.<br/> Zero trading fees. </h2>
                            <img className="listImage"  src={dex32}/>
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
            
            <Row justify="end" className="footer-fullwidth"  style={{marginTop:'90px'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
