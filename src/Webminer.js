import React, { PureComponent } from 'react';

import ic_wallet from './assets/icons/ic-wallet.png';
import ic_play from './assets/icons/ic-play.png';
import ic_pause from './assets/icons/ic-pause.png';
import ic_cpu from './assets/icons/ic-cpu.png';

import hash_img from './assets/hash-img.png';
import rate_img from './assets/rate-img.png';

import './styles/App.css';
import SectionTitle from "./components/SectionTitle";
import QuestionFAQ from "./components/QuestionFAQ";
import NavigationLessHeader from "./components/MinimalHeader";
import Slider from "./components/Slider";

class WebMiner extends PureComponent {
    state = {
        isMining: false,
        value: 75
    };

    onMiningChange = () =>
        this.setState({
            isMining: !this.state.isMining
        });

    onSliderUpdate = update => {
        this.setState({
            value: update[0] || 0
        })
    };

    render() {
        const { isMining, value } = this.state;

        return (
            <div>
                <NavigationLessHeader />

                <div className="container webminer">

                    <SectionTitle title="Web Miner" />

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="card rounded px-30 py-25">
                                <h4 className="card-title flex flex-row items-center">
                                    <img src={ic_wallet} alt="wallet"/>

                                    <span className="bold black ml-12">Wallet Address</span>
                                </h4>

                                <div className="row my-24">
                                    <div className="col-md-9">
                                        <input type="text" className="form-control flat rounded px-24" defaultValue="48bJUb6RXozAp6GcppJFxxH9Fn3Mz2p4GDpCuFzoQFWcFdaf3RbifsiRt5VzAjQD" />
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
                                        <div className="progress-bar-container">
                                            <div className="flex flex-row items-center">
                                                <img src={ic_cpu} alt="cpu" />

                                                <span className={`ml-10 progress-bar-label`}>CPU Usage</span>
                                            </div>

                                            <div className="flex-grow flex items-center">
                                                <Slider
                                                    onUpdate={this.onSliderUpdate}
                                                />

                                                <span className="progress-value">{value}%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 text-center mt-20 lg:mt-0 ">
                                        <a href="https://marconi.org/" className="dashed link flat">Check Payments</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-30">
                        <div className="col-xs-12 col-sm-6">
                            <div className={`card rounded flex flex-col lg:flex-row justify-center lg:justify-start items-center info-card`}>
                                <img className="c-image" src={hash_img} alt="hash" />

                                <div className="flex flex-col text-center lg:text-left">
                                    <span className="c-value">12.125</span>
                                    <span className="c-label">Total Hashes</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className={`card rounded flex flex-col lg:flex-row justify-center lg:justify-start items-center info-card`}>
                                <img className="c-image" src={rate_img} alt="hash" />

                                <div className="flex flex-col text-center lg:text-left">
                                    <span className="c-value">25 H/z</span>
                                    <span className="c-label">Hash Rate</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-30">
                        <div className="col-xs-12 col-sm-6">
                            <div className={`card rounded minimal-info-card`}>
                                <span className="minimal-info-label">Valid Shares</span>
                                <span className="minimal-info-value">3</span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className={`card rounded minimal-info-card`}>
                                <span className="minimal-info-label">Max Hash Rate</span>
                                <span className="minimal-info-value">25 H/z</span>
                            </div>
                        </div>
                    </div>

                    <div className="faq-container">
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

export default WebMiner;
