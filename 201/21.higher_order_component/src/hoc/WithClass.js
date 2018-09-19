import React from 'react';

const withClass = (props) => (
    <div className={props.CssClasses}>
        {props.children}
    </div>
);

export default withClass;