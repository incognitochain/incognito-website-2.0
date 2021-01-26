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
        <div>
            <Row justify="end" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12} className="slideRight" style={{marginTop:'120px'}}>
                    <h2 className="header-input-title"> <span>Reveal what people already know about you <img src={arrowRight} style={{width:'14px'}} /></span></h2>
                    <Input className="header-input" onChange={e=>setAddress(e.target.value)} placeholder="Enter a Bitcoin or Ethereum address"></Input>  
                </Col>
                {isLoading ? (
                    <Col span={12} className="textLeft" style={{paddingRight:'10px'}} > 
                     <Spin indicator={antIcon} />
                    </Col>
                ) : (
                    error && address!="" ? 
                        <Col span={12} className="textLeft " style={{paddingRight:'10px',marginTop:'120px'}} > 
                             <h2 className="font20 orange typing">This address does not exist.  </h2>
                             <h2 className="font20 orange typing">You might as well get a better one. </h2>
                        </Col> :
                         <Col span={12} className="textLeft" style={{paddingRight:'10px',marginTop:'120px'}} > 
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
        </div> 
  );
}


export default Checking;


{/* 
              <Texty  type="alpha" mode="smooth" >  
    <Col span={12} className="textLeft" style={{paddingRight:'10px',marginTop:'120px'}} >
                            {props.symbol!="PRV" && balance!="" ? (
                                <h2 className="font20 orange historyx typing">
                                    <div dangerouslySetInnerHTML={{ __html: `${balance}`}} /> 
                                </h2>
                                ):null 
                            }
                           { txs.length > 0 ? 
                                txs.map((item, index) => 
                                    balance !=""?
                                        <h2 className={ index%2==0 ? "font20 historyx typing":"font20 orange historyx typing" } > <div dangerouslySetInnerHTML={{ __html: item }} /></h2> :
                                        <h2 className={ index%2==0 ? "font20 orange historyx typing":"font20 historyx typing" } > <div dangerouslySetInnerHTML={{ __html: item }} /></h2>
                                ) :null 
                            } 
                            
                        </Col>

    <Col span={12} className="textLeft" style={{paddingRight:'10px'}} >  
    <h2 className="font20 orange">{ `${balance} ${props.symbol}` } in just one wallet? You're loaded!</h2>
    <h2 className="font20 orange">Wanna be friends? </h2>
    <h2 className="font20 gray">Nice Uniswap trade on DAI -> ETH.</h2>
    <h2 className="font20 gray">You look like someone who knows what you're doing. </h2>
    <h2 className="font20 orange">Oof Bitfinex hack.</h2>
    <h2 className="font20 orange">Hope they didn't get your KYC docs.  </h2>
    <h2 className="font20 gray">I see you have friends in high places.</h2>
    <h2 className="font20 gray">Ox941 has { `${balance} ${props.symbol}` } , can we party at his?</h2>
    <h2 className="font20 orange">Borrowing 9481,174 USDT from Aave? </h2>
    <h2 className="font20 orange">Fallen on hard times? </h2>  
</Col> */}