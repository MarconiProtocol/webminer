import React, { Component} from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';

class Privacy extends Component {
  render(){
    return(
      <Layout showLanguage={false}>
        <Section title="Privacy Policy" sticky="js-sticky" customClass="legal-box" customPadding="legal-padding">
          <div className="legal-copy">

            <h4>Marconi Online Privacy Policy</h4>
            <p>In using portions of the Site, Marconi may collect data, including personal information, about you as you use our websites and Solutions and interact with us. Such Personal Information may also include information obtained through certain
              analytics processes performed on the Internet and/or may be related to signing up for a mailing list to use or help develop Marconi services or products.</p>

            <p> Personal information is any information that can be used to identify or contact a specific individual, and may include name, address, email address, phone number, login information (account number, password), marketing preferences, social
              media account information, or payment card number. If Marconi links other data with your personal information, we will treat that linked data as personal information. Marconi also collects personal information from trusted third-party sources
              and engage third parties to collect personal information to assist us. Providing Marconi with a third party's personal information (such as name, email, and phone number), constitutes a representation that you have the third party's permission
              to do so. </p>

            <p>Marconi may collect personal information for a variety of reasons, such as:</p>
            <ul>
              <li>Providing you with access to Marconi products and updates.</li>
              <li>Sending marketing communications.</li>
              <li>Creating an account.</li>
              <li>Providing customer service.</li>
            </ul>
            <p>Marconi and the third parties we engage may combine the information collected from you over time and across our websites with information obtained from other sources. This helps us improve its overall accuracy and completeness.</p>

            <p>Through certain profile management tools or data controllers, Marconi may provide a number of options to access, correct, suppress, or delete your personal information. If you need help with accessing, correcting, suppressing, or deleting
              your personal information, please feel free to contact us directly. We make good faith efforts to honor reasonable requests to access, delete, update, suppress, or correct your data.</p>

            <p>With your permission, Marconi may also share your personal information with Marconi business partners or vendors, so they may send you information about products or services that may be of interest to you. To opt-out of this sharing with third
              parties for their marketing purposes, please contact us directly. Marconi may share your personal information with third parties for the purposes of operating our business, delivering, improving, and customizing our Solutions, sending marketing
              and other communications related to our business, and for other legitimate purposes permitted by applicable law or otherwise with your consent. The third parties and business partners may be located in various countries around the world.
              By using the Marconi website or providing any personal information, where applicable law permits, you consent to the transfer, processing, and storage of such information outside of your country of residence where data protection standards
              may be different.</p>

            <p>Marconi may share personal information for purposes of data processing or storage. In addition, it may be shared:</p>
            <ul>
              <li>In connection with, or during negotiations of, any merger, sale of company assets, consolidation or restructuring, financing, or acquisition of all or a portion of the Marconi business by or to another company.</li>
              <li>In response to a request for information by a competent authority if it is believed that such disclosure is in accordance with, or is otherwise required by, any applicable law, regulation or legal process.</li>
              <li>With law enforcement officials, government authorities, or other third parties as necessary to comply with legal process or meet national security requirements; protect the rights, property, or safety of Marconi, its business partners, you,
                or others; or as otherwise required by applicable law.</li>
              <li>In aggregated, anonymized, and/or de-identified form which cannot reasonably be used to identify you.</li>
              <li>If we otherwise notify you and you consent to the sharing.</li>
            </ul>

            <p>Marconi intends to protect the personal information from you and treat it securely in accordance with this Privacy Statement. Despite any physical, administrative, and technical safeguards designed to protect your personal information from
              unauthorized access, use, or disclosure, Marconi cannot and does not ensure or warrant the security of any personal information you provide.</p>

            <p>Marconi will retain your personal information as needed to fulfill the purposes for which it was collected. Marconi will retain and use your personal information as necessary to comply with our business requirements, legal obligations, resolve
              disputes, protect our assets, and enforce our agreements. You will have the opportunity to opt out of receiving products or product updates by selecting an "unsubscribe" option through an e-mail message. Upon opting out, personal information
              will not be collected and any previously collected personal information will be deleted.</p>

            <p>By using the Marconi website or otherwise providing personal information to us, you agree that we may communicate with you electronically regarding security, privacy, and administrative issues relating to your use. For example, if we learn
              of a security system's breach, we may attempt to notify you electronically by posting a notice on our websites, by sending an email, or otherwise contacting you.</p>

            <p>To the extent a notice provided at the time of collection or a website or Solution specific privacy statement conflict with this Privacy Statement, such specific notice or supplemental privacy statement will control.</p>

            <h4>Cookie Policy</h4>
            <p>Through the website, Marconi or others may use automatic data collection tools, such as cookies, embedded web links, and web beacons. These tools collect certain standard information that your browser sends to our website. Examples include
              your browser type and the address of the website from which you arrived at our website.</p>
            <p>They may also collect information about:</p>
            <ul>
              <li>Your Internet Protocol (IP) address. This is a number automatically assigned to your computer or device whenever you connect to the Internet. It is a unique address assigned by your Internet service provider or IT department on a TCP/IP
                network. Among other things, the IP address allows web servers to locate and identify your device.</li>
              <li>Clickstream behavior. This includes, for example, the pages you view and the links you click.</li>
              <li>The Marconi website may also include widgets (interactive mini-programs that run on our site to provide specific services from other companies). Personal information, such as your email address, may be collected through widgets. Widgets
                may also set cookies to enable them to function properly. Information collected by a widget is governed by the privacy policy of the company that created the widget.</li>
            </ul>
            <p>Some web browsers may give you the ability to enable a "do not track" feature that sends signals to the websites you visit, indicating that you do not want your online activities tracked. This is different from blocking or deleting cookies,
              as browsers with a "do not track" feature enabled may still accept cookies.</p>

            <p>Marconi may provide links to other third-party websites and services that are outside our control and not covered by this Privacy Statement. You are encouraged to review the privacy statements posted on those websites (and all websites) you
              visit.
            </p>

          </div>
        </Section>
      </Layout>
    );
  }
}

export default Privacy;
