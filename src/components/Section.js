import React, { Component} from 'react';
import Separator from '../images/separator-image.png';

class Section extends Component {
  render(){
    const { title, sticky, color, children, customClass, customPadding } = this.props;
    return(
      <section className={"content-box " + color + " " + sticky}>
        <section className="container">
          <div className="row">
            <div className={"main-box text-center padding-top padding-bottom " + customClass + " " + customPadding}>
              <h1 className="black-text regular-font">{title}</h1>
              <div className="separator"> <img src={Separator} className="img-responsive" alt="" /></div>
              {children}
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Section;
