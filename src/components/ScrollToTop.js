import React, { Component} from 'react';
import ReactDOM from "react-dom";
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  componentDidUpdate() {
    // if (this.props.location.pathname !== prevProps.location.pathname) {
    //   window.scrollTo(0, 0);
    // }
    window.scrollTo(0, 0)
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
