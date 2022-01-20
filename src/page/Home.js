import React from 'react';
import Articles from '../component/Articles';
import Header from '../component/Header';
import WhatNew from '../component/WhatNew';

const Home = () => {
    return (
        <div className='home'>
           <Header />
           
            <div className="homeContent">
                <WhatNew />
                <div className="imgLeftSideHome"></div>
                <div className="imgRightSideHome"></div>
                < Articles/>
          
              


            </div>
            
        </div>
    );
};

export default Home;