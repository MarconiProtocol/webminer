import React from "react";

import './styles.css';

export const Track = ({ source, target, getTrackProps, disabled }) => (
    <div
        className="progress-bar-track"
        style={{
            left: `${source.percent}%`,
            width: `${target.percent - source.percent}%`,
        }}
        {...getTrackProps()}
    />
);
