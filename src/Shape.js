import React from 'react';

const shape = (props) => {

    console.log('[Shape.js] function shape')
    return (
        <div className={props.shape} onClick={()=>props.selectShape(props.shape)}/>
    );

}

export default shape;