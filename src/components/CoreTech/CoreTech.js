import React, { Component} from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import Section from '../Section';
import Ethernet from '../../images/svg/ethernet-level.svg';
import Packets from '../../images/svg/programmable-packets.svg';
import Chains from '../../images/svg/branch-chains.svg';
import styles from './CoreTech.css';

class CoreTech extends Component {
  render(){
    const { t } = this.props;
    return(
      <Section title={ t('Core Technology', {"Core": t('Core'), "Technology": t('Technology')}) } sticky="js-sticky" customClass="technology-box">
        <div>
          <p className={`text-size ${ t('style:text-size') } darkgrey-text`}>
            <Trans i18nKey='coretech.header'>
              The Marconi protocol is designed down to the ethernet level and powers a<br/> decentralized networking stack that provides connectivity, privacy, security and<br/> upgradability
            </Trans>
          </p>
          <div styleName="box-holder" className="col-xs-12">
            <div styleName="image-box" className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-left">
              <img src={Ethernet} width="455" height="248" alt="" />
            </div>
            <div styleName={`text-box ${ t('style:text-box') }`} className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right text-left">
              <h2 className="text-uppercase darkgrey-text regular-font">
                <Trans i18nKey='ethernet-level encryption'>
                  ethernet-level <br /> encryption
                </Trans>
              </h2>
              <p>{ t('coretech.ethernet') }</p>
            </div>
          </div>

          <div styleName="box-holder" className="col-xs-12">
            <div styleName="image-box" className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right">
              <img styleName="packets" className="img-responsive" src={Packets} width="490" height="100" alt="" />
            </div>
            <div styleName={`text-box ${ t('style:text-box') }`} className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-left text-left">
              <h2 className="text-uppercase darkgrey-text regular-font">{ t('Programmable Packets') }</h2>
              <p styleName="para">{ t('coretech.packets') }</p>
            </div>
          </div>

          <div styleName="box-holder" className="col-xs-12">
            <div styleName="image-box" className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-left">
              <img src={Chains} width="445" height="241" alt="" />
            </div>
            <div styleName={`text-box ${ t('style:text-box') }`} className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right text-left">
              <h2 className="text-uppercase darkgrey-text regular-font">{ t('Branch Chains')}</h2>
              <p>{ t('coretech.chains', { 'Blockchain': t('Blockchain', {count: 0}).toLowerCase() }) }</p>
            </div>
          </div>

          <div styleName={`bottom-text-box ${ t('style:bottom-text-box') }`} className="col-xs-12">
            <p>{ t('coretech.learn') }</p>
            <div styleName="btn1" className={`blue-btn ${ t('style:blue-btn') }`}><a href={ t('white-paper-link') }>{ t('Read White Paper', { 'Read': t('Read'), 'White Paper': t('White Paper')}) }</a> </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default (withNamespaces('common')(CoreTech));
