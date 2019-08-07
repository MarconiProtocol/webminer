import React, { PureComponent } from 'react';
import { withNamespaces } from "react-i18next";

import ic_wallet from '../../images/icons/ic-wallet.png';
import ic_play from '../../images/icons/ic-play.png';
import ic_pause from '../../images/icons/ic-pause.png';
import ic_cpu from '../../images/icons/ic-cpu.png';

import hash_img from '../../images/hash-img.png';
import rate_img from '../../images/rate-img.png';

import styles from './styles.css';
import SectionTitle from "../../components/SectionTitle";
import QuestionFAQ from "../../components/QuestionFAQ";
import NavigationLessHeader from "../../components/Header/NavigationLessHeader";

class WebMiner extends PureComponent {
    static defaultProps = {
        progress: 75,
    };

    state = {
        isMining: false
    };

    onMiningChange = () =>
        this.setState({
            isMining: !this.state.isMining
        });

    render() {
        const { isMining } = this.state;
        const { t, progress } = this.props;

        return (
            <div>
                <NavigationLessHeader />

                <div className="container webminer">

                    <SectionTitle title={ t("Web_Miner") } />

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="card rounded px-30 py-25">
                                <h4 className="card-title flex flex-row items-center">
                                    <img src={ic_wallet} alt="wallet"/>

                                    <span className="bold black ml-12">Wallet Address</span>
                                </h4>

                                <div className="row my-24">
                                    <div className="col-md-9">
                                        <input type="text" className="form-control flat rounded px-24" value="48bJUb6RXozAp6GcppJFxxH9Fn3Mz2p4GDpCuFzoQFWcFdaf3RbifsiRt5VzAjQD" />
                                    </div>
                                    <div className="col-md-3">
                                        <button
                                            onClick={this.onMiningChange}
                                            type="submit"
                                            className="btn btn-primary btn-icon flex items-center flat justify-center mt-20 lg:mt-0">
                                                <img src={isMining ? ic_pause : ic_play} alt="play" />
                                                <span>{isMining ? 'Pause Mining' : 'Start Mining'}</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-9">
                                        <div className={styles["progress-bar-container"]}>
                                            <div className="flex flex-row items-center">
                                                <img src={ic_cpu} alt="cpu" />

                                                <span className={`ml-10 ${styles["progress-bar-label"]}`}>CPU Usage</span>
                                            </div>

                                            <div className="flex-grow flex items-center">
                                                <div className={styles["progress-bar"]}>
                                                    <div style={{ width: `${progress}%`}} className={styles["progress-bar-progress"]} />
                                                    <div style={{ right: `${100 - progress}%` }} className={styles["progress-bar-bullet"]} />
                                                </div>

                                                <span className={styles["progress-value"]}>75%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 text-center mt-20 lg:mt-0 ">
                                        <a href="#" className="dashed link flat">Check Payments</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-30">
                        <div className="col-xs-12 col-sm-6">
                            <div className={`card rounded flex flex-col lg:flex-row justify-center lg:justify-start items-center ${styles["info-card"]}`}>
                                <img className={styles["c-image"]} src={hash_img} alt="hash" />

                                <div className="flex flex-col text-center lg:text-left">
                                    <span className={styles["c-value"]}>12.125</span>
                                    <span className={styles["c-label"]}>Total Hashes</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className={`card rounded flex flex-col lg:flex-row justify-center lg:justify-start items-center ${styles["info-card"]}`}>
                                <img className={styles["c-image"]} src={rate_img} alt="hash" />

                                <div className="flex flex-col text-center lg:text-left">
                                    <span className={styles["c-value"]}>25 H/z</span>
                                    <span className={styles["c-label"]}>Hash Rate</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-30">
                        <div className="col-xs-12 col-sm-6">
                            <div className={`card rounded ${styles["minimal-info-card"]}`}>
                                <span className={styles["minimal-info-label"]}>Valid Shares</span>
                                <span className={styles["minimal-info-value"]}>3</span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className={`card rounded ${styles["minimal-info-card"]}`}>
                                <span className={styles["minimal-info-label"]}>Max Hash Rate</span>
                                <span className={styles["minimal-info-value"]}>25 H/z</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles["faq-container"]}>
                        <h1 className="black bold text-center">FAQ</h1>
                        <hr/>

                        <div className="faq-content">
                            <QuestionFAQ
                                title="How does it work?"
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dolore ea, eaque id impedit iste iusto minima necessitatibus odio totam ullam velit? Error, velit."
                            />

                            <QuestionFAQ
                                title="How do i create a wallet address?"
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias esse ipsum laudantium. Accusantium architecto asperiores blanditiis, dicta error laboriosam molestiae quo quos rem sint. Aliquam animi aperiam aut commodi dolore dolores eveniet ex fugit illum inventore ipsa iure laborum laudantium molestias mollitia necessitatibus non obcaecati possimus quaerat quibusdam quidem quo repudiandae tenetur, ut veritatis? Asperiores delectus dolor iure libero. Aut et fugit ipsam obcaecati omnis quas quia voluptatum. Cumque delectus dolorem earum, error est eveniet fuga incidunt iure iusto libero maiores nesciunt nulla officia, quidem quisquam repellat sequi tenetur ut vitae voluptatibus. Accusamus dolor earum eius ipsa porro quam quasi repellat sit, tenetur. Aperiam consequuntur deleniti molestiae numquam ullam, vel voluptas. Accusamus amet dolorem esse exercitationem, iure nemo quas quisquam ratione similique tempora, ullam?"
                            />

                            <QuestionFAQ
                                title="How often does the pool payout?"
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dolore ea, eaque id impedit iste iusto minima necessitatibus odio totam ullam velit? Error, velit."
                            />

                            <QuestionFAQ
                                title="Where can i get help?"
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta dolore ea, eaque id impedit iste iusto minima necessitatibus odio totam ullam velit? Error, velit."
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default (withNamespaces('common')(WebMiner));
