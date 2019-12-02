import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className = 'homepage'>
        <div className  = 'directory-menu'>
            <div className = 'menu-item'>
            <div className = 'content'>
                <h1 className = 'title'>RETURN A CAR</h1>
                <span className = 'subtitle'>FIND PEOPLE</span>

            </div>
         </div>

         <div className = 'menu-item'>
            <div className = 'content'>
                <h1 className = 'title'>RENT A CAR</h1>
                <span className = 'subtitle'>FIND PEOPLE</span>

            </div>
         </div>

        </div>
    </div>
);

export default HomePage;