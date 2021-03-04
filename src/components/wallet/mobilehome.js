import React, { useState, useEffect } from 'react';
import {Row,Col, Avatar, Input, Button, Layout, Menu, Breadcrumb } from 'antd';
import hold from '../../assets/slide/shield.png';
import send from '../../assets/slide/send.png';
import buy from '../../assets/slide/trade.png'; 
import mobiletrade from '../../assets/holdmobile.png';  
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
import Apis from '../../services/Apis';
import { Flex, WhiteSpace } from 'antd-mobile';
import { Carousel } from 'antd';
import Slider from "react-slick";

import rediticon from '../../assets/redit.png';
import telegram from '../../assets/telegram.png';
import twitter from '../../assets/twitter.png';

class MobileHome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index:0,
            report:null,
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
   async componentDidMount() {
         
        // const interval = setInterval(() => {  
        //      this.onChange();
        // }, 3000);
        
        const report = await Apis.getReportDashboard();
        this.setState({report:report});
      }
    
      
  render(){
    let totalShield , PdexVolume , Pdex24hVolume;
    if( this.state.report !=null){
      totalShield = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.state.report.DepositVolume);
      PdexVolume = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.state.report.PdexVolume);
      Pdex24hVolume = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.state.report.Pdex24hVolume);
    }

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };


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
                            <div className="box-header" style={{textAlign:"center"}} >
                                <h2 className="bigTitle" style={{textAlign:"center"}}> <span className="send">Hold</span> crypto<br/> privately. </h2> 
                                <img className="pageHomeImage"  src={mobiletrade}/>
                            </div> 

                </Col>
            </Row> 
 
            <Row justify="end" style={{marginTop:'90px'}}> 
                <Col span={24} className="news-text" > 
                            <div className="box-header">
                                <h2>Get privacy for any<br/> cryptocurrency.</h2>
                            </div>
                            <div className="box-header"  style={{textAlign:"center"}} >
                              <img className="listImage"  style={{margin:'0 auto'}} src={wallet1}/>
                            </div>
                            <div className="box-desc">
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

            <Row justify="end" style={{marginTop:'60px'}}> 
                <Col span={24} className="news-text" > 
                            <div className="box-header">
                            <h2> Send and receive <br/>without a trace.</h2>
                           
                            </div>
                            <div className="box-header"  style={{textAlign:"center"}} >
                                <img className="listImage"  src={wallet2}/>
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
            </Row>

            <Row justify="end" style={{marginTop:'60px'}}> 
                <Col span={24} className="news-text" > 
                            <div className="box-header">
                            <h2>Open-source.<br/>Open-minded. </h2>
                          
                            </div> 
                            <div className="box-header"  style={{textAlign:"center"}} >
                               <img className="listImage"  src={wallet3}/>
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
            
            <Row justify="end" className="footer-fullwidth"   style={{marginTop:'90px'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
                    <a  href="https://www.reddit.com/r/IncognitoChain/"  className="news-text-botton"> <img style={{width:'20px'}}  src={rediticon} /></a>    
                    
                    </div>


                </Row> 
                </Col>
            </Row>
            
        </Flex> 
    );
  }
}
 
export default MobileHome; 
