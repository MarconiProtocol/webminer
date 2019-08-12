import React from 'react';
import Logo from "../assets/svg/logo.svg";

const MinimalHeader = () => (
    <div className={`flex items-center justify-center minimal-header`}>
        <img src={Logo} alt="" />
    </div>
);

export default MinimalHeader;
