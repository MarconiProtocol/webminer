import React, { Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withNamespaces, Trans } from 'react-i18next';
import styles from './Header.css';
import Earth from '../../images/svg/earth.svg';
import Logo from '../../images/svg/logo.svg';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleScroll = () => {
    const el = document.querySelector('.js-sticky');
    const el_mobile = document.querySelector('.js-sticky-mobile');

    if (el !== null) {
      this.setState({ mobile: false, top: el.offsetTop, scroll: window.scrollY });
    } else if (el_mobile !== null) {
      this.setState({ mobile: true, top: el_mobile.offsetTop, scroll: window.scrollY });
    } else {
      this.setState({ top: this.state.scroll, scroll: window.scrollY })
    }
  }

  // Close the dropdown menu if the user clicks outside of it
  handleOutsideClick = (event) => {
    if (!event.target.closest('.dropbtn')) {
      var icons = document.getElementsByClassName('dropdown-icon');
      var dropdowns = document.getElementsByClassName('dropdown-content');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
      for (i = 0; i < icons.length; i++) {
        icons[i].classList.remove('fa-caret-up');
        icons[i].classList.add('fa-caret-down');
      }
    }
  }

  closeDropdowns = (dropdown, icon) => {
    var icons = document.getElementsByClassName('dropdown-icon');
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    if (dropdown.classList.contains('show')) {
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
      for (i = 0; i < icons.length; i++) {
        icons[i].classList.remove('fa-caret-up');
        icons[i].classList.add('fa-caret-down');
      }
    } else {
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
      for (i = 0; i < icons.length; i++) {
        icons[i].classList.remove('fa-caret-up');
        icons[i].classList.add('fa-caret-down');
      }
      dropdown.classList.add('show');
      icon.classList.remove('fa-caret-down');
      icon.classList.add('fa-caret-up');
    }
  }

  // This is to change language modal from desktop to mobile
  languageToggle = () => {
    var dropdown = document.getElementById('myDropdown');
    var icon = document.getElementById('myIcon');
    this.closeDropdowns(dropdown, icon);
  }

  languageToggleMobile = () => {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    document.getElementById('myDropdown-mobile').classList.toggle('show');
  }

  softwareToggle = () => {
    var dropdown = document.getElementById('softwareDropdown');
    var icon = document.getElementById('softwareIcon');
    this.closeDropdowns(dropdown, icon);
  }

  developersToggle = () => {
    var dropdown = document.getElementById('developersDropdown');
    var icon = document.getElementById('developerIcon');
    this.closeDropdowns(dropdown, icon);
  }

  applySticky = () => {
    if (this.state.scroll > this.state.top) {
      if (this.state.mobile) {
        return 'sticky-mobile';
      } else {
        return 'sticky';
      }
    }
    return '';
  }

  componentDidMount() {
    if (!this.props.showLanguage) this.props.i18n.changeLanguage('en');
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top ?
      document.body.style.paddingTop = `${this.state.height}` : document.body.style.paddingTop = 0;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('click', this.handleOutsideClick);
  }

  render() {
    const { t, i18n, showLanguage } = this.props;
    return (
      <div className="outer-box blue-bg col-xs-12 no-padding">
{/*
        <div styleName={`header-warning ${ t('style:header-warning') }`} className="col-xs-12 light-font">
          <p>
              <Trans i18nKey='header.phishing'>
                  <span styleName="first-line"><span className="bold-font">Don't get phished.</span> There is no announced token sale.</span> Beware of anyone claiming to sell Marconi tokens.
              </Trans>
          </p>
        </div>
*/}
        <section className="container">
          <div className="row">
            <div styleName={`header-box ${this.applySticky()}`} className="col-xs-12 no-padding">
              <Navbar fluid styleName="navbar-default main-navigation" className={`collapseOnSelect`}>
                <Navbar.Header styleName="navbar-header">
                  <Navbar.Toggle styleName="navbar-toggle">
                    <span className="sr-only">close</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </Navbar.Toggle>
                  {
                    showLanguage ?
                    <div id="lang-dropdown-mobile">
                      <button onClick={this.languageToggleMobile} className="dropbtn">
                        <img src={Earth} styleName="globe-icon" alt="" /> { t('header.lg-mobile') } <i className="dropbtn" className="fa fa-caret-down"></i>
                      </button>
                      <div id="myDropdown-mobile" className="dropdown-content">
                        <a href="#" onClick={() => i18n.changeLanguage('en')}>EN</a>
                        <a href="#" onClick={() => i18n.changeLanguage('zh')}>中文</a>
                        <a href="#" onClick={() => i18n.changeLanguage('ja')}>日本語</a>
                        <a href="#" onClick={() => i18n.changeLanguage('ko')}>한국어</a>
                      </div>
                    </div>
                    : ''
                  }
                  <Navbar.Brand styleName="navbar-brand">
                    <Link to="/"><img src={Logo} alt="" /></Link>
                  </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse styleName="navbar-collapse" id="bs-example-navbar-collapse-1">
                  <Navbar.Toggle styleName="navbar-toggle"><a href="#" id="close" styleName="menu-close"></a></Navbar.Toggle>
                  <Nav pullRight styleName={`navbar-nav ${ t('style:navbar-nav') }`} className="regular-font">
                    <Navbar.Brand styleName="navbar-brand">
                      <Link styleName="logo-mobile-modal" to="/"><img src={Logo} alt="" /></Link>
                    </Navbar.Brand>
                    <li><a styleName="" href="https://register.marconi.org/s3/ieo-pre-registration?utm_source=marconi.org&utm_medium=website&utm_campaign=pre-reg-announcement">{ t('header.tokens') }</a></li>
                    <li>
                      <a onClick={this.softwareToggle} className="dropbtn">{ t('Software') } <i id="softwareIcon" className="dropdown-icon fa fa-caret-down dropbtn"></i></a>
                      <div id="softwareDropdown" className="dropdown-content menu-content">
                        <a href="https://github.com/MarconiProtocol/wiki/wiki/Releases-Mainnet">{ t('Mainnet') }</a>
                        <a href="https://explorer.marconi.org/home">{ t('Explorer') }</a>
                        <a href="https://github.com/MarconiProtocol/wiki/wiki/Mining-Overview">{ t('Mining') }</a>
                      </div>
                    </li>
                    <li>
                      <a onClick={this.developersToggle} className="dropbtn">{ t('Developers') } <i id="developerIcon" className="dropdown-icon fa fa-caret-down dropbtn"></i></a>
                      <div id="developersDropdown" className="dropdown-content menu-content">
                        <a href={ t('white-paper-link') }>{ t('White Paper') }</a>
                        <a href="https://github.com/MarconiProtocol/wiki/wiki">{ t('Github') }</a>
                        <a href="https://github.com/MarconiProtocol/wiki/wiki/Mainnet-Testnet-Resources">{ t('Testnet') }</a>
                      </div>
                    </li>
                    <li><a href="https://medium.com/marconiprotocol">{ t('Blog') }</a></li>
                    <li><Link to="/team">{ t('Team') }</Link></li>
                    <li><Link to="/miner">Web Miner</Link></li>
                    {
                      // <li><Link to="/presale">{ t('Presale') }</Link></li>
                    }
                    {
                      showLanguage ?
                      <li>
                        <div id="lang-dropdown">
                          <button onClick={this.languageToggle} className="dropbtn"><img src={Earth} styleName="globe-icon" alt="" /> { t('header.lg') } <i id="myIcon" className="dropdown-icon dropbtn fa fa-caret-down"></i></button>
                          <div id="myDropdown" className="dropdown-content">
                            <a href="#" onClick={() => i18n.changeLanguage('en')}>English</a>
                            <a href="#" onClick={() => i18n.changeLanguage('zh')}>中文</a>
                            <a href="#" onClick={() => i18n.changeLanguage('ja')}>日本語</a>
                            <a href="#" onClick={() => i18n.changeLanguage('ko')}>한국어</a>
                          </div>
                        </div>
                      </li>
                      : ''
                    }
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default (withNamespaces('common')(Header));
