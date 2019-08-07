import React, { Component} from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import Hero from '../../images/svg/heroimage.svg';
import styles from './Banner.css';

class Banner extends Component {
  componentDidMount(){
    document.title = "Marconi - Smart Ethernet Protocol"
  }

  constructor(props) {
    super(props);
    this.state = { openModal: false };
  }

  handleClose = () => {
    this.setState({ openModal: false });
  }

  showModal = () => {
    this.setState({ openModal: true });
  }

  render(){
    const { t } = this.props;
    return(
      <div styleName="outer-box" className="blue-bg col-xs-12 no-padding">
        <section className="container">
          <div className="row">
            <div styleName="banner" className="col-xs-12">
              <div styleName="v-align">
                <div styleName={`banner-text ${ t('style:banner-text') }`} className="col-lg-6 col-md-7 col-sm-12 col-xs-12">
                  <h1 styleName={`banner-heading ${ t('style:banner-heading') }`}>
                    <Trans i18nKey='banner.header'>
                      <br/>Smart Ethernet Protocol
                    </Trans>
                  </h1>
                  <p>
                    <Trans i18nKey='banner.description'>
                        A new blockchain protocol using programmable <br /> packets to enhance connectivity, security, and <br /> privacy
                    </Trans>
                    <span className="text-uppercase bold-font">{ t('hero.cta-prompt') }</span></p>
                  <div styleName="btn1" className={`blue-btn ${ t('style:blue-btn') } joinBtn`}><a href="https://github.com/MarconiProtocol/wiki/wiki">{ t('Get Started') }</a> </div>
                  <div styleName="btn2" className={`transparent-btn ${ t('style:transparent-btn') }`}><a className="click-btn" href={ t('white-paper-link') }>{ t('Read White Paper', { 'Read': t('Read'), 'White Paper': t('White Paper')}) }</a> </div>
                </div>
                <figure styleName="banner-image" className="col-lg-6 col-md-5 col-sm-12 col-xs-12">
                  <img src={Hero} width="630" height="auto" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default (withNamespaces('common')(Banner));
