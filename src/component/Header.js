import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className="headerContent">
                <nav>
                    <ul>
                        <Link className='link' to='/'>Acceuil</Link>
                        <p className='title'>Skate & Graf'</p>
                        <Link to='/login'>Se connecter</Link>
                       
                    </ul>
                </nav>

            </div>     
        </div>
    );
};

export default Header;