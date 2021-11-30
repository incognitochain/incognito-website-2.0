import React, {memo} from 'react';
import {Col, Row} from "antd";
import logo from '../../assets/incognito-name.png';
import LinkMoreIcon from "../icons/icon.linkMore";
import phone from "../../assets/phone.png";
import {isIOS, isMacOs} from "react-device-detect";
import GA from "../../services/GaEvents";
import appstore from "../../assets/button/website/appstore.png";
import ggplay from "../../assets/button/website/play.png";
import apk from "../../assets/button/website/apk.png";
import {APP_CATEGORY} from "./wallet.desktop";
import shield from "../../assets/Wallet/shield.png";

const Wallet = () => {

    const renderItem = (item, index) => (
        <Row className={`${index !== 0 && 'mob-category-item'}`} style={{ alignItems: 'center' }}>
            <img className="mob-category-logo" src={item.icon}/>
            <Col>
                <p className="mob-category-title">{item.title}</p>
                <p className="mob-category-content">{item.content}</p>
            </Col>
        </Row>
    )

    return (
        <div>
            <Row justify="space-between" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col>
                    <img src={logo} className="mob-app-logo" alt="logo"/>
                    <p className="mob-wallet-title">
                        Buy and sell <br/>
                        crypto privately.
                    </p>
                </Col>
                <Col span={24} className="mob-wrap-app-link">
                    <a onClick={()=>GA.clickIOS()} href="https://apps.apple.com/us/app/incognito-crypto-wallet/id1475631606?ls=1">
                        <img className="mob-app-link" src={appstore}/>
                    </a>
                    <a onClick={()=>GA.clickGPlay()} href="https://play.google.com/store/apps/details?id=com.incognito.wallet">
                        <img className="mob-app-link" src={ggplay}/>
                    </a>
                    <a onClick={()=>GA.clickApk()}  href="https://github.com/incognitochain/incognito-wallet/releases">
                        <img className="mob-app-link" src={apk}/>
                    </a>
                </Col>
                <Col span={24} className="mob-wrap-category">
                    {APP_CATEGORY.map(renderItem)}
                </Col>
                <Row className="mob-wrap-shield-box">
                    <img className="mob-shield-icon" src={shield}/>
                    <Col>
                        <p className="mob-shield-title">REAL-WORLD TESTED</p>
                        <Row>
                            <Col className="mob-wrap-shield-first-section">
                                <p className="mob-shield-content">$540 M</p>
                                <p className="mob-shield-subcontent">Trading volume</p>
                            </Col>
                            <Col>
                                <p className="mob-shield-content">1,000,000</p>
                                <p className="mob-shield-subcontent">Anonymous trades</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mob-wrap-link">
                    <p className="more-gray-text">Powered by &nbsp;</p>
                    <p className="more-text">
                        2,000 nodes
                    </p>
                </Row>
                <Row>
                    <p className="more-gray-text">&nbsp;, &nbsp;</p>
                    <a target="_blank" className="more-text" href="https://we.incognito.org/t/introducing-the-new-pdex-pdex-v3/13026">
                        interesting tech
                        <LinkMoreIcon className="more-icon"/>
                    </a>
                    <p className="more-gray-text">&nbsp;, & &nbsp;</p>
                    <a target="_blank" className="more-text" href="https://we.incognito.org/">
                        great people
                        <LinkMoreIcon className="more-icon"/>
                    </a>
                </Row>
                <img className="mob-img-phone" src={phone} alt="phone"/>
            </Row>
        </div>
    );
};

export default memo(Wallet);
