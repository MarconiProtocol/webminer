import React, { Component} from 'react';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import JobCard from '../../components/JobCard/JobCard';
import styles from './Career.css';

class Career extends Component {
  render(){
    return(
      <Layout showLanguage={false}>
        <Section title="Job Openings" sticky="js-sticky-mobile">
          <div className="careers-box text-center">
            <h3 styleName="join-heading" className="darkgrey-text">If you’re passionate about networking and security and <br />want to join a world class team, we’d love to meet you. <br />Following are current openings:
            </h3>
            <div styleName="apply-box-outer margin-btm-110 inline-display" className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
              <JobCard
                title="Web Developer"
                responsibilities={<ul>
                    <li>Analyze and decompose complex software systems and user experiences</li>
                    <li>Rapidly develop prototypes which evolve into production level products</li>
                    <li>Write modular, secure, and well-tested full-stack code (JS, HTML, CSS, and data layer code)</li>
                    <li>Sweat details and push pixels to create polished product experiences</li>
                    <li>Collaborate with and influence others across engineering, product and design to ship new full-stack projects</li>
                  </ul>}
                min_qualifications={<ul>
                  <li>BS degree in Computer Science or related technical field involving coding (e.g., physics or mathematics), or equivalent technical experience</li>
                  <li>1+ years of full stack software engineering experience</li>
                  <li>Skilled with web technologies including React, Bootstrap, JavaScript, HTML, and CSS</li>
                  <li>A desire to build well-engineered reusable front-end components</li>
                  <li>A sense of urgency and ownership over the product</li>
                  <li>You love making things beautiful, and you have a strong understanding of usability and design</li>
                </ul>}
                pref_qualifications={<ul>
                  <li>Extensive knowledge of Unix/Linux environments</li>
                  <li>Working knowledge of desktop and mobile application development</li>
                  <li>Experience with Bash, C++, Java, and JavaScript</li>
                  <li>Experience with regression testing and tools such as CrossBrowserTesting, BrowserStack, AWS Device Farm</li>
                  <li>Experience with internationalization & localization (i18n)</li>
                  <li>Familiar with blockchain protocols and smart contract development</li>
                </ul>}
              />
              <JobCard
                title="Full Stack Software Developer"
                responsibilities={<ul>
                    <li>Analyze and decompose complex software systems and user experiences</li>
                    <li>Rapidly develop prototypes which evolve into production level products</li>
                    <li>Write modular, secure, and well-tested full-stack code and API</li>
                    <li>Collaborate with and influence others across engineering, product and design to ship new full-stack projects</li>
                  </ul>}
                min_qualifications={<ul>
                    <li>BS degree in Computer Science or related technical field involving coding (e.g., physics or mathematics), or equivalent technical experience</li>
                    <li>1+ years of full stack software engineering experience</li>
                    <li>Skilled with web technologies including React, Bootstrap, JavaScript, Jquery, HTML, and CSS</li>
                    <li>Familiar with middleware and backend technologies such as Django, MySQL, Postgre, REST API, RPC, MQ</li>
                    <li>Attention to detail and pride of ownership</li>
                  </ul>}
                pref_qualifications={<ul>
                    <li>Extensive knowledge of Unix/Linux environments</li>
                    <li>Experience with Golang, Python, Java, Bash</li>
                    <li>Working knowledge of cross devices / browsers web and mobile application development</li>
                    <li>Familiar with tools such as Docker, k8s, ELK, Jenkins CI, salt, Ansible</li>
                    <li>Familiar with blockchain protocols and smart contract development</li>
                  </ul>}
                />
            </div>
          </div>
        </Section>
      </Layout>
    );
  }
}

export default Career;
