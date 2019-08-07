import React, { Component} from 'react';
import { Nav, NavItem, Tabs, Tab } from 'react-bootstrap';
import Section from '../../components/Section';
import MailingModal from '../../components/MailingModal/MailingModal';
import Layout from '../../components/Layout';
import styles from './Developers.css';

class Developers extends Component {
  constructor(props) {
    super(props);
    this.state = { openModal: false };
  }

  handleClose = () => {
    this.setState({ openModal: false });
  }

  showModal = () => {
    this.setState({ openModal: true });
  }

  render(){
    return(
      <Layout>
        <Section title="Developers" sticky="js-sticky-mobile" customClass="developers-box" customPadding="team-padding">
          <div>
            <div className="text-section col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left">
              <h3><span className="blue-text">marconi</span> applications</h3>
              <p>Write decentralized applications using Marconi Script, a Turing-complete language with access to network packets. </p>
              <p>Decentralized Apps can be submitted to the global chain or branch chains for public and private networks.</p>
            </div>
            <div className="text-section text-section2 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left">
              <h3><span className="blue-text">marconi</span> library</h3>
              <p>APIs enable traffic routing, packet analysis, pattern recognition, branch chain creation and token migration.</p>
              <p><span className="darkgrey-text bold-font text-uppercase"> Get early access to the SDK</span></p>
              <div className="clearfix"></div>
              <div className="blue-btn btn1" onClick={this.showModal}><a href="#">Join Community</a> </div>
              <MailingModal show={this.state.openModal} handleClose={this.handleClose} signUpLoc="dev-section" />
            </div>
            <div className="tabs-section col-xs-12 no-padding padding-top"><a id="samplecode"></a>
              <h3><span className="blue-text">sample </span> code</h3>
              <Tab.Container id="tabs-container" defaultActiveKey={1}>
                <div>
                  <Nav className="mb10 form-tabs hidden-xs" justified bsStyle="pills">
                    <NavItem eventKey={1} className="tab-selector">
                      Network Admin
                    </NavItem>
                    <NavItem eventKey={2} className="tab-selector">
                      Network Creation
                    </NavItem>
                    <NavItem eventKey={3} className="tab-selector">
                      Anti-phishing
                    </NavItem>
                  </Nav>
                  <Tab.Content animation={false}>
                    <Tab.Pane eventKey={1}>
                      Establish policies to determine what type of traffic is permitted on the network
                      <div className="col-lg-push-2 tab_02">

                        <div className="tabs_listing desktop-code-sample">
                          <ol>
                            <li> Contract <span className="blue_color_02"> IntranetFirewall </span>{"{"}</li>
                            <li><span className="pd_15">Init(<span className="orange_color">Address</span> target_address) {"{"}</span>
                            </li>
                            <li><span className="pd_30">  <span className="orange_color">TunnelRef</span> handle = <span className="blue_color">mOpen</span>(target_address);</span>
                            </li>
                            <li> <span className="pd_30">  <span className="blue_color">mApply</span>{"(handle, {AllowOnlyCorpOrHTTPS});"}</span>
                            </li>
                            <li><span className="pd_15">}</span></li>
                            <li>{"}"}</li>
                            <li></li>
                            <li> Status <span className="blue_color_02">{"AllowOnlyCorpOrHTTPS"}</span>(<span className="orange_color">PacketRef</span> packet) {"{"}</li>
                            <li><span className="blue_color_01 pd_15"> if</span> (packet.src().port() != <span className="red_color">443 </span>&&</li>

                            <li> <span className="pd_45">!packet.src().url().as_string().match(<span className="green_color">'intranet.example.com'</span>)) </span>{"{"}</li>
                            <li> <span className="blue_color_01 pd_30">return</span> Status::<span className="red_color">UNSAFE</span>;
                            </li>
                            <li><span className="pd_15">}</span></li>
                            <li><span className="blue_color_01 pd_15">return</span> Status::<span className="red_color">OK</span>;</li>
                            <li>}</li>
                          </ol>
                        </div>

                        <div className="tabs_listing mobile-code-sample">
                          <ol>
                            <li> Contract <span className="blue_color_02"> IntranetFirewall </span>{"{"}</li>
                            <li><span className="pd_15">Init(<span className="orange_color">Address</span> target_address) {"{"}</span>
                            </li>
                            <li><span className="pd_30"><span className="orange_color">TunnelRef</span> handle = <span className="blue_color">mOpen</span>(target_address);</span>
                            </li>
                            <li><span className="pd_30">  <span className="blue_color">mApply</span>{"(handle, {AllowOnlyCorpOrHTTPS});"}</span>
                            </li>
                            <li><span className="pd_15">}</span></li>
                            <li>{"}"}</li>
                            <li><span className="pd_15"></span></li>
                            <li>Status <span className="blue_color_02">{"AllowOnlyCorpOrHTTPS"}</span>(<span className="orange_color">PacketRef</span> packet) {"{"}</li>
                            <li><span className="blue_color_01 pd_15"> if</span> (packet.src().port() != <span className="red_color">443 </span>&&</li>
                            <li> <span className="pd_45">!packet.src().url().as_string()</span></li>
                            <li> <span className="pd_45">.match(<span className="green_color">'intranet.foo.com'</span>)) </span>{"{"}</li>
                            <li> <span className="blue_color_01 pd_30">return</span> Status::<span className="red_color">UNSAFE</span>;
                            </li>
                            <li><span className="pd_15">}</span></li>
                            <li><span className="blue_color_01 pd_15">return</span> Status::<span className="red_color">OK</span>;</li>
                            <li>}</li>
                          </ol>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey={2}>
                    Spin up a new virtualized blockchain network in just a few lines of code
                      <div className="col-lg-push-2 tab_01">

                        <div className="tabs_listing desktop-code-sample">
                          <ol>
                            <li> $ marconi branch foo</li>
                            <li><span className="green_color">  >>> Success. Created branch foo. </span></li>
                            <li></li>
                            <li> $ marconi status --branch_name=foo</li>
                            <li><span className="green_color">    >>> Branch foo: uninitialized.</span> </li>
                            <li></li>
                            <li> $ marconi init --config=/tmp/config.txt --branch_name=foo</li>
                            <li> <span className="green_color">>>> Success. Configured branch foo.</span></li>
                            <li></li>
                            <li> $ marconi run --branch_name=foo</li>
                            <li> <span className="green_color">>>> Success. Running branch foo.</span></li>
                            <li></li>
                            <li></li>
                            <li></li>
                          </ol>
                        </div>

                        <div className="tabs_listing mobile-code-sample">
                          <ol>
                            <li> $ marconi branch foo</li>
                            <li><span className="green_color">  >>> Success. Created branch foo. </span></li>
                            <li><span className="pd_15"></span></li>
                            <li> $ marconi status --branch_name=foo</li>
                            <li><span className="green_color">    >>> Branch foo: uninitialized.</span> </li>
                            <li><span className="pd_15"></span></li>
                            <li> $ marconi init --config=</li>
                            <li><span className="pd_15">/tmp/config.txt --branch_name=foo</span></li>
                            <li> <span className="green_color">>>> Success. Configured branch foo.</span></li>
                            <li><span className="pd_15"></span></li>
                            <li> $ marconi run --branch_name=foo</li>
                            <li> <span className="green_color">>>> Success. Running branch foo.</span></li>
                          </ol>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey={3}>
                      Analyze network traffic for phishing attacks such as masquerading URLs with unicode characters
                      <div className="col-lg-push-2 tab_03">

                        <div className="tabs_listing desktop-code-sample">
                          <ol>
                            <li>Contract <span className="blue_color_02">PhishCatcher</span> {"{"}</li>
                            <li><span className="pd_15">Init(<span className="orange_color">Address</span> client_address)</span> {"{"}</li>
                            <li><span className="pd_30"><span className="orange_color">TunnelRef</span> handle = <span className="blue_color">mOpen</span>(client_address);</span>
                            </li>
                            <li><span className="pd_30"><span className="blue_color">mApply</span>{"(handle, {PhishFunc});"}</span>
                            </li>
                            <li><span className="pd_15">}</span></li>
                            <li>}</li>
                            <li></li>
                            <li>Status <span className="blue_color_02">{"PhishFunc"}</span>(<span className="orange_color">PacketRef</span> packet) {"{"}</li>
                            <li><span className="blue_color_01 pd_15">if </span>(packet.src().url().as_string().match(<span className="green_color ">'[^\u0000-\u007F]'</span>)) {"{"}</li>
                            <li><span className="blue_color_01 pd_30">return</span> Status::<span className="red_color">UNSAFE</span>;</li>
                            <li> <span className="pd_15"> } </span></li>
                            <li><span className="blue_color_01 pd_15">return</span> Status::<span className="red_color">OK</span>;</li>
                            <li>}</li>
                            <li></li>
                          </ol>
                        </div>

                        <div className="tabs_listing mobile-code-sample">
                          <ol>
                            <li>Contract <span className="blue_color_02">PhishCatcher</span> {"{"}</li>
                            <li><span className="pd_15">Init(<span className="orange_color">Address</span> client_address)</span> {"{"}</li>
                            <li><span className="pd_30"><span className="orange_color">TunnelRef</span> handle = <span className="blue_color">mOpen</span>(client_address);</span>
                            </li>
                            <li><span className="pd_30"><span className="blue_color">mApply</span>{"(handle, {PhishFunc})"};</span>
                            </li>
                            <li><span className="pd_15">}</span></li>
                            <li>}</li>
                            <li><span className="pd_15"></span></li>
                            <li>Status <span className="blue_color_02">{"PhishFunc"}</span>(<span className="orange_color">PacketRef</span> packet) {"{"}</li>
                            <li><span className="blue_color_01 pd_15">if </span>(packet.src().url().as_string()</li>
                            <li><span className="pd_45">.match(<span className="green_color ">'[^\u0000-\u007F]'</span>)) {"{"}</span>
                            </li>
                            <li><span className="blue_color_01 pd_30">return</span> Status::<span className="red_color">UNSAFE</span>;</li>
                            <li> <span className="pd_15"> } </span></li>
                            <li><span className="blue_color_01 pd_15">return</span> Status::<span className="red_color">OK</span>;</li>
                            <li>}</li>
                          </ol>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </div>
        </Section>
      </Layout>
    );
  }
}

export default Developers;
