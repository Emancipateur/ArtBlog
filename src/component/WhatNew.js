import React from 'react';

const WhatNew = () => {
    return (
        <div className='whatNew'>
            <div className="whatNewContent">
<h2>What's New today ?</h2>
<p>Tyke Wellick</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed expedita velit eum inventore blanditiis molestiae obcaecati, provident illum dolorum, facilis nobis ea voluptates, suscipit veritatis culpa doloribus qui a. Explicabo!</p>
<p>{new Date().toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default WhatNew;