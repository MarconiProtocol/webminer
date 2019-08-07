import React, { Component} from 'react';
import { Modal } from 'react-bootstrap';
import Separator from '../../images/separator-image.png';
import styles from './JobCard.css';

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }

  handleClose = () => {
    this.setState({ openModal: false });
  }

  showModal = () => {
    this.setState({ openModal: true });
  }

  render(){
    const { title, responsibilities, min_qualifications, pref_qualifications } = this.props;
    return(
      <div styleName="apply-box job-box" className="text-left col-xs-12">
        <span styleName="style1" className="darkgrey-text">{title}<span className="light-font grey-color"></span></span>
        <div styleName="view-btn" className="pull-right"><a href="#" onClick={this.showModal} className="myBtn">View Details</a></div>
        <div styleName="view-btn" className="pull-right"><a href={"mailto:careers@marconi.org?subject=" + title.split(" ").join("%20") + "%20Applicant"}>Apply</a></div>
        <Modal role="dialog" id="job" show={this.state.openModal} onHide={this.handleClose} className="fade">
          <Modal.Header>
            <button type="button" className="close" onClick={this.handleClose}><i className="far fa-times-circle"></i>
            </button>
            <h2 className="modal-title">{title}</h2>
            <div className="separator">
              <img src={Separator} alt="" className="img-responsive" />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div styleName="modal-text-title">
              <p>San Francisco, CA</p>
              <p>
                <em>For immediate consideration, please send a copy of your resume to <span className="bold-font">careers@marconi.org</span> with subject line - “{title} Applicant"</em>
              </p>
            </div>

            <div styleName="modal-text-content">
              <div>
                <h3>Responsibilities</h3>
                {responsibilities}
              </div>

              <div styleName="modal-content-qualify">
                <h3>Qualifications</h3>
                <p><span>Minimum qualifications:</span></p>
                  {min_qualifications}
                <br />
                <p><span>Preferred qualifications:</span></p>
                  {pref_qualifications}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default JobCard;
