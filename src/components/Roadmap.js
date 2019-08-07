import React, { Component } from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import Section from './Section';
import Completed from '../images/roadmap/roadmap-completed.svg';
import Future from '../images/roadmap/roadmap-future.svg';
import VerticalSeparator from '../images/roadmap/vertical-separator.png';


class Roadmap extends Component {
  render() {
    const { t } = this.props;
    return (
      <Section title={t("Roadmap", { count: 3 })} customPadding={"roadmap-padding"}>
        <div className="row roadmap">
          <div className="col-xs-12">
            <div className="roadmap-row">
              <div className="col-md-6 col-xs-12 left-side hidden-xs month-year">{t("roadmap.2018-december")}</div>
              <div className="center-image"><img src={Completed} ></img></div>
              <div className="right-side col-md-6 col-xs-12 text-left"><span className="visible-xs month-year">{t("roadmap.2018-december")}<br /></span>{t("roadmap.2018-december-text")}</div>
            </div>
          </div>
        </div>
        <div className="row text-center col-sm-offset-6">
          <div className="text-center vertical-separator"></div>
        </div>
        <div className="row roadmap">
          <div className="col-xs-12">
            <div className="roadmap-row">
              <div className="col-md-6 col-xs-12 left-side hidden-xs month-year">{t("roadmap.2019-february")}</div>
              <div className="center-image"><img src={Completed} ></img></div>
              <div className="right-side col-md-6 col-xs-12 text-left"><span className="visible-xs month-year">{t("roadmap.2019-february")}<br /></span>{t("roadmap.2019-february-text1")} <br/>{t("roadmap.2019-february-text2")}</div>
            </div>
          </div>
        </div>
        <div className="row text-center col-sm-offset-6">
          <div className="text-center vertical-separator vertical-separator-fix-two-lines"></div>
        </div>
        <div className="row roadmap">
          <div className="col-xs-12">
            <div className="roadmap-row">
              <div className="col-md-6 col-xs-12 left-side hidden-xs month-year">{t("roadmap.2019-march")}</div>
              <div className="center-image"><img src={Completed} ></img></div>
              <div className="right-side col-md-6 col-xs-12 text-left"><span className="visible-xs month-year">{t("roadmap.2019-march")}<br /></span>{t("roadmap.2019-march-text")}</div>
            </div>
          </div>
        </div>
        <div className="row text-center col-sm-offset-6">
          <div className="text-center vertical-separator"></div>
        </div>
        <div className="row roadmap">
          <div className="col-xs-12">
            <div className="roadmap-row">
              <div className="col-md-6 col-xs-12 left-side hidden-xs month-year">{t("roadmap.2019-may")}</div>
              <div className="center-image"><img src={Completed} ></img></div>
              <div className="right-side col-md-6 col-xs-12 text-left"><span className="visible-xs month-year-future">{t("roadmap.2019-may")}<br /></span>{t("roadmap.2019-may-text")}</div>
            </div>
          </div>
        </div>
        <div className="row text-center col-sm-offset-6">
          <div className="text-center vertical-separator"></div>
        </div>
        <div className="row roadmap">
          <div className="col-xs-12">
            <div className="roadmap-row">
              <div className="col-md-6 col-xs-12 left-side hidden-xs month-year-future">{t("roadmap.2019-october")}</div>
              <div className="center-image"><img src={Future} ></img></div>
              <div className="right-side col-md-6 col-xs-12 text-left"><span className="visible-xs month-year-future">{t("roadmap.2019-october")}<br /></span>{t("roadmap.2019-october-text")}</div>
            </div>
          </div>
        </div>
        <div className="row text-center col-sm-offset-6">
          <div className="text-center vertical-separator vertical-separator-fix-two-lines"></div>
        </div>
        <div className="row roadmap">
          <div className="col-xs-12">
            <div className="roadmap-row">
              <div className="col-md-6 col-xs-12 left-side hidden-xs month-year-future">{t("roadmap.2020")}</div>
              <div className="center-image"><img src={Future} ></img></div>
              <div className="right-side col-md-6 col-xs-12 text-left">
                <span className="visible-xs month-year-future">{t("roadmap.2020")}<br /></span>
                {t("roadmap.2020-text1")} <div className="clearfix visible-xs"></div><br/>{t("roadmap.2020-text2")}
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center col-sm-offset-6">
          <div className="text-center vertical-separator vertical-separator-fix-many-lines"></div>
        </div>
        <div className="row roadmap">
          <div className="col-xs-12">
            <div className="roadmap-row">
              <div className="col-md-6 col-xs-12 left-side hidden-xs month-year-future">{t("roadmap.2021")}</div>
              <div className="center-image"><img src={Future} ></img></div>
              <div className="right-side col-md-6 col-xs-12 text-left">
                <span className="visible-xs month-year-future">{t("roadmap.2021")}<br /></span>
                <span>{t("roadmap.2021-text1")}<div className="clearfix"></div> {t("roadmap.2021-text2")}</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default (withNamespaces('common')(Roadmap));
