import React, { Component} from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import serialize from 'form-serialize';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import { Placeholders } from '../../scripts/placeholder.min.js';
import BlacklistedModal from '../../components/BlacklistedModal/BlacklistedModal';
import styles from './Presale.css';

class Presale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FULLNAME: '',
      EMAIL: '',
      ALLOCAMNT: '',
      TELEGRAM: '',
      CHAT: '',
      SIGNUP_URL: '',
      AGREEMENT: 'No',
      GDPR: '',
      formValid: false,
      showConfirmation: 'none',
      errorMessage: '',
      truncate: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    var value = e.target.value;
    if (e.target.type === 'checkbox') {
      if (e.target.checked) value = 'Yes';
      else value = 'No';
    }
    this.setState({ [name]: value }, () => {
      this.validateForm();
    })
  }

  validateForm = () => {
    const emailValid = this.state.EMAIL.length > 0 && this.state.EMAIL.indexOf('@') !== -1;
    const nameValid = this.state.FULLNAME.trim().length > 0;
    const sizeValid = this.state.ALLOCAMNT.trim().length > 0;
    const telegramValid = this.state.TELEGRAM.trim().length > 0;
    const chatValid = this.state.CHAT;
    const gdprValid = this.state.AGREEMENT === 'Yes';
    this.setState({ formValid: emailValid && nameValid && sizeValid && telegramValid && chatValid && gdprValid })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const self = this;
    axios({
      method: 'GET',
      url: e.target.action,
      adapter: jsonpAdapter,
      callbackParamName: 'c',
      params: serialize(e.target, { hash: true, empty: true }),
      cache: false,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    })
      .then(response => {
        const data = response.data;
        if (data.result == "success") {
          self.setState({showConfirmation: '', errorMessage: ''});
        } else {
          self.setState({showConfirmation: 'none', errorMessage: self.props.t("errors.email-error")});
        }
      })
      .catch(error => {
        alert("Could not connect to the registration server. Please try again later.");
      });
  }

  updateDimensions = () => {
    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;
    if (width < 450) {
      this.setState({truncate: true});
    } else {
      this.setState({truncate: false});
    }
  }

  componentWillMount = () => {
    this.updateDimensions();
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions);
    window.setTimeout(function() {
        console.log(Placeholders);
        Placeholders.enable();
    }, 500);
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render(){
    const { t } = this.props;
    return(
      <Layout>
        <Section title={ t("Presale Form", {"Presale": t("Presale"), "Form": t("Form")}) } sticky="js-sticky-mobile" customPadding="presale-padding">
          <div id="presale-info" styleName={`text-section ${ t('style:text-section') }`} className="col-md-offset-1 col-md-10 text-left">
            <p styleName="padding-top">{t('presale.header')}</p>
            <ul>
              <li><span>{t('presale.header-bullet-1')}</span></li>
              <li><span>{t('presale.header-bullet-2')}</span></li>
            </ul>
            <p styleName="padding-bottom">{t('presale.header-thanks')}</p>

            <BlacklistedModal />

            <div className="presale-box">
              <form onSubmit={this.handleSubmit}
              onChange={() => {this.setState({
                SIGNUP_URL: window.location.href + t("signupurl"),
                GDPR: t('presale.gdpr')
              });}}
              action="https://marconi.us17.list-manage.com/subscribe/post-json?u=f4163dd7d40ad21ea56e32016&amp;id=9e48d056fd" method="GET" id="mc-embedded-presale-field" name="mc-embedded-presale-field" className="validate submit-presale-form" noValidate>
                <div styleName={`presale-form ${ t('style:presale-form') }`} className="form-group text-center">
                  <input type="text" onChange={this.handleUserInput} value={this.state.FULLNAME} name="FULLNAME" styleName="presale-field" className="form-control" id="presale-name" placeholder={t("Full Name") + "*"} required />

                  <input type="text" onChange={this.handleUserInput} value={this.state.EMAIL} name="EMAIL" styleName="presale-field" className="form-control" id="presale-email" placeholder={t("E-mail") + "*"} required />

                  <input type="text" defaultValue="" name="ORGFUND" styleName="presale-field" className="form-control" id="presale-org" placeholder={t("Org") + " / " + t("Fund Name")} />

                  <div styleName="field-padding" className="input-group">
                    <input type="number" onChange={this.handleUserInput} value={this.state.ALLOCAMNT} name="ALLOCAMNT" styleName="presale-field" className="form-control" id="presale-alloc" placeholder={this.state.truncate ? t("presale.allocation-abbr") + "*" : t("presale.allocation-size") + "*"} required />
                    <span styleName="currency-dropdown" className="input-group-addon dropbtn">
                      <select name="ALLOCTYPE" required>
                        <option value="USD">USD</option>
                        <option value="ETH">ETH</option>
                        <option value="BTC">BTC</option>
                      </select>
                      <i className="fa fa-caret-down"></i>
                    </span>
                  </div>

                  <label htmlFor="presale-telegram" styleName="input-label">
                    <Trans i18nKey='presale.telegram'>
                        Our Telegram channel is <a href="https://t.me/marconiprotocol">MarconiProtocol</a>
                    </Trans>
                  </label>
                  <div styleName="field-padding" className="input-group">
                    <input readOnly defaultValue="" name="mem" className="form-control" styleName="presale-field radio-field" id="presale-telegram" placeholder={t("presale.telegram-member") + "*"} />
                    <div styleName="radio-group" className="input-group-addon" id="CHAT">
                      <label htmlFor="yes-telegram"><input name="CHAT" id="yes-telegram" type="radio" aria-label="Yes" value="Yes" onChange={this.handleUserInput} />&nbsp;{t('Yes')}</label>&nbsp;&nbsp;
                      <label htmlFor="no-telegram"><input name="CHAT" id="no-telegram" type="radio" aria-label="No" value="No" onChange={this.handleUserInput} />&nbsp;{t('No')}</label>
                    </div>
                  </div>

                  <input type="text" onChange={this.handleUserInput} value={this.state.TELEGRAM} name="TELEGRAM" styleName="presale-field" className="form-control" id="presale-tel" placeholder={t("Telegram name", {"Telegram": t("Telegram")}) + "*"} required />

                  <label htmlFor="presale-telegram" styleName="input-label">
                    <Trans i18nKey='presale.twitter'>
                        Our Twitter account is <a href="https://twitter.com/marconiprotocol">@marconiprotocol</a>
                    </Trans>
                  </label>
                  <div styleName="field-padding" className="input-group">
                    <input readOnly value="" name="mem" styleName="presale-field radio-field" className="form-control" id="presale-mem" placeholder={t('presale.twitter-follow')} />
                    <div styleName="radio-group" className="input-group-addon" id="TWITTER">
                      <label htmlFor="yes-twitter"><input name="TWITTER" id="yes-twitter" type="radio" aria-label="Yes" value="Yes" />&nbsp;{t('Yes')}</label>&nbsp;&nbsp;
                      <label htmlFor="no-twitter"><input name="TWITTER" id="no-twitter" type="radio" aria-label="No" value="No" />&nbsp;{t('No')}</label>
                    </div>
                  </div>

                  <input type="text" defaultValue="" name="COINADDR" styleName="presale-field" className="form-control" id="presale-addr" placeholder={t('presale.coinaddr')} />

                  <textarea styleName="presale-field field-padding" className="form-control input-group" rows="4" form="mc-embedded-presale-field" name="COMMUNITY" id="presale-interest" placeholder={t('presale.contribute', {'Community': t('Community')})}></textarea>

                  <div className="mc-field-group sign-up-url">
                    <label htmlFor="presale-SIGNUP_URL">Signup Page URL </label>
                    <input type="text" value={this.state.SIGNUP_URL} onChange={this.handleUserInput} name="SIGNUP_URL" className="" id="presale-SIGNUP_URL" />
                  </div>

                  <div styleName="text" className="input-group">
                    <input type="checkbox" name="AGREEMENT" onChange={this.handleUserInput} value={this.state.AGREEMENT} id="mc-presale-agreement" required />
                    <div styleName={`disclaimer ${ t('style:disclaimer') }`}>
                    <label htmlFor="mc-resale-agreement" >
                    {t('presale.disclaimer')}
                    </label>
                  </div>
                  </div>

                  <div className="mc-field-group sub-confirm">
                    <label htmlFor="GDPR">GDPR Form</label>
                    <input type="text" value={this.state.GDPR} onChange={this.handleUserInput} name="GDPR" className="" id="presale-GDPR" />
                  </div>

                  <div className="mc-field-group gdpr-screen">
                    <label htmlFor="CONSENT">GDPR Consent</label>
                    <input type="url" defaultValue="https://drive.google.com/file/d/1GuqzTGxQ9YZzE1EzAZrURbHolumukbDb/view?usp=sharing" name="CONSENT" className="url" id="presale-CONSENT" />
                  </div>

                  <div id="hidden_div" style={{display: this.state.showConfirmation}}>
                    <Trans i18nKey='presale.thank-you'>
                        <h3>Thank you for subscribing. <br />No additional action needs to be taken at this time.</h3>
                    </Trans>
                  </div>
                  <div styleName={`error-message ${ t('style:error-message') }`}>{this.state.errorMessage === "" ? "" : t("errors.email-error")}</div>
                  <input disabled={!this.state.formValid} type="submit" value={ t("Submit") } name="subscribe" id="mc-embedded-presale" className="btn btn-default" />
                </div>
              </form>
            </div>
          </div>
        </Section>
      </Layout>
    );
  }
}

export default (withNamespaces('common')(Presale));
