import React from 'react';
import './svg.scss'
const EmailSvg = ({fill, width}) => {
    return (
        <svg width={width} fill={fill}  viewBox="0 0 24 24"><path d="M21 4H3A2.25 2.25 0 0 0 .75 6.25v12A2.25 2.25 0 0 0 3 20.5h18a2.25 2.25 0 0 0 2.25-2.25v-12A2.25 2.25 0 0 0 21 4zM3 5.5h18a.75.75 0 0 1 .75.75v12A.75.75 0 0 1 21 19H3a.75.75 0 0 1-.75-.75v-12A.75.75 0 0 1 3 5.5z"></path><path d="M21.704 4.706A.75.75 0 0 1 22.7 5.82l-.083.074-8.144 6.264a4.058 4.058 0 0 1-4.77.13l-.178-.13-8.144-6.264a.75.75 0 0 1 .821-1.25l.093.062 8.144 6.264a2.558 2.558 0 0 0 2.963.11l.157-.11 8.144-6.264z"></path></svg>
    );
};

export default EmailSvg;