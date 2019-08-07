import React, { Component} from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import Section from './Section';
import PeopleCard from './PeopleCard';
import A1 from '../images/advisors/advisor-1.jpg';
import A2 from '../images/advisors/advisor-2.jpg';
import A3 from '../images/advisors/advisor-3.jpg';
import A4 from '../images/advisors/advisor-4.jpg';
import A5 from '../images/advisors/advisor-5.jpg';
import A6 from '../images/advisors/advisor-6.jpg';
import A7 from '../images/advisors/advisor-7.jpg';
import Diffie from '../images/advisors/diffie.jpg';
import Lixin from '../images/advisors/lixin.jpg';

class Advisors extends Component {
  render(){
    const { t } = this.props;
    return(
      <Section title={ t("Advisor", {count: 0}) } customClass="advisor-box" children={
        <div>
          <div className="team-section col-xs-12 no-padding">
            <PeopleCard image={Diffie} name="Dr. Whitfield Diffie" title={ t('advisors.diffie.title') } linkedin="https://www.linkedin.com/in/whitfield-diffie-ab861152/"
              description={ t("advisors.diffie.bio", { "Blockchain": t("Blockchain").toLowerCase() }) }
            />
            <PeopleCard image={Lixin} name="Dr. Lixin Gao" title={ t('advisors.lixin.title') } linkedin="https://www.linkedin.com/in/lixin-gao-1147394/"
              description={ t("advisors.lixin.bio", { "Blockchain": t("Blockchain").toLowerCase() }) }
            />
            <PeopleCard image={A3} name="Dr. Jay Srinivasan" title={ t('advisors.jay.title') } linkedin="https://www.linkedin.com/in/jaysrinivasan1/"
              description={ t('advisors.jay.bio') }
            />
            <PeopleCard image={A4} name="Dr. Joyce Kim" title={ t('advisors.joyce.title') } linkedin="https://www.linkedin.com/in/joyce-kim-a8951322/"
              description={ t('advisors.joyce.bio') }
            />
          </div>

          <div className="spacer2 col-xs-12"></div>

          <div className="team-section col-xs-12 no-padding">
            <PeopleCard image={A5} name="Tom Pageler" title={ t('advisors.tom.title') } linkedin="https://www.linkedin.com/in/tom-pageler-5ab3251/"
              description={ t('advisors.tom.bio', { 'Blockchain': t('Blockchain').toLowerCase() }) }
            />
            <PeopleCard image={A6} name="Roger Lim" title={ t('Blockchain Advisor', { "Blockchain": t("Blockchain"), "Advisor": t("Advisor"), count: 1 }) } linkedin="https://www.linkedin.com/in/limroger/"
              description={ t('advisors.roger.bio', { 'Blockchain': t('Blockchain').toLowerCase() }) }
            />
            <PeopleCard image={A2} name="Matthew Liu" title={ t('advisors.matthew.title') } linkedin="https://www.linkedin.com/in/matthewliu/"
              description={ t('advisors.matthew.bio') }
            />
            <PeopleCard image={A7} name="Glenn Entis" title={ t('advisors.glenn.title') } linkedin="https://www.linkedin.com/in/glenn-entis-40066a7/"
              description={<Trans i18nKey='advisors.glenn.bio'>Co-Founded PDI (studio that produced the <em>Shrek</em> and <em>Madagascar</em> series) and VanEdge Capital. CEO of DreamWorks Interactive. Advisor for corporations including Zynga & Citigroup.</Trans>}
            />
            <PeopleCard image={A1} name="George Li" title={ t('advisors.george.title') } linkedin="https://www.linkedin.com/in/ligeorge/"
              description={ t("advisors.george.bio", { "Blockchain": t("Blockchain").toLowerCase() }) }
            />
          </div>
        </div>
      }
      />
    );
  }
}

export default (withNamespaces('common')(Advisors));
