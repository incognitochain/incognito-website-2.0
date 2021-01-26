import axios from 'axios';
import {ETHAPI_BALANCE, ETHAPI_TXS, BTC_BALANCE,BTC_TXS, BNB_BALANCE,BNB_TXS} from './const';
import {UNISWAP,KYBER,OX, OX2,IDEX } from './const';
import { BranchesOutlined } from '@ant-design/icons';
const BigNumber = require('bignumber.js');

export default {
    
//    const balance =  await axios.get(`${ETHAPI_BALANCE}${props.address}`); 
//    const txs =  await axios.get(`${ETHAPI_TXS}${props.address}`); 
    getIncognitoMessage:() =>{
        
        return ['Showing off, are you?.<br/>You’re already anonymous. Well done..','Now go tell your friends to stop being careless with their money. Let’s spread some common sense around.'];
        
    },
    getETHBalance: async (address) => {
     
        if(!address) {
            return "This address does not exist.<br/> You might as well get a better one." ;
        }
        const balance =  await axios.get(`${ETHAPI_BALANCE}${address}`);  
        let y = BigNumber(balance.data.result);
        if(y ==0 ){
            return "";
        }
        y = y.div(10e17);
        if(y <= 3 ){
            return  "You’ve got <span>" + y.toFormat(6) + "</span> ETH. Something’s better than nothing, hey?" ;
        } 
        return "<span>" +y.toFormat(6) + "</span> ETH in just one wallet? You’re loaded! Wanna be friends?" ;
         
    },

    getETHTxs: async (address) => {
        
        if(!address) {
            return ["This address does not exist.<br/>You might as well get a better one."];
        }
        address = address.toLowerCase();
        const txs = await axios.get(`${ETHAPI_TXS}${address}`); 
        //find history tx 
        if(txs.data.result.length ==0){
            return ["This wallet is empty. <br/>You might as well start with a better one."];
        } 
        var tmp ="";
        var message =[];
        var cUniswap =false;
        var cKyber = false;
        var cOx =false;
        var cOx2 = false;
        var cIdex= false;
        var lengthTxs =txs.data.result.length ;
        for (var i =0 ; i <lengthTxs ; i++){
            var item = txs.data.result[i]; 
           
            if((item.from ==UNISWAP || item.to ==UNISWAP) && cUniswap ==false ){
                tmp = item;
                console.log("UNISWAP");
                var d = new Date(item.timeStamp * 1000);
                message.push("Nice Uniswap trade on "+d.toLocaleDateString() + ". You look like someone who knows what you’re doing.");
                cUniswap =true;
            }
            if( (item.from ==KYBER || item.to ==KYBER ) && cKyber ==false){
                console.log("KYBER");
                tmp = item;
                var d = new Date( item.timeStamp * 1000);
                message.push("Nice KYBER trade on "+d.toLocaleDateString()+". You look like someone who knows what you’re doing.");
                cKyber = true; 
            }
            if ((item.from ==OX || item.to ==OX ) && cOx==false){
                console.log("OX");
                tmp = item;
                var d = new Date( item.timeStamp * 1000);
                cOx=true;
                message.push("Nice OX trade on "+d.toLocaleDateString() + ". You look like someone who knows what you’re doing.");
            }
            if((item.from ==OX2 || item.to ==OX2 ) && cOx2==false){
                console.log("OX2");
                var d = new Date( item.timeStamp * 1000);
                message.push("Nice OX2 trade on "+d.toLocaleDateString() + ". You look like someone who knows what you’re doing.");
                cOx2=true;
            }
            if((item.from ==IDEX || item.to ==IDEX )  && cIdex==false){
                console.log("IDEX");
                tmp = item;
                cIdex=false;
                var d = new Date( item.timeStamp * 1000);
                message.push("Nice IDEX trade on "+d.toLocaleDateString() + ". You look like someone who knows what you’re doing."); 
            }
            if(lengthTxs > 2000 && ( cUniswap==true || cKyber || cOx || cOx2 || cIdex)){
                break;
            }

        } 
        var checkSent = false;
        var  recive = false;
        for (var i =0 ; i < lengthTxs; i++){
            
            var item = txs.data.result[i];
            console.log(item);
            var d = new Date( item.timeStamp * 1000); 
            let y = BigNumber(item.value);
            y = y.div(10e17); 
            let x = item.to.substring(0,5);
            if(address != item.to && checkSent==false && y!=0){
                message.push(d.toLocaleDateString() + " - bank statement:<br/> <span>Sent "+y.toFormat(5)+"</span> ETH to "+x+" Nice job."); 
                checkSent = true; 
            }
            if(address == item.to && recive ==false && y!=0){ 
                message.push("It’s always nice to see money come in.<br/> What will you do with the <span>"+y.toFormat(5)+"</span> ETH you received on "+d.toLocaleDateString()+"?"); 
                recive = true; 
            }
            if(lengthTxs > 2000 && ( recive==true || checkSent )){
                break;
            }
         }

         return message;
    },

    // BNB
    getBTCBalance: async (address) => {
     
        if(!address) {
            return  "This address does not exist.<br/>You might as well get a better one.";
        }
        
        const balance =  await axios.get(`${BTC_BALANCE}${address}`, { crossdomain: true }); 
        console.log(balance);
        let y = BigNumber(balance.data.confirmed);
        if(y ==0 ){
            return "";
        }
        //let z = BigNumber(balance.data.received);
        y = y.div(10e9);
        
        if(y <= 3 ){
            return "You’ve got <span>" + y.toFormat(6) + "</span> BTC. Something’s better than nothing, hey?";
        } 
        return "<span>" +y.toFormat(6) + "</span> BTC in just one wallet? You’re loaded! Wanna be friends?";
         
    },

    getBTCTxs: async (address) => {

        const txs =  await axios.get(`${BTC_TXS}${address}`, { crossdomain: true }); 
        console.log(txs);
        var message=[];
        var checkSent = false;
        var  recive = false;
        var lengthTxs  = txs.data.length;   
        if(lengthTxs ==0){
            return ["This wallet is empty.","You might as well start with a better one."];
        }  
        for (var i =0 ; i < lengthTxs; i++){ 
            var item = txs.data[i];
            console.log(item);
            for(var j =0 ; j <item.inputs.length ; j++){  
                
                if(item.inputs[j].address == address){
                    console.log(item.inputs[j]);
                    var d = new Date( item.time * 1000); 
                    let y = BigNumber(item.inputs[j].value);
                    y = y.div(10e9); 
                    let x = item.inputs[j].address.substring(0,5);
                    if(address != item.inputs[j].address && checkSent==false && y!=0){
                        message.push(d.toLocaleDateString() + " - bank statement:<br/> <span>Sent "+y.toFormat(6)+"</span> BTC to "+x+" Nice job."); 
                        checkSent = true; 
                    }
            }
            for(var jj =0 ; jj <item.outputs.length  ; jj++){  
                
                if(item.outputs[jj].address == address){
                    console.log(item.outputs[jj]);
                    var d = new Date( item.time * 1000); 
                    let y = BigNumber(item.outputs[jj].value);
                    y = y.div(10e9); 
                    let x = item.outputs[jj].address.substring(0,5);
                    if(address == item.outputs[jj].address && recive ==false && y!=0){ 
                        message.push("It’s always nice to see money come in.<br/> What will you do with the <span>"+y.toFormat(6)+"</span> BTC you received on "+d.toLocaleDateString()+"?"); 
                        recive = true; 
                    }
                    
                }
            }

            if(lengthTxs > 2000 && ( recive==true || checkSent )){
                break;
            }
         }
        }
        return message;

    },
    
}