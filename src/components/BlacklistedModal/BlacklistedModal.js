import React, { Component} from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import { Modal } from 'react-bootstrap';
import Separator from '../../images/separator-image.png'
import blacklisted from '../../blacklisted-countries.json';
import x from '../../images/x.png';
import styles from './BlacklistedModal.css';

class BlacklistedModal extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false, flag: ''}
  }

  goBack = () => {
    if (document.referrer.indexOf(window.location.host) != -1) {
      history.go(-1);
    } else {
      window.location.href = "https://marconi.org";
    }
  }

  loadGeoIP = () => {
    const self = this;
    const existingScript = document.getElementById('geo');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js';
      script.async = true;
      script.defer = true;
      script.id = 'geo';
      document.body.appendChild(script);

      script.onload = () => {
        geoip2.country(
            function(response) {
              console.log(response);
              if (response.country.iso_code in blacklisted) {
                self.setState({ flag: blacklisted[response.country.iso_code]['FLAG_IMAGE'], show: true })
                // document.getElementById('blacklistedCountryName').dangerouslySetInnerHTML({__html: blacklisted[response.country.iso_code]['ISO3']});
              }
            },
            function(error) {
              console.log(error)
            }
          )
      };
    }
    if (existingScript) {
      geoip2.country(
          function(response) {
            console.log(response);
            if (response.country.iso_code in blacklisted) {
              self.setState({ flag: blacklisted[response.country.iso_code]['FLAG_IMAGE'], show: true })
              // document.getElementById('blacklistedCountryName').dangerouslySetInnerHTML({__html: blacklisted[response.country.iso_code]['ISO3']});
            }
          },
          function(error) {
            console.log(error)
          }
        )
    }
  }

  componentWillMount() {
    const context = require.context('../../images/svg/Flags', true, /.svg$/);
    this.flags = {};
    context.keys().forEach((key) => {
      const country = key.split('./').pop() // remove the first 2 characters
        .substring(0, key.length - 6); // remove the file extension
      this.flags[country] = context(key);
    });

  }

  componentDidMount() {
    this.loadGeoIP();
  }

  render(){
    const { t } = this.props;
    //backdrop='static'
    return(
      <Modal show={this.state.show} id="blacklistedModal" onHide={() => this.setState({show: false})} className="modal fade" role="dialog" bsSize="sm">
        <Modal.Header>
          <h4 className="black-text regular-font">{ t('Disclaimer') }</h4>
          <div className="separator">
            <img className="img-responsive" src={Separator} alt="" />
          </div>
        </Modal.Header>
        <Modal.Body>
          <p>{ t('errors.blacklist-error') }</p>
          <div styleName="flag-container">
            <img src={this.state.flag === '' ? '' : this.flags[this.state.flag]} alt="" id="blacklistedCountryFlag" className="blacklisted-flag" />
            <img src={x} styleName="x" />
          </div>
          {
            //<div id="blacklistedCountryName" styleName="blacklisted-country"></div> -->
          }
        </Modal.Body>
        <Modal.Footer styleName="blacklisted-button">
          <a id="blacklisted-back" className="btn btn-default" onClick={this.goBack}>{ t('Go Back') }</a>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default (withNamespaces('common')(BlacklistedModal));
