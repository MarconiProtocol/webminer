import React, { Component} from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import MailingModal from '../MailingModal/MailingModal';
import Logo from '../../images/svg/logo.svg';
import styles from './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    if (typeof URLSearchParams !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const mailinglist = searchParams.get('mailinglist') || '';
      if (mailinglist != '') {
        this.state = { openModal: true };
      } else {
        this.state = { openModal: false };
      }
    } else {
      var results = new RegExp('[\?&]mailinglist=([^&#]*)').exec(window.location.href);
      if (results==null){
        this.state = { openModal: false };
      } else{
        this.state = { openModal: true };
      }
    }
  }

  handleClose = () => {
    this.setState({ openModal: false });
  }

  showModal = () => {
    this.setState({ openModal: true });
  }

  componentDidMount = () => {
    if (!this.props.showLanguage) {
      this.props.i18n.changeLanguage('en');
      this.setState({lng: "en"});
    }
  }

  render(){
    const { t } = this.props;
    return(
      <footer className="footer-section blue-bg col-xs-12 no-padding">
        <section className="container">
          <div className="row">
            <div style={{paddingTop: this.props.footerPadding}} styleName="footer-box" className="col-xs-12 text-center">
              <div className="col-md-10 col-md-push-2">
                <div styleName="footer-links align-right" className="col-xs-12 col-md-3">
                  <ul className="row">
                    <li styleName={`link-head ${ t('style:link-head') }`} className="col-xs-12"><b>{ t('Organization') }</b></li>
                    <li styleName="clickable" className="col-xs-12"><Link to="/team">{ t('Team') }</Link></li>
                    <li styleName="clickable" className="col-xs-12"><Link to="/privacy">{ t('Privacy Policy') }</Link></li>
                    <li styleName="clickable" className="col-xs-12"><Link to="/terms">{ t('Terms of Service') }</Link></li>
                    <li styleName="clickable" className="col-xs-12"><Link to="/career">{ t('Careers') }</Link></li>
                  </ul>
                </div>
                <div styleName="footer-links align-right" className="col-xs-12 col-md-3">
                  <ul className="row">
                    <li styleName={`link-head ${ t('style:link-head') }`} className="col-xs-12"><b>{ t('Technology') }</b></li>
                    <li styleName="clickable" className="col-xs-12"><a href={ t('white-paper-link') }>{ t('White Paper') }</a></li>
                    <li styleName="clickable" className="col-xs-12"><a href="https://medium.com/marconiprotocol">{ t('Blog')}</a></li>
                    <li styleName="clickable" className="col-xs-12"><a href="https://github.com/MarconiProtocol/wiki/wiki">{ t('Github') }</a></li>
                    <li styleName="clickable" className="col-xs-12"><a href="https://explorer.marconi.org">{ t('Explorer') }</a></li>
                  </ul>
                </div>
                <div styleName="footer-links align-right" className="col-xs-12 col-md-offset-2 col-md-3">
                  <ul styleName="border-none" className="row">
                    <li styleName={`link-head ${ t('style:link-head') }`} className="col-xs-12"><b>{ t('Community')}</b></li>
                    <li styleName="clickable twitter" className="col-xs-12"><a href="https://twitter.com/marconiprotocol">{ t('Twitter') }</a></li>
                    <li styleName="clickable telegram" className="col-xs-12"><a href="https://t.me/marconiprotocol">{ t('Telegram') }</a></li>
                    <li styleName="clickable mail" className="col-xs-12"><a href="#" className="transparent-btn btn1 joinBtn" onClick={this.showModal}>{ t('Mailing List') }</a></li>
                    <MailingModal show={this.state.openModal} handleClose={this.handleClose} signUpLoc="footer-section" />
                    <li styleName="clickable contact" className="col-xs-12"><a href="mailto:hello@marconi.org">{ t('Contact') }</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-md-pull-10">
                <div styleName="footer-logo" className="pull-left">
                  <Link to="/">
                      <img src={Logo} alt="" />
                      <div styleName="copyright">
                          © 2019 Marconi Foundation
                      </div>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

export default (withNamespaces('common')(Footer));
