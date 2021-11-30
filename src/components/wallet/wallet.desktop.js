import React, {memo} from 'react';
import {Button, Col, Row} from "antd";
import logo from '../../assets/incognito-name.png';
import phone from "../../assets/phone.png";
import {
    isMacOs,
    isIOS,
} from "react-device-detect";
import GA from "../../services/GaEvents";
import appstore from "../../assets/button/website/appstore.png";
import ggplay from "../../assets/button/website/play.png";
import apk from "../../assets/button/website/apk.png";
import user from "../../assets/Wallet/user.png";
import key from "../../assets/Wallet/key.png";
import free from "../../assets/Wallet/free.png";
import shield from "../../assets/Wallet/shield.png";
import LinkMoreIcon from "../icons/icon.linkMore";

const APP_CATEGORY = [
    {
        icon: user,
        title: 'Total anonymity',
        content: 'No one can see you, or what you do.'
    },
    {
        icon: free,
        title: 'Commission-free trading',
        content: 'What you buy is what you get.'
    },
    {
        icon: key,
        title: 'Hold your own keys',
        content: 'You have sole custody of your funds.'
    }
]

const Wallet = () => {
    const renderItem = (item, index) => (
        <Row className={`${index !== 0 && 'category-item'}`}>
            <img className="category-logo" src={item.icon}/>
            <Col>
                <p className="category-title">{item.title}</p>
                <p className="category-content">{item.content}</p>
            </Col>
        </Row>
    )

    React.useEffect(() => {
        console.log('DIMENSIONS::::', window.innerWidth,  window.innerHeight)
    }, [])

    return (
            <Row
                className="wrap-home"
                justify="space-between"
            >
                <Col>
                    <img src={logo} className="app-logo"  alt="logo"/>
                    <p className="wallet-title">
                        Buy and sell crypto privately.
                    </p>
                    <Col span={24} className="wrap-app-link">
                        <a onClick={()=>GA.clickIOS()} href="https://apps.apple.com/us/app/incognito-crypto-wallet/id1475631606?ls=1">
                            <img className="app-link" src={appstore}/>
                        </a>
                        <a onClick={()=>GA.clickGPlay()} href="https://play.google.com/store/apps/details?id=com.incognito.wallet">
                            <img className="app-link" src={ggplay}/>
                        </a>
                        <a onClick={()=>GA.clickApk()}  href="https://github.com/incognitochain/incognito-wallet/releases">
                            <img className="app-link" src={apk}/>
                        </a>
                    </Col>
                    <Col span={24} className="wrap-category">
                        {APP_CATEGORY.map(renderItem)}
                    </Col>
                    <Row className="wrap-shield-box">
                        <img className="shield-icon" src={shield}/>
                        <Col>
                            <p className="shield-title">REAL-WORLD TESTED</p>
                            <Row>
                                <Col className="wrap-shield-first-section">
                                    <p className="shield-content">$540 M</p>
                                    <p className="shield-subcontent">Trading volume</p>
                                </Col>p
                                <Col>
                                    <p className="shield-content">1,000,000</p>
                                    <p className="shield-subcontent">Anonymous trades</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="wrap-link">
                        <p className="more-gray-text">Powered by &nbsp;</p>
                        <p className="more-text">
                            2,000 nodes
                        </p>
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
                </Col>
                <img className="img-phone" src={phone} alt="phone"/>
            </Row>
    );
};

export default memo(Wallet);
