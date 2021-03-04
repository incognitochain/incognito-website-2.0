import React, { useState, useEffect } from 'react';
import {Row, Col, Input, Button, Layout, Menu, Breadcrumb,Statistic, Collapse, Space, Result, Spin, Image} from 'antd';
import appstore from '../../assets/button/website/appstore.png';
import ggplay from '../../assets/button/website/play.png';
import apk from '../../assets/button/website/apk.png';
import footerAppLogo from '../../assets/squad-logo.png';
import GA from '../../services/GaEvents';
import { SearchOutlined, FileSearchOutlined } from '@ant-design/icons';
import { Flex } from 'antd-mobile';
import ReactMarkdownWithHtml from 'react-markdown/with-html'

import includes from 'lodash/includes';
import toLower from 'lodash/toLower';
import isEmpty from 'lodash/isEmpty';

import telegram from '../../assets/telegram.png';
import twitter from '../../assets/twitter.png';
import searchResult from '../../assets/no-search-result.png';
import dataFAQ from './dataFAQ'

const { Panel } = Collapse;


export default function Faq() {
    const [dataFaq, setDataFaq] = useState([])
    const [listCatelogy, setListCatelogy] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [searchValue, setSearchValue] = useState('')

    function getListCategory(keySearch){
        let filterList = []
        if(!keySearch) {
            filterList = dataFAQ.map((data)=> {
                return data.category
            })
            const removeDuplicate = [...new Set(filterList)];
            setListCatelogy(removeDuplicate)
            
            if(selectedCategory) {
                getFaqByCategory(selectedCategory)
            } else {
                setSelectedCategory(removeDuplicate[0])
            }
        } else {
            filterList = dataFAQ.filter((data)=> {
                return includes(toLower(data?.ask), toLower(keySearch)) || includes(toLower(data?.answer), toLower(keySearch))
            })
            setDataFaq(filterList)
        }
    };

    function getFaqByCategory(selected) {
        const filter = dataFAQ.filter((data)=> data.category === selected)
        setDataFaq(filter)
    }

    const onClickCategory = (val) => {
        setSelectedCategory(val)
        setSearchValue('')
    }

    const onChangeSearchInput = (key) => {
        setSearchValue(key.target.value)
        getListCategory(key.target.value)
    }

    const renderListCatelogy = (val) => {
        const btnType = val === selectedCategory && searchValue === '' ? 'primary' : 'default'
        return (
            <Button className='btnCatelogy' type={btnType} shape="round" onClick={()=>onClickCategory(val)}>{val}</Button> 
        )
    }

    useEffect(() => {
        getListCategory()
    },[]);

    useEffect(() => {
        getFaqByCategory(selectedCategory)
    },[selectedCategory]);

    const renderPanel = () => {
        return dataFaq.map((data,index)=>{
            return (
                <Panel header={data?.ask} key={index+1}>
                  <ReactMarkdownWithHtml allowDangerousHtml children={data?.answer}/>
                </Panel>
            )
        })
    }

    const renderCollapse = () => {
        if(isEmpty(dataFaq)) {
            return (
                <div className='no-result-found'>
                    <img style={{width:'65px'}} src={searchResult}/>
                    <p className='no-result'>No results found.. yet.</p>
                    <p className='txt-community'>The Incognito knowledge base is bigger than this page.</p>
                    <a target='_blank' href='https://we.incognito.org/c/users/user-help'>Bring your question to the community.</a>
                </div>
            )
        }
        return listCatelogy.map((val)=> {
            if(val === selectedCategory) {
                return (
                    <Collapse expandIconPosition={'right'} defaultActiveKey={[1]}>
                        {renderPanel()}
                    </Collapse>
                )
            }
        })
    }

    return (  
        <div id='faq-page' wrap="wrap" style={{padding: '0px 10px'}}>  
            <Row>
                <Col xs={{span: 24}} sm={{span: 24}} lg={{span: 16, offset: 4}}>
                    <h2 className='title'>Welcome to the Incognito knowledge base.</h2>
                </Col>
                <Col xs={{span: 24}}  sm={{span: 24}} lg={{span: 16, offset: 4}}>
                    <Input placeholder='Ask a question…' className='inputSearch' value={searchValue} onChange={(event)=>onChangeSearchInput(event)} size="large" prefix={<SearchOutlined />} />
                    <p className='titleChooseCategory'>Or choose a category.</p>
                </Col>
            </Row>
            <Row>
                <Col xs={{span: 24}}  sm={{span: 24}} lg={{span: 16, offset: 4}}>
                    <div className='rowCatelogy'>
                        {listCatelogy.map((val)=>renderListCatelogy(val))}
                    </div>
                    {renderCollapse()}
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
                   
                    </div>


                </Row> 
                </Col>
            </Row>


        </div> 
    );
}