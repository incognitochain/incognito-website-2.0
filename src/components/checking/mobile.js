import React, { useState, useEffect } from 'react';
import {Spin, Row,Col, Avatar, Input, Button, Layout, Menu, Breadcrumb } from 'antd';
import step1 from '../../assets/step1.png';
import step2 from '../../assets/step2.png';
import step3 from '../../assets/step3.png';
import appstore from '../../assets/button/website/appstore.png';
import ggplay from '../../assets/button/website/play.png';
import apk from '../../assets/button/website/apk.png';
import arrowRight from '../../assets/Arrow/Website/down.png';
import qrcodeimg from '../../assets/qrcode.png';

import axios from 'axios';
import {INCO_CHAIN, ETHAPI_BALANCE, ETHAPI_TXS, BTC_BALANCE,BTC_TXS,BNB_BALANCE,BNB_TXS} from '../../services/const';
import { LoadingOutlined } from '@ant-design/icons';
import Apis from '../../services/Apis';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css'; 
import QueueAnim from 'rc-queue-anim'; 
import WAValidator from '@swyftx/api-crypto-address-validator'; 
import GA from '../../services/GaEvents';
import { Flex, WhiteSpace } from 'antd-mobile';
import { Carousel } from 'antd';

const sdk = require('@binance-chain/javascript-sdk')

Array.prototype.insert = function(i,...rest){
    return this.slice(0,i).concat(rest,this.slice(i));
  }
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function Checking(props) {  
    const [address, setAddress] = useState("");    
    const [network, setNetwork] = useState("");    
    const [symbol, setSymbol] = useState(null);    
    const [error, setError] =  useState(false);
    
    const [txs, setHistoryTx] = useState({hits:[]});    
    const [balance, setBalance] = useState("");    
    const [isLoading, setIsLoading] = useState(false);   
    const [index, setIndex] = useState(0);    

    useEffect(() => {
    
    //    const CheckAddressNetwork =async () => {
             
    const fetchData = async () => {
        console.log("fetch data", address); 
        if( address!=null && address.length < 15 && address.length >0 ){
        //this.setState({address:address, network:"",error:true});
            setAddress("");
            setNetwork("");
            setError(true);
            console.log( " error, invalid address");
            return;
        }
        if(address ==""){
            setAddress("");
            setNetwork(null);
            setError(false);
            return;
        }
        var networktmp = ""; 
        var validBitcoin = WAValidator.validate(address, 'bitcoin');
        var validEthereum = WAValidator.validate(address, 'Ethereum');
        //var validBinance = WAValidator.validate(address, 'BinanceCoin');
        //console.log(validBitcoin, validEthereum);

        if(validBitcoin){
        networktmp= "BTC"; 
        //this.setState({address:address, network:network,error:false });
            //setAddress(address);
            setNetwork(networktmp);
            setError(false);
        //GA.clickAddress(); 
        }
        if(validEthereum){
        networktmp="ETH";
        //this.setState({address:address, network:network,error:false });
        //GA.clickAddress();
            //setAddress(address);
            setNetwork(networktmp);
            setError(false); 
        }if(!validBitcoin && !validEthereum){
            //call Check IncognitoAddress
            var params={
                            "id": 1,
                            "jsonrpc": "1.0",
                            "method": "getpublickeyfrompaymentaddress",
                            "params": [address]
                        }
            let res = await axios.post(INCO_CHAIN, params);

            if(res.data.Error == null && res.data.Result.PublicKeyInBase58Check!=null) {
                networktmp= "PRV";   
                //setAddress(address);
                setNetwork(networktmp);
                setError(false);
        
            }else{ 
                networktmp= "";   
                //setAddress(address);
                setNetwork(networktmp);
                setError(true);
        
            }       
        
        }
        //====== //======//====== 
        console.log("fetch respone", address, networktmp); 
        setIsLoading(true);
        if(networktmp =="ETH"){ 
            const balance =await Apis.getETHBalance(address); 
            //setBalance(balance);
            await new Promise(r => setTimeout(r, 2000));
            var history = await Apis.getETHTxs(address);
            console.log(":history",history);
            if(balance!=""){
                history.splice(0,0,balance);
                history.join()
            }
            setHistoryTx(history);

        }
        if(networktmp =="BTC"){
            const balance =await Apis.getBTCBalance(address);
            //setBalance(balance);
            await new Promise(r => setTimeout(r, 2000));
            var history = await Apis.getBTCTxs(address);
            if(balance!=""){
                history.splice(0,0,balance);
                history.join()
            }
            setHistoryTx(history); 
        }
        
        if(networktmp=="PRV"){
            const txs = Apis.getIncognitoMessage();
            setHistoryTx(txs);
        } 
        setIsLoading(false);
        
      }; 
     
      fetchData();

    }, [address]);
   
  return (  
         <Flex wrap="wrap" style={{padding:'0px 20px', paddingBottom:'90px'}} >      
            <Row justify="end" gutter={{md: 24}}>
                <Col span={24} className="slideRight" style={{marginTop:'60px'}}>
                    <h2 className="mb-header-input-title" style={{fontSize:'13px'}}>
                         <span  style={{display:'flex'}}>Reveal what people already know about you 
                         <img src={arrowRight} style={{width:'14px', height:'14px', margin:'4px', marginLeft:'10px'}} /></span>
                    </h2>
                    <Input className="header-input mb-input-search" 
                     onChange={e=>setAddress(e.target.value)} placeholder="Enter a Bitcoin or Ethereum address"></Input>  
                </Col>
                {isLoading ? (
                    <Col span={24} style={{marginTop:'30px', textAlign:'center'}} > 
                     <Spin indicator={antIcon} />
                    </Col>
                ) : (
                    error && address!="" ? 
                        <Col span={24} className="textLeft " style={{paddingRight:'10px',marginTop:'30px'}} > 
                             <h2 className="font20 orange typing">This address does not exist.  </h2>
                             <h2 className="font20 orange typing">You might as well get a better one. </h2>
                        </Col> :
                         <Col span={24} className="textLeft" style={{paddingRight:'10px',marginTop:'30px'}} > 
                            <QueueAnim interval={1500} className="">
                            { txs.length > 0 ? 
                                    txs.map((item,indexs) =>  
                                        <h2 key={indexs} className={"font20 historyx typewriter"} ><p className="typing" dangerouslySetInnerHTML={{ __html: item }} /></h2>
                                    ) :null  
                                }   
                            </QueueAnim>                
                            
                            { txs.length >0 ? 
                             <img className="font20 orange typing" src={qrcodeimg}/>
                            :"" }   

                         </Col>
                        
                )} 
            </Row>
        </Flex> 
  );
}


export default Checking;

 