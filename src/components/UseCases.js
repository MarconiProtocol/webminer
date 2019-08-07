import React, { Component} from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import Section from './Section';
import CaseCard from './CaseCard';
import AdminApps from '../images/svg/admin-apps.svg';
import Blockchain from '../images/svg/virtualized-blockchain.svg';
import Security from '../images/svg/security-apps.svg';
import Token from '../images/svg/token-migration.svg';
import Networks from '../images/svg/secure-networks.svg';
import IoT from '../images/svg/iot.svg';

class UseCases extends Component {
  render(){
    const { t } = this.props;
    return(
      <Section title={ t("Use_Case", {count: 3}) } color="blue-bg" customClass="case-section">
        <div>
          <div className="case-box col-xs-12 no-padding">
            <CaseCard image={AdminApps} width="67" height="67" title={ t("Network Admin Apps") }
              description={ t('usecases.admin-apps') }
            />
            <CaseCard image={Networks} width="72" height="72" title={ t("Dynamic Networks") }
              description={ t('usecases.networks') }
            />
            <CaseCard image={Security} width="48" height="63" title={ t("Security Apps") }
              description={ t('usecases.security') }
            />
          </div>
        </div>
      </Section>
    );
  }
}

export default (withNamespaces('common')(UseCases));
