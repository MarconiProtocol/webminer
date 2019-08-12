import React, { Fragment } from "react";
import "./styles.css"

export const Handle = ({ handle: { id, percent }, getHandleProps }) => (
    <Fragment>
        <div
            style={{ left: `${percent}%` }}
            className="progress-bar-bullet"
            {...getHandleProps(id)}
        />
    </Fragment>
);
