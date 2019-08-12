import React from 'react';
import { Slider as SliderCompound, Handles, Rail, Tracks } from 'react-compound-slider';
import { Rail as SliderRail } from "./Rail";
import { Handle } from "./Handle";
import { Track } from "./Track";

import './styles.css';

const Slider = ({ onChange, onUpdate }) => (
    <SliderCompound
        className="slider"
        domain={[0, 100]}
        step={1}
        mode={2}
        values={[30]}
        onUpdate={onUpdate}
        onChange={onChange}
    >
        <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
        </Rail>
        <Handles>
            {({ handles, getHandleProps }) => (
                <div className="slider-handles">
                    {handles.map(handle => (
                        <Handle
                            key={handle.id}
                            handle={handle}
                            getHandleProps={getHandleProps}
                        />
                    ))}
                </div>
            )}
        </Handles>
        <Tracks right={false}>
            {({ tracks, getTrackProps }) => (
                <div className="slider-tracks">
                    {tracks.map(({ id, source, target }) => (
                        <Track
                            key={id}
                            source={source}
                            target={target}
                            getTrackProps={getTrackProps}
                        />
                    ))}
                </div>
            )}
        </Tracks>
    </SliderCompound>

);

export default Slider;
