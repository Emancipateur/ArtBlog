import React from 'react';

const Block = ({children}) => {
    return (
        <div className='block'>
            <div className="blockContent">
            {children}
            </div>
        </div>
    );
};

export default Block;