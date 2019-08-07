import React, { Component} from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Recaptcha from 'react-recaptcha';
import { Placeholders } from '../../scripts/placeholder.min.js';
import serialize from 'form-serialize';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { withNamespaces, Trans } from 'react-i18next';
import Separator from '../../images/separator-image.png'
import styles from './MailingModal.css';

class MailingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EMAIL: '',
      FULLNAME: '',
      ORG: '',
      INTEREST: '',
      SIGNUP_URL: '',
      MMERGE12: '',
      MMERGE15: '',
      RECAPTCHA: '',
      errorMessage: '',
      formValid: false,
      showThanksModal: false
    }
  }

  componentDidMount = () => {
    window.setTimeout(function() {
        console.log(Placeholders);
        Placeholders.enable();
    }, 100);
  }

  closeThanksModal = () => {
    this.props.handleClose();
    this.setState({ showThanksModal: false });
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    var value = e.target.value;
    if (e.target.type === 'checkbox' || e.target.type === 'radio') {
      value = e.target.checked;
    }
    this.setState({ [name]: value }, () => {
      this.validateForm();
    });
  }

  handleCaptchaResponse = () => {
    this.setState({ 'RECAPTCHA': document.getElementById("g-recaptcha-response").value }, () => {
      this.validateForm();
    })
  }

  validateForm = () => {
    var emailValid = this.state.EMAIL.length > 0 && this.state.EMAIL.indexOf('@') !== -1 ;
    var nameValid = this.state.FULLNAME.trim().length > 0;
    var gdprValid = this.state.MMERGE12;
    var captchaValid = this.state.RECAPTCHA !== '';
    this.setState({ formValid: emailValid && nameValid && gdprValid && captchaValid });
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
          window.setTimeout(() => {
            self.props.handleClose();
            self.setState({ showThanksModal: true });

            setTimeout(() => {
              self.closeThanksModal();
            }, 2500)
          }, 500);
        } else {
          this.setState({errorMessage: this.props.t('errors.email-error')});
        }
      })
      .catch(error => {
        alert("Could not connect to the registration server. Please try again later.");
      });
  }

  render(){
    const { t } = this.props;
    return(
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose} className="fade subscribe-modal" role="dialog">
          <form onSubmit={this.handleSubmit}
           onChange={() => {this.setState({
             SIGNUP_URL: window.location.href + this.props.t("signupurl") + "-" + this.props.signUpLoc,
             MMERGE15: t('mailing-list.confirmation')
           }) }}
           action="https://marconi.us17.list-manage.com/subscribe/post-json?u=f4163dd7d40ad21ea56e32016&amp;id=90c1bb666d" method="GET" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate submit-mailing-form" noValidate>
            <Modal.Header>
              <button type="button" className="close" onClick={this.props.handleClose}><i className="far fa-times-circle"></i></button>
              <Modal.Title>{ t('mailing-list.title') }</Modal.Title>
              <div className="separator">
                <img src={Separator} alt="" className="img-responsive" />
              </div>
            </Modal.Header>
            <Modal.Body>
              <div className="form-group">
                <div styleName="error-message">
                  {this.state.errorMessage === "" ? "" : t('errors.email-error')}
                </div>
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <input onChange={this.handleUserInput} type="text" value={this.state.EMAIL} name="EMAIL" className="form-control" id="mce-EMAIL" placeholder={t('E-mail') + "*"} required />
                </div>
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-user"></i>
                  </div>
                  <input onChange={this.handleUserInput} type="text" value={this.state.FULLNAME} name="FULLNAME" className="required form-control" id="mce-FULLNAME" placeholder={t('Full Name') + "*"} required />
                </div>
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-globe"></i>
                  </div>
                  <input onChange={this.handleUserInput} type="text" value={this.state.ORG} name="ORG" className="required form-control" id="mce-ORG" placeholder={t('Organization')} />
                </div>
                <textarea className="form-control input-group" rows="2" form="mc-embedded-subscribe-form" onChange={this.handleUserInput} value={this.state.INTEREST} name="INTEREST" id="mce-INTEREST" placeholder={t('mailing-list.interest')}></textarea>

                <div className="mc-field-group sign-up-url">
                  <label htmlFor="mce-SIGNUP_URL">Signup Page URL </label>
                  <input type="text" value={this.state.SIGNUP_URL} onChange={this.handleUserInput} name="SIGNUP_URL" className="" id="mce-SIGNUP_URL" />
                </div>

                <div styleName={ t('style:gdpr') } className="mc-field-group input-group gdpr-cn">
                  <input onChange={this.handleUserInput} type="checkbox" value={this.state.MMERGE12 ? "True" : "False"} checked={this.state.MMERGE12} name="MMERGE12" id="mce-MMERGE12-0" required /><label htmlFor="mce-MMERGE12-0"><span>&nbsp;</span> {t('mailing-list.checkbox')}</label>
                </div>
                <div styleName="gdpr-text" className="input-group">
                  <p><Trans i18nKey="mailing-list.gdpr">I understand the Marconi Foundation will store my information to send these updates. I have read the <Link to="/privacy">Privacy Policy</Link> and can opt out of receiving products or product updates by selecting an "unsubscribe"
                    option through an e-mail message. Upon opting out, personal information will not be collected and any previously collected personal information will be deleted. </Trans></p>
                </div>

                <Recaptcha sitekey="6LcR4GMUAAAAAMiN_4nJgJtLiCiKsUh-jwHr-PJ0" styleName="g-recaptcha" name="captcha" verifyCallback={this.handleCaptchaResponse} />

                <div className="mc-field-group sub-confirm">
                  <label htmlFor="mce-MMERGE15">Subscriber's Confirmation</label>
                  <input value={this.state.MMERGE15} onChange={this.handleUserInput} type="text" name="MMERGE15" className="" id="mce-MMERGE15" />
                </div>

                <div className="mc-field-group gdpr-screen">
                  <label htmlFor="mce-MMERGE14">GDPR Consent </label>
                  <input type="url" defaultValue="https://drive.google.com/file/d/1k6RGmR7jDPQW7deCZOe2iyAfht-I8LDC/view" name="MMERGE14" className=" url" id="mce-MMERGE14" />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <input type="submit" value={ t("Join Community", {"Join": t("Join"), "Community": t("Community")}) } name="subscribe" id="mc-embedded-subscribe" className="btn btn-default" disabled={!this.state.formValid} />
            </Modal.Footer>
          </form>
        </Modal>
        <Modal show={this.state.showThanksModal} onHide={this.closeThanksModal} className="thanks-modal" id="thankyou">
          <form action="https://marconi.us17.list-manage.com/subscribe/post?u=f4163dd7d40ad21ea56e32016&amp;id=90c1bb666d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" noValidate>
            <Modal.Header>
              <button type="button" className="close" onClick={this.closeThanksModal}><i className="far fa-times-circle"></i></button>
              <h2 className="modal-title">{t("Thank You!")}</h2>
              <div className="separator">
                <img src={Separator} alt="" className="img-responsive" />
              </div>
            </Modal.Header>
            <Modal.Body>
              <h4 className="modal-title">{t("mailing-list.welcome", {'Community': t('Community').toLowerCase()})}</h4>
            </Modal.Body>
          </form>
        </Modal>
      </div>
    );
  }
}

export default (withNamespaces('common')(MailingModal));
