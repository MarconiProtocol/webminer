import React, { Component} from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import Section from './Section';
import PeopleCard from './PeopleCard';
import Jong from '../images/team/core-team-1.png';
import Albert from '../images/team/core-team-3.png';
import Di from '../images/team/core-team-4.png';
import Terence from '../images/team/core-team-5.jpg';
import Peter from '../images/team/core-team-6.png';
import Chris from '../images/team/core-team-7.png';
import DoHoon from '../images/team/core-team-8.jpg';
import Sora from '../images/team/core-team-9.jpg';

class CoreTeam extends Component {
  componentDidMount(){
    document.title = "Marconi - Team"
  }

  render(){
    const { t } = this.props;
    return(
      <Section title={ t("Core Team", {"Core": t("Core"), "Team": t("Team")}) } sticky="js-sticky" customClass="team-box" customPadding="team-padding" children={
        <div>
          <div className="team-section col-xs-12 no-padding">
            <PeopleCard image={Jong} name="Jong Kim" title={ t("Chief Architect") } linkedin="https://www.linkedin.com/in/jonghyeopkim/"
              description={ t("team.jong", { "Blockchain": t("Blockchain").toLowerCase() }) }
            />
            <PeopleCard image={Terence} name="Terence Kwan" title={ t("Infrastructure") } linkedin="https://www.linkedin.com/in/terence-kwan/"
              description={ t("team.terence") }
            />
            <PeopleCard image={Albert} name="Albert Yuen" title={ t("Security") } linkedin="https://www.linkedin.com/in/albert-yuen-/"
              description={ t("team.albert") }
            />
            <PeopleCard image={Di} name="Di Wu" title={ t("Platform") } linkedin="https://www.linkedin.com/in/di-wu-23351930/"
              description={ t("team.di") }
            />
          </div>
          <div className="spacer2 col-xs-12"></div>
          <div className="team-section col-xs-12 no-padding">
            <PeopleCard image={Peter} name="Peter Lai" title={ t("Operations") } linkedin="https://www.linkedin.com/in/paolai/"
              description={ t("team.peter", { "Blockchain": t("Blockchain") }) }
            />
            <PeopleCard image={Chris} name="Chris Lee" title={ t("team.chris.title") } linkedin="https://www.linkedin.com/in/thechrislee/"
              description={ t("team.chris.bio") }
            />
            <PeopleCard image={DoHoon} name="DoHoon Bang" title={ t("System Administrator") } linkedin="https://www.linkedin.com/in/do-hoon-bang-ab9388162/"
              description={ t("team.dohoon", { "Blockchain": t("Blockchain").toLowerCase() }) }
            />
            <PeopleCard image={Sora} name="Sora Bai" title={ t("Project Manager") } linkedin="https://www.linkedin.com/in/sorabai/"
              description={ t("team.sora") }
            />
          </div>
          {/*
          <div className="spacer2 col-xs-12"></div>
          <div className="team-section col-xs-12 no-padding">
            <div className="empty-div"></div>
            <div className="empty-div"></div>
            <div className="empty-div"></div>
            <div className="empty-div"></div>
          </div>
          */}
        </div>
      }
      />
    );
  }
}


export default (withNamespaces('common')(CoreTeam));
