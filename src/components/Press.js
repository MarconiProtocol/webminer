import React, { Component } from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import Section from './Section';
import { Carousel } from 'react-bootstrap'

const PressInfo = {
  forbes: {
    url: 'https://www.forbes.com/sites/geraldfenech/2019/01/31/renovating-the-internet-for-enterprises/?ss=crypto-blockchain#340836b36938',
    image: require('../images/press/forbes-small.png')
  },
  venturebeat: {
    url: 'https://venturebeat.com/2019/01/27/blockchain-can-help-enterprises-improve-multi-cloud-network-management/',
    image: require('../images/press/venturebeat.png')
  },
  inc: {
    url: 'https://www.inc.com/kenny-kline/why-new-protocol-marconi-is-restructuring-core-internet-technology.html',
    image: require('../images/press/inc-small.png')
  },
  networkworld: {
    url: 'https://www.networkworld.com/article/3342037/blockchain/why-blockchain-may-be-blockchains-best-cybersecurity-option.html',
    image: require('../images/press/networkworld-small.png')
  },
  forbeschina: {
    url: 'http://www.forbeschina.com/technology/331',
    image: require('../images/press/forbes-china-small.png')
  },
  ccn: {
    url: 'https://www.ccn.com/dubbed-cryptos-hot-new-trend-staking-raises-major-security-risks',
    image: require('../images/press/ccn-small.png')
  },
  cioreview: {
    url: 'https://www.cioreview.com/news/understanding-blockchains-cyber-vulnerability-and-its-solution-nid-28124-cid-176.html',
    image: require('../images/press/cio-small.png')
  },
  e27: {
    url: 'https://e27.co/blockchain-still-vulnerable-to-hacks-despite-security-hype-but-here-are-some-solutions-20190212/?utm_source=searchbar',
    image: require('../images/press/e27-small.png')
  },
  idg: {
    url: 'https://www.networkworld.com/article/3356496/how-blockchain-will-manage-networks.html?utm_source=twitter&utm_medium=social&utm_campaign=organic&utm_source=HS_social',
    image: require('../images/press/idg-small.png')
  },
}
class Press extends Component {
  render() {
    const { t } = this.props;
    return (
      <Section title={t("Press", { count: 3 })}>
        <Carousel indicators={true} controls={false} interval={3000}>
          <Carousel.Item >
            <div className="row">
              <div className="press-logo-wrapper col-md-4">
                <a href={PressInfo.forbes.url} target="_blank">
                  <img src={PressInfo.forbes.image}></img>
                </a>
              </div>
              <div className="press-logo-wrapper col-md-4">
                <a href={PressInfo.venturebeat.url} target="_blank">
                  <img src={PressInfo.venturebeat.image}></img>
                </a>
              </div>
              <div className="press-logo-wrapper col-md-4">
                <a href={PressInfo.inc.url} target="_blank">
                  <img src={PressInfo.inc.image}></img>
                </a>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className="row">
              <div className="press-logo-wrapper col-md-4">
                <a href={PressInfo.networkworld.url} target="_blank">
                  <img src={PressInfo.networkworld.image}></img>
                </a>
              </div>
              <div className="press-logo-wrapper col-md-4">
                <a href={PressInfo.forbeschina.url} target="_blank">
                <div className="container-fluid">
                  <img src={PressInfo.forbeschina.image}></img></div>
                </a>
              </div>
              <div className="press-logo-wrapper col-md-4">
                <a href={PressInfo.ccn.url} target="_blank">
                  <img src={PressInfo.ccn.image}></img>
                </a>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className="row">
              <div className="press-logo-wrapper col-md-4">
                <a href={PressInfo.cioreview.url} target="_blank">
                  <img src={PressInfo.cioreview.image}></img>
                </a>
              </div>
              <div className="press-logo-wrapper col-md-4">
                <a href={PressInfo.e27.url} target="_blank">
                  <img src={PressInfo.e27.image}></img>
                </a>
              </div>
              <div className="press-logo-wrapper col-md-4" >
                <a href={PressInfo.idg.url} target="_blank">
                  <img src={PressInfo.idg.image}></img>
                </a>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Section>
    );
  }
}

export default (withNamespaces('common')(Press));
