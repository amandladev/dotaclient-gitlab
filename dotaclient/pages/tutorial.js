import React from 'react'
import Leftbar from '../components/leftBar/Leftbar';
import Navbar from '../components/navbar/Navbar';

export default function Tutorial() {
  return (
    <>
        
        <div className='mode-play'>
                <Navbar />

                <div className='main--1'>
                <Leftbar classWitdraw='left-container-body-anchor'  c2='left-container-body-anchor' c3='left-container-body-anchor'  c4='left-container-body-anchor' c6='left-container-body-anchor  left-body-anchor-active'/>
                    <div className='interface'>
                        <div className='int interface-item-01'>
                            <h4>Qué es Apuesta Dota?</h4>
                            <div className='multimedia-container'>
                                <img className='img-prueba' src='/prueba.jpg' alt='prueba'/>
                            </div>
                        </div>  
                        <div className='interface-item-02'>
                            <div className='tutorial-subtitle'>
                                <h4>¿Tienes alguna duda adicional?</h4>
                            </div>
                            <div className='tutorial-p'>
                                <p>Envianos un correo y te ayudaremos: <span className='green'>help@apuestadota.com </span></p>
                            </div>
                        </div>

                        <div className='int interface-item-03'>
                            <h4>Cómo funciona?</h4>
                            <div className='multimedia-container'>
                                <img className='img-prueba' src='/prueba.jpg' alt='prueba'/>
                            </div>
                        </div>   
                        <div className='int interface-item-04'>
                            <h4>Cómo depositar?</h4>
                            <div className='multimedia-container'>
                                <img className='img-prueba' src='/prueba.jpg' alt='prueba'/>
                            </div>
                        </div>              
                    </div>                   
                </div>
            </div>
        

        <style jsx>
        {`
        
            .mode-play {
                height: 100vh;
                overflow-y: auto;
            }
            .help-c {
                height: 50px;
                position: absolute;
                right: 0;
                bottom: 15%;
                margin-right: 40px;
                margin-top: -20px;
                filter: invert(89%) sepia(77%) saturate(549%) hue-rotate(26deg) brightness(105%) contrast(103%);
            }
            .interface {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(6, 1fr);
                padding: 4rem;
                grid-row-gap: 30px;
            }

            .interface-item-01 {
                grid-area: 1 / 1 / 3 / 3;
            }

            .interface-item-02 {
               grid-area: 1 / 3 / 3 / 4;
            }
            .interface-item-03 {
                grid-area: 3 / 1 / 5 / 3;
            }

            .interface-item-04 {
                grid-area: 5 / 1 / 9 / 3; 
            }

            .multimedia-container {
                width: 90%;
                
            }
            .int h4 {
                color: #fff;
                font-size: 37px;
                font-weight: 500;
                font-family: 'Poppins', sans-serif;
                margin-bottom: 15px;
            }

            .tutorial-subtitle {
                color: #fff;
                background-color: #41b6e6;
                font-size: 37px;
                font-weight: 500;
                font-family: 'Poppins', sans-serif;
                padding: 1rem 2rem;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }

            .tutorial-p {
                
                font-size: 20px;
                padding: 2rem 2rem;
                background-color: #101f3c;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }
            .tutorial-p p {
                color: rgba(255, 255, 255, .8);
                font-family: 'Roboto-mono', sans-serif;
            }

            .img-prueba {
                width: 100%;
                object-fit: cover;
                border-radius: 10px;
            }

            .green {
                color: #B6FF40;
               
            }
            @media (max-width: 768px) { 
            
                .mode-play {
                    overflow-x: hidden;
                    overflow-y: scroll;
                }
                .help-c {
                        margin-top: -60px;
                    }
        }
        @media (max-width: 485px) { 
            
            .interface {
                grid-template-columns: repeat(1, 1fr);
                grid-template-rows: repeat(8, 1fr);
                padding: 4rem 2rem;
                grid-row-gap: 0;
            }
            .interface-item-01 {
                grid-area: 1 / 1 / 3 / 2;
            }

            .interface-item-03 {
                grid-area:3 / 1 / 5 / 2;
            }
            .interface-item-04 {
                grid-area:5 / 1 / 7 / 2;
            }
            .interface-item-02 {
                grid-area:7 / 1 / 9 / 2;
            }
            .int h4 {
                font-size: 28px;
            }
            .tutorial-subtitle {
                font-size: 28px;
            }
    }
        `}
        </style>
    </>
  )
}
