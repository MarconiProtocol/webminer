import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../../images/svg/logo.svg";

import styles from './Header.css';

const NavigationLessHeader = () => (
    <div className={`flex items-center justify-center ${styles["navigation-less"]}`}>
        <Link to="/"><img src={Logo} alt="" /></Link>
    </div>
);

export default NavigationLessHeader;
