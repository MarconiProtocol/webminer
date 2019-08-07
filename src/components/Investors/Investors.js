import React, { Component} from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import Section from '../Section';
import Ngc from '../../images/investors/ngc.png';
import Dhvc from '../../images/investors/dhvc.png';
import ManagedBlock from '../../images/investors/managedblock.png'
import Floodgate from '../../images/investors/floodgate.png';
import Zmt from '../../images/investors/zmt.png';
import Ducapital from '../../images/investors/ducapital.png';
import Alphacoin from '../../images/investors/alphacoin.png';
import OriginCapital from '../../images/investors/origincapital.png';
import Linkvc from '../../images/investors/linkvc.png';
import ContinueCapital from '../../images/investors/continuecapital.png';
import BitAngels from '../../images/investors/bitangels.png';
import Iconiz from '../../images/investors/iconiz.png';
import styles from './Investors.css';

class Investors extends Component {
  render(){
    const { t } = this.props;
    return(
      <Section title={ t("Investor", {count: 3}) } customClass="investor-box">
        <div>
          <div styleName="investor" className="text-center row">
            <div className="col-xs-12 col-sm-4">
              <img src={Dhvc} styleName="img dhvc" alt="" />
            </div>
            <div className="col-xs-12 col-sm-4">
              <img src={Floodgate} styleName="img img-lg" alt="" />
            </div>
            <div className="col-xs-12 col-sm-4">
              <img src={Ngc} styleName="img img-sm" alt="" id="js-image" />
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default (withNamespaces('common')(Investors));
