import React, { useState, useEffect } from 'react';
import {Spin, Row,Col, Avatar, Input, Button, Layout, Menu, Breadcrumb } from 'antd';
import step1 from '../../assets/step1.png';
import step2 from '../../assets/step2.png';
import step3 from '../../assets/step3.png'; 
import axios from 'axios'; 
import {INCO_CHAIN, ETHAPI_BALANCE, ETHAPI_TXS, BTC_BALANCE,BTC_TXS,BNB_BALANCE,BNB_TXS} from '../../services/const';
import { LoadingOutlined } from '@ant-design/icons';
import Apis from '../../services/Apis';
import QueueAnim from 'rc-queue-anim';  
const sdk = require('@binance-chain/javascript-sdk')


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function Checking(props) {  
    const [txs, setHistoryTx] = useState({hits:[]});    
    const [balance, setBalance] = useState({hits:[]});     
    const [isLoading, setIsLoading] = useState(false);   
    useEffect(() => {
    const fetchData = async () => {
        console.log("fetch data");
        console.log(props);
        setIsLoading(true);
        if(props.symbol =="ETH"){
            const balance =await Apis.getETHBalance(props.address);
            const history = await Apis.getETHTxs(props.address);
            //setBalance(balance);
            //console.log(":history",history);
            if(balance!=""){
                history.splice(0,0,balance);
                history.join()
            }
            setHistoryTx(history);
        }
        if(props.symbol =="BTC"){
            // const balance =  await axios.get(`${BTC_BALANCE}${props.address}`,  { crossdomain: true }); 
            // const txs =  await axios.get(`${BTC_TXS}${props.address}`, { crossdomain: true }); 
            // setHistoryTx(balance.data); 
            const balance =await Apis.getBTCBalance(props.address);
            await new Promise(r => setTimeout(r, 2000));
            var history = await Apis.getBTCTxs(props.address);
            if(balance!=""){
                history.splice(0,0,balance);
                history.join()
            }
            setHistoryTx(history); 

        }
        if(props.symbol =="BNB"){
            const balance =  await axios.get(`${BNB_BALANCE}${props.address}`); 
            const txs =  await axios.get(`${BNB_TXS}${props.address}`); 
            console.log(balance, txs);
            setHistoryTx(balance.data); 
        }
        if(props.symbol=="PRV"){
            const txs = Apis.getIncognitoMessage();
            setHistoryTx(txs);
        } 

        setIsLoading(false);
      }; 
    fetchData();

    }, [props.address]);
   
  return (  
        
            <Row justify="center" style={{width:'100%'}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}> 
                     
                {isLoading ? (
                    <Col span={24} style={{width:'100%'}}> 
                         <Spin indicator={antIcon} />
                    </Col>
                ):(
                    props.error && props.address !="" ? 
                        <Col span={24}  > 
                             <h2 className="font20 orange">This address does not exist.  </h2>
                             <h2 className="font20 orange">You might as well get a better one. </h2>
                        </Col> :
                        <Col span={24 }>  
                            <QueueAnim interval={2000} >
                            { txs.length > 0 ? 
                                    txs.map((item,indexs) => 
                                        <h2 key={indexs} className={"font20 historyx typewriter"} ><p className="type" dangerouslySetInnerHTML={{ __html: item }} /></h2>
                                    ) :null  
                                }   
                            </QueueAnim>   
                        </Col>
                )}  
            </Row> 

  );
}


export default Checking;


{/* <Col span={12} className="textLeft" style={{paddingRight:'10px'}} >  
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