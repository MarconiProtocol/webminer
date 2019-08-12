import React from 'react';
import Separator from "../assets/separator-image.png";

const SectionTitle = ({ title }) => (
    <div>
        <h1 className="black regular text-center">{title}</h1>
        <div className="separator">
            <img src={Separator} className="img-responsive" alt="separator" />
        </div>
    </div>
);

export default SectionTitle;
