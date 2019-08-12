import React, { Fragment } from "react";

import './styles.css';

export const Rail = ({ getRailProps }) => (
    <Fragment>
        <div className="rail-outer" {...getRailProps()} />
        <div className="rail-inner" />
    </Fragment>
);
