import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class Layout extends Component {
  render(){
    const { footerPadding, showLanguage, children } = this.props;
    return (
      <div>
          <Header showLanguage={showLanguage} />
             { children }
          <Footer footerPadding={footerPadding} showLanguage={showLanguage} />
       </div>
    )
  }
}

Layout.propTypes = {
  footerPadding: PropTypes.number,
  showLanguage: PropTypes.bool
}

Layout.defaultProps = {
  footerPadding: 50,
  showLanguage: true
}

export default Layout;
