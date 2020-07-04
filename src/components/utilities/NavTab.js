import React from 'react';
import { Link } from 'react-router-dom';

function NavTab(props) {
    return (
        <li>
            <Link to={props.route} onClick={props.onClick}>{props.label}</Link>
        </li>
    )
}

export default NavTab;
