import React from 'react';

const Square = ({onClick, value}) => (
    <button className="square text-5xl" onClick={onClick}>
        {value}
    </button>
)

export default Square;