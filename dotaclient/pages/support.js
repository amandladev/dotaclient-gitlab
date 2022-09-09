import React, {useState} from 'react'
import Leftbar from '../components/leftBar/Leftbar';
import Navbar from '../components/navbar/Navbar';

export default function Support() {

    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }
    const handleClick1 = () => {
        setActive1(!active1);
    }
    const handleClick2 = () => {
        setActive2(!active2);
    }
  return (
    <>
        
    <div className='mode-play'>
            <Navbar />

            <div className='main--1'>
            <Leftbar classWitdraw='left-container-body-anchor'  c2='left-container-body-anchor' c3='left-container-body-anchor'  c4='left-container-body-anchor' c5='left-container-body-anchor  left-body-anchor-active'  c6='left-container-body-anchor'/>
                <div className='interface'>
                    <div className='faq-container'>
                        <div className='faq-container-title'>
                            <h4>Preguntas Frecuentes</h4>
                        </div>

                        <div className='faq-container-box'>
                            <div className='faq-container-box-item'>
                                <div className='faq-container-box-item-title'>
                                    <h4 onClick={handleClick2}>¿Cómo puedo retirar mis ganancias?
                                        <img  className={active2 ? 'chevron chevron-top' : 'chevron'} src='/icons/chevron-down.png' alt='chevron-down'/>
                                    </h4>
                                    <p className={active2 ? 'active' : 'disable'}>
                                    Solo las ganancias obtenidas de tus apuestas con fondos bonus estarán disponibles para retirar. Los fondos bonus no se pueden retirar.
                                    </p>
                                </div>
                            </div>

                            <div className='faq-container-box-item'>
                                <div className='faq-container-box-item-title'>
                                    <h4>¿Cómo puedo retirar mis ganancias?</h4>
                                    <p className='disable'>
                                    Solo las ganancias obtenidas de tus apuestas con fondos bonus estarán disponibles para retirar. Los fondos bonus no se pueden retirar.
                                    </p>
                                </div>
                            </div>

                            <div className='faq-container-box-item'>
                                <div className='faq-container-box-item-title'>
                                    <h4>¿Cómo puedo retirar mis ganancias?</h4>
                                    <p className='disable'>
                                    Solo las ganancias obtenidas de tus apuestas con fondos bonus estarán disponibles para retirar. Los fondos bonus no se pueden retirar.
                                    </p>
                                </div>
                            </div>
                            <div className='faq-container-box-item'>
                                <div className='faq-container-box-item-title'>
                                    <h4>¿Cómo puedo retirar mis ganancias?</h4>
                                    <p className='disable'>
                                    Solo las ganancias obtenidas de tus apuestas con fondos bonus estarán disponibles para retirar. Los fondos bonus no se pueden retirar.
                                    </p>
                                </div>
                            </div>
                            <div className='faq-container-box-item'>
                                <div className='faq-container-box-item-title'>
                                    <h4>¿Cómo puedo retirar mis ganancias?</h4>
                                    <p className='disable'>
                                    Solo las ganancias obtenidas de tus apuestas con fondos bonus estarán disponibles para retirar. Los fondos bonus no se pueden retirar.
                                    </p>
                                </div>
                            </div>
                            <div className='faq-container-box-item'>
                                <div className='faq-container-box-item-title'>
                                    <h4>¿Cómo puedo retirar mis ganancias?</h4>
                                    <p className='disable'>
                                    Solo las ganancias obtenidas de tus apuestas con fondos bonus estarán disponibles para retirar. Los fondos bonus no se pueden retirar.
                                    </p>
                                </div>
                            </div>
                            <div className='faq-container-box-item'>
                                <div className='faq-container-box-item-title'>
                                    <h4>¿Cómo puedo retirar mis ganancias?</h4>
                                    <p className='disable'>
                                    Solo las ganancias obtenidas de tus apuestas con fondos bonus estarán disponibles para retirar. Los fondos bonus no se pueden retirar.
                                    </p>
                                </div>
                            </div>
                            <div className='faq-container-box-item'>
                                <div className='faq-container-box-item-title'>
                                    <h4>¿Cómo puedo retirar mis ganancias?</h4>
                                    <p className='disable'>
                                    Solo las ganancias obtenidas de tus apuestas con fondos bonus estarán disponibles para retirar. Los fondos bonus no se pueden retirar.
                                    </p>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className='box-terms'>
                        <div className='box-item box-item-a'>
                                <div className='box-item-title' onClick={handleClick}>
                                    <h4>Términos y condiciones</h4>
                                    <img  className={active ? 'chevron chevron-top' : 'chevron'} src='/icons/chevron-down.png' alt='chevron-down'/>
                                </div>
                                <div className={active ? 'box-item-anchor active' : 'box-item-anchor disable'}>
                                    <a href='/terms-apuestadota.pdf' target={'_blank'}>Lee nuestros términos y condiciones en este enlace</a>
                                </div>
                        </div>    
                        <div className='box-item box-item-b'>          
                            <div className='box-item-title' onClick={handleClick1}>
                                    <h4>Reglas</h4>
                                    <img  className={active1 ? 'chevron chevron-top' : 'chevron'} src='/icons/chevron-down.png' alt='chevron-down'/>
                            </div>
                            <div className={active1 ? 'box-item-anchor active' : 'box-item-anchor disable'}>
                                    <a href='/terms-apuestadota.pdf' target={'_blank'}>Puedes ver nuestras reglas en este enlace</a>
                            </div>
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

        .faq-container {
            padding: 4rem;
        }

        .faq-container-title h4 {
                color: #fff;
                
                font-size: 37px;
                font-weight: 500;
                font-family: 'Poppins', sans-serif;
               
        }

        .box-terms {
            position: absolute;
            right: 0;
            top:0;
            margin: 4rem;
            width: 500px;
           
        }

        .box-item {
            background-color: #41b6e6;
            color: #fff;
            font-family: 'Poppins', sans-serif;
            padding: 1rem 2rem;
        }

        .box-item-title {
            font-size: 30px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 30px;
            justify-content: space-between;
        }

        .active {
            display: block;
            opacity:1;
        }

        .disable {
            display: none;
            opacity: 0;
        }
        .box-item-anchor {
            transition: all 0.5s ease;
        }
        .box-item-anchor a {
            color: #B6FF40;
            text-decoration: none;
            font-family: 'Roboto Mono', monospace;
        }

        .box-item-a {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        .box-item-b {
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        .chevron-top {
            transform: rotate(180deg);
        }

        .chevron {
            height: 24px;
            width: 24px;
        }

        .faq-container-box {
            width: 60%;
        }
       

       .faq-container-box-item-title h4 {
            color: #fff;
            font-family: 'Poppins', sans-serif;
            font-size: 22px;
            display:flex;
            justify-content: space-between;
            align-items: center;
            
       }

       .faq-container-box-item-title {
            background-color: rgba(60,83,118,1);
            border-radius: 10px;
            padding: 1rem 2rem;
            cursor:pointer;
       }

       .faq-container-box-item-title p {
            margin-top: 1rem;
            font-size: 16px;
            color: rgba(255, 255, 255, .8);
            font-family: 'Roboto Mono', sans-serif;
       }

       .faq-container-box-item-title {
            margin-top: 2rem;
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
        
      
}
    `}
    </style>
</>
  )
}
