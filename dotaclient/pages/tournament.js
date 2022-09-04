import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar/Navbar';
import Leftbar from '../components/LeftBar/Leftbar';    
import Tourn from '../components/tourn/tourn';
import withAuth from '../interceptors/auth';

const Tournament = () => {
    return (
        <>
             <div className='mode-play'>
            <Navbar />

            <div className='main--1'>
                <Leftbar/>
                <div className='interface'>
                    <div className='modes-container'>
                        <Link href={'/play'}>
                            <div className='mode-test item-01' id='item01'>
                                <h4>RANKED INDIVIDUAL</h4>
                            </div>
                        </Link>
                        
                        <Link href={'/tournament'}> 
                            <div className="mode-test mode-active  item-03" id='item03'>         
                                <h4 className="subtitle-active">TORNEO RANKED</h4>          
                            </div>
                        </Link>
                    </div>
                    <Tourn/>
                </div>
                
            </div>
            
        </div>

        <style jsx>
        {`
        
            .mode-play {
                height: 100vh;
                overflow-x: hidden;
            }
            
        `}
        </style>
        </>
        
    );
}

export default withAuth(Tournament);
