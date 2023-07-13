import React from 'react';

const FlechaSvg = ({fill, width}) => {
    return (
        <svg style={{marginLeft:'0.3rem'}} width={width} fill={fill} viewBox="0 0 24 24"><path d="M22.313 11.372a.75.75 0 0 1 .101 1.493l-.102.007H1.688a.75.75 0 0 1-.101-1.493l.101-.007h20.625z"></path><path d="M18.345 8.154a.75.75 0 0 1 .976-.072l.084.072 3.438 3.438a.75.75 0 0 1 .072.976l-.072.085-3.438 3.437a.75.75 0 0 1-1.133-.976l.073-.085 2.906-2.907-2.906-2.907a.75.75 0 0 1-.073-.976l.073-.085z"></path></svg>
    );
};

export default FlechaSvg;