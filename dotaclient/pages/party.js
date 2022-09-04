import React from 'react';
import Link from 'next/link';
import Cinco from '../components/cinco/cinco';
import Leftbar from '../components/LeftBar/Leftbar';
import Navbar from '../components/Navbar/Navbar';
import withAuth from '../interceptors/auth';

const Party = () => {
    return (
        <>
            <div className='mode-play'>
                <Navbar />

                <div className='main--1'>
                    <Leftbar/>
                    <div className='interface'>
                        <div className='modes-container'>
                            <Link href={'/play'}>
                                <div className='mode-test mode-unactive item-01' id='item01'>
                                    <h4>RANKED INDIVIDUAL</h4>
                                </div>
                            </Link>
                            <Link href={'/party'}>
                                <div className="mode-test mode-active  item-02" id='item02'>     
                                    <h4 className="subtitle-active">MODO 5 VS 5</h4>                 
                                </div> 
                            </Link>
                            <Link href={'/tournament'}> 
                                <div className="mode-test mode-unactive  item-03" id='item03'>         
                                    <h4 >TORNEO RANKED</h4>          
                                </div>
                            </Link>
                        </div>
                        <Cinco/>
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

export default withAuth(Party);
