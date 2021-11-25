import React, {memo} from 'react';
import {Col, Row, Button} from "antd";
import logo from '../../assets/incognito-name.png';
import LinkMoreIcon from "../icons/icon.linkMore";
import phone from "../../assets/phone.png";
import {isIOS, isMacOs} from "react-device-detect";

const Wallet = () => {
    const onOpenInstall = () => {
        let url = 'https://play.google.com/store/apps/details?id=com.incognito.wallet';
        if (isMacOs || isIOS) {
            url = 'https://apps.apple.com/us/app/incognito-crypto-wallet/id1475631606?ls=1'
        }
        window.open(url, '_blank').focus();
    }
    return (
        <div>
            <Row justify="space-between" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col>
                    <img src={logo} className="mob-app-logo" alt="logo"/>
                    <p className="mob-wallet-title">
                        Buy and sell <br/>
                        crypto privately.
                    </p>
                    <div>
                        <h4 className="mob-wallet-content">
                            Commission-free trading and total anonymity.<br/>
                            Your keys, your money, your privacy.
                        </h4>
                    </div>
                    <Button className="mob-btn-start" onClick={onOpenInstall}>
                        Start trading confidentially
                    </Button>
                    <Row className="mob-wrap-category" justify="space-between">
                        <Col>
                            <p className="mob-category-title">$550 M</p>
                            <p className="mob-category-content">Trading volume</p>
                        </Col>
                        <div className="mob-line"/>
                        <Col className="">
                            <p className="mob-category-title">1,000,000</p>
                            <p className="mob-category-content">Anonymous trades</p>
                        </Col>
                        <div className="mob-line"/>
                        <Col>
                            <p className="mob-category-title">1,900</p>
                            <p className="mob-category-content">Validators</p>
                        </Col>
                    </Row>
                    <div style={{ marginTop: 24 }}>
                        <a target="_blank" className="more-text" href="https://we.incognito.org/">
                            Learn about Incognito
                            <LinkMoreIcon className="more-icon"/>
                        </a>
                    </div>
                </Col>
                <img className="mob-img-phone" src={phone} alt="phone"/>
            </Row>
        </div>
    );
};

export default memo(Wallet);
