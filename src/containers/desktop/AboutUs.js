import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Link} from "react-router-dom";
import logo from '../../assets/logo2x.png';
import searchicon from '../../assets/retry.png';
import axios from 'axios';
import {Row,Col, Avatar, Input, Button, Layout, Menu, Breadcrumb } from 'antd';
import './App.scss'; 
import WAValidator from '@swyftx/api-crypto-address-validator';
import {INCO_CHAIN} from '../../services/const';
import GA from '../../services/GaEvents';

const { Header, Content, Footer } = Layout;

//function App() {
class AboutUs extends React.Component{

  constructor(pros){
    super(pros); 
    this.state = {
      address: null,
      network:null,
      loading:false,
      error:false,
    }; 
  } 
   
  resetsearch=()=>{
    this.setState({
      address:null,
      network:null,
      error:false, 
    });
  }
  onChange = async(e) =>{
    //console.log(e);
    console.log(e.target.value);
    var address = e.target.value;
    
    if( address.length < 15 && address.length >0 ){
      this.setState({address:address, network:"",error:true});
      console.log( " error, invalid address");
      return;
    }
    if(address ==""){
      this.setState({address:null, network:null,error:false}); 
      return;
    }
    var network = ""; 
    var validBitcoin = WAValidator.validate(address, 'bitcoin');
    var validEthereum = WAValidator.validate(address, 'Ethereum');
    //var validBinance = WAValidator.validate(address, 'BinanceCoin');
    if(validBitcoin){
      network= "BTC"; 
      this.setState({address:address, network:network,error:false });
      GA.clickAddress();
      return;
    }
    if(validEthereum){
      network="ETH";
      this.setState({address:address, network:network,error:false });
      GA.clickAddress();
      return;
    }else{
      //call Check IncognitoAddress
      var params={
                      "id": 1,
                      "jsonrpc": "1.0",
                      "method": "getpublickeyfrompaymentaddress",
                      "params": [address]
                }
      let res = await axios.post(INCO_CHAIN, params);
      console.log(res.data);
      if(res.data.Error == null && res.data.Result.PublicKeyInBase58Check!=null) {
        network= "PRV";  
        this.setState({address:address, network:network,error:false });
        GA.clickAddress();
        return;
      }else{
        this.setState({address:address, network:"",error:true});
        return;
      }
            
    }
    //======

    if(network!= null && address!=""){ 
      this.setState({address:address, network:network,error:false }); 
      return;
    }else{
      this.setState({address:null, network:"",error:true});
    } 
  } 
 

  render(){ 
    return ( 
          <div>

              <Row className="about-parh" style={{marginTop:'90px', paddingBottom:'90px'}} >
               <Col> 
               <h2 className="about-text"> <span className="about-text-bold">Incognito </span>is an open-source privacy project. </h2>
               <h2 className="about-text" style={{marginTop:'30px'}}>Built by a global <a href="https://we.incognito.org/"> <span className="about-span-black">community</span></a> 
               <br/>Powered by <a href="https://incscan.io/network/validators"><span className="about-span-underline-bold" >2000 Nodes</span></a>.
               <br/>Running on <a href="https://github.com/incognitochain"><span className="about-span-underline-bold">3 million lines of code</span></a>. </h2>
               
               <h2 className="about-text" style={{marginTop:'30px'}}>   
               If you’re reading this, you care about privacy. So you’ll understand us when we say we’re not just building for the future – we’re building for right now. And what we do right now, will determine the rights we have in our new economy.
               </h2>

               <h2 className="about-text" style={{marginTop:'30px'}}>   
               So, what can <span style={{fontWeight:"bold", fontFamily: "SF-Pro-Display-Medium",color:'#000000'}}>you</span> do right now?
               </h2> 
               <h2 className="about-text" style={{marginTop:'30px'}}> 
               <span className="about-text">You can anonymize your crypto with the </span> 
               <a href="https://incognito.org/wallet">
                 <span className="about-span-underline-bold">Incognito app</span></a>.
                </h2>
               <h2 className="about-text">Power the movement by
               <a href="https://we.incognito.org/t/node/338">
                  <span className="about-span-underline-bold"> running a Node</span></a>.</h2>
               <h2 className="about-text">  
               <a href="https://we.incognito.org/c/community/ideas"> 
                <span className="about-span-underline-bold">Contribute ideas</span>
                </a> to the project. </h2>
                <h2 className="about-text">  
                <a href="https://we.incognito.org/c/core-dev/community-dev">  
                <span className="about-span-underline-bold">Or help build privacy</span></a> for the world.</h2>

               </Col>
             </Row> 

          </div>
           
    );
  }
}

export default AboutUs;
