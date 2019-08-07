import React from 'react';
import Separator from "../images/separator-image.png";

const SectionTitle = ({ title }) => (
    <div>
        <h1 className="black-text regular-font text-center">{title}</h1>
        <div className="separator">
            <img src={Separator} className="img-responsive" alt="separator" />
        </div>
    </div>
);

export default SectionTitle;
