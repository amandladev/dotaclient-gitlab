import React from 'react';
import { useState, useEffect } from 'react';
import AppService from '../../services/app.service';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import  Apuestas from '../Apuestas/Apuestas';

const Solo = () => {

    const router = useRouter();
    const [active, setActive] = useState(false);

    const [searching, setSearching] = useState(false);
    const [saldo, setSaldo] = useState("0.00");
    const [bet, setBet] = useState(40);

    const handleClick = event => {
        setActive(current => !current);    
    };

    const handleInputMonto = event => {
        const n = parseInt(event.target.value);
        setBet(n);
    }
    const decreaseBet = () => {
        setBet(current => current - 1);
    }

    const increaseBet = () => {
        setBet(current => current + 1);
    }

    const apostar = () => {

        let _saldo = Number(saldo);

        if(searching){

        } else {
            // validar si cuenta con saldo
            if(bet > saldo){
                Swal.fire({
                    icon: 'error',
                    text: 'No cuentas con saldo suficiente para realizar la apuesta'
                  });
                return;
            } else {
                setSearching( current => !current );
                let s = new AppService();
                s.makePost("bet", {monto: bet}, true).then(res=>{
                    if(res.data.match){
                        Swal.fire({
                            'text': 'Apuesta registrada exitosamente',
                            icon: 'success'
                        }).then(()=>{
                            setSearching( current => !current );
                            router.push("/play");
                        });
                    }
                }).catch(error=>{
                    Swal.fire({
                        text: error.response.data.error,
                        icon: 'error'
                    });
                    setSearching( current => !current );
                });
            }
        }
    }

    const obtenerSaldo = () => {
        let s = new AppService();
        s.makeGet('saldo', {}, true).then(resp=>{
            setSaldo(resp.data.saldo);
        });
    };

    useEffect(()=>{
        obtenerSaldo();
    }, []);
      
    return (
        <>
              <div className={active ? 'sss scaleuptr visible' : 'sss scaledowntop'} id="sss">
                        <div className="mode-create-lobby">
                            <img src="/icons/close-w.png" alt="close" id="closebutton"  onClick={handleClick}/>
                            
                            <h4 className="mb-sm subtitle-modes">Elige el monto de tu apuesta</h4>
                            <div className="mode-solo-amount"> 
                                <div className="mode-solo-amount-inp">
                                    <div className="question-mark">
                                        <span>?</span>
                                    </div>
                                    <h3>Importe:</h3>
                                    <input className='inputBetAmount' type='number' onChange={handleInputMonto} value={bet}/> 
                                </div>
                                <div className="mode-solo-amount-btn">  
                                    <button className="large-btn" onClick={increaseBet}>+</button>
                                    <button className="large-btn" onClick={decreaseBet} disabled={bet <= 1}>-</button>
                                </div>
                            </div>       
                            <div className="start-game-btn-container">
                                <button className="start-game-btn" onClick={apostar}>Poner apuesta</button>
                            </div> 
                            <div>
                                <h4 className="mb-sm subtitle-modes lighterr">Detalles de la apuesta:</h4>

                                <div className="profit-container">
                                    <h4 className="subtitle-modes lighterr">Beneficio %: <span className="bold">+ 40%</span></h4>
                                    <h4 className="subtitle-modes lighterr">Beneficio Q: <span className="bold">+ $ { (bet * .4).toFixed(2) }</span></h4>
                                    <h4 className="subtitle-modes lighterr">Calculo de ganancia: <span className="bold">$ { (bet * 1.4).toFixed(2) }</span></h4>
                                </div>

                            </div>
                        </div>  
                </div>
                
                <div className="mode--solo">
                        <div className="mode--solo--c">
                            <div className="solo--title"> 
                                <h3>
                                    JUEGA RANKED Y GANA DINERO
                                </h3>
                            </div>
                            <div className="solo--item">
                                {/* <!-- video --> */}
                                <div className="solo--item--i">
                                    <img src="../midas.jpg" alt="mode-solo" />
                                </div>
                                <div className="solo--item-content">
                                    <div className="solo--item-content-head">
                                        <span>Apuesta en tu propia partida</span>
                                        <h2>Modo Individual</h2>
                                    </div>
                                    <div className="solo--item-content-desc">
                                        <p> Te pagamos el 40% de tu apuesta por cada partida ganada. <br></br> 
                                        Cansado de que te diga que busques un trabajo, gana dinero jugando Dota2.
                                          </p>
                                    </div>
                                    <div className="solo--item-content-button">
                                        <a href="#" className="solo--btn-c" id="openbutton" onClick={handleClick}>Iniciar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br /><br />
                        <div className="mode--solo--c">
                            <div className="solo--title"> 
                                <h3>Apuestas realizadas</h3>
                            </div>
                            <div className="solo--content">
                                <Apuestas />
                            </div>
                        </div>     
                </div>

            <style jsx>
            {`
            .mode-unactive a h4 {
    color: #999;
}



/* crear apuesta - MODO SOLO */

.sss {
    position: absolute;
    width: 100%;
    height: 100%;  
    background-color: rgba(55, 55, 55, 0.631);
    top:-5%;
    z-index: 5;
    display: flex;
    justify-content: center;
    visibility: hidden;
    align-items: flex-start;
}

.subtitle-modes {
    color: #fff;
    /* text-align: center; */
    font-size: 25px;
    font-family: 'Roboto Mono', monospace;
}

.mb-sm {
    margin-bottom: 20px;
}

.mode-solo-amount {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.mode-solo-amount-inp {
    background-color: #0e1018;
    width: 320px;
    border-radius: 10px;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
}

.question-mark {
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
}

.mode-solo-amount div h3 {
    font-size: 22px;
    font-weight: lighter;
    text-align: center;
}

.mode-solo-amount-btn {
    width: 320px;
    border-radius: 10px;
    display: flex;
    gap: 5px;
}

.large-btn {
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 20px;
    font-size: 20px;
    background-color: #0e1018;
    border: none;
    color: #fff;
    width: 50%;
}

.start-game-btn-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.start-game-btn {
    background-color: #B6FF40;
    color: #081325;
    border: none;
    border-radius: 20px;
    font-size: 22px;
    line-height: 28px;
    width: 370px;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    font-family: 'Roboto Mono', monospace;
    text-transform: uppercase;
}

.lighterr {
    font-weight: 300;
}


.visible {
    visibility: visible!important;;    
}

.scaleuptr {
	-webkit-animation: scale-up-tr 0.4s ease-in-out both;
	        animation: scale-up-tr 0.4s ease-in-out both;
}

.scaledowntop {
	-webkit-animation: scale-down-top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: scale-down-top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.mode-create-lobby {
    background-color: #25273d;
    padding: 68px 40px;
    margin-top: 10%;
    position: relative;
}

.mode-create-lobby img {
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px;
    cursor: pointer;
}

.inputBetAmount {
    background: transparent;
    color: #fff;
    border: none;
    text-align: center;
    width: 100%;
   
    font-size: 22px;
    font-weight: lighter;
    font-family: 'Roboto Mono', monospace;
}

.gc-profile-title {
            
            margin-bottom: 40px;
            font-size: 20px;
            font-weight: 300;
            font-family: 'Poppins', sans-serif;
            text-transform: uppercase;
            color: #fff;
        }

.desktop-table {
    padding: 20px;
    margin-top: 20px;
    width:100%;
}
table {
    border: 1px solid transparent;
    background-image: linear-gradient(to bottom,#161629 32px,rgba(22,22,41,0));
    border-image: linear-gradient(to bottom,rgba(255,255,255,.1),rgba(255,255,255,0))1;
}

th {
    color: #fff;
    opacity: 0.48;
}
td {
    color: #fff;
    text-align: center;
    padding: 10px 20px;
}
th, td {
    font-family: 'Roboto Mono', monospace;
}

{/* MOBILE TABLE */}

.mobile-table {
    max-width: 500px;
    display:none;
    opacity: 0;
}

/* cerrar */
@-webkit-keyframes scale-down-top {
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: 50% 0%;
              transform-origin: 50% 0%;
    }
    100% {
      -webkit-transform: scale(0.3);
              transform: scale(0.3);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
              opacity: 0;
              visibility: hidden;
    }
  }
    @keyframes scale-down-top {
        0% {
        -webkit-transform: scale(1);
                transform: scale(1);
        -webkit-transform-origin: 100% 0%;
                transform-origin: 100% 0%;
        }
        100% {
        -webkit-transform: scale(0.3);
                transform: scale(0.3);
        -webkit-transform-origin: 100% 0%;
                transform-origin: 100% 0%;
                opacity: 0;
                visibility: hidden;
        }
    }

    /* abrir */
    @-webkit-keyframes scale-up-tr {
        0% {
        -webkit-transform: scale(0.3);
                transform: scale(0.3);
        -webkit-transform-origin: 100% 0%;
                transform-origin: 100% 0%;
                opacity: 0;
        }
        100% {
        -webkit-transform: scale(1);
                transform: scale(1);
        -webkit-transform-origin: 100% 0%;
                transform-origin: 100% 0%;
        }
    }
    @keyframes scale-up-tr {
        0% {
        -webkit-transform: scale(0.3);
                transform: scale(0.3);
        -webkit-transform-origin: 100% 0%;
                transform-origin: 100% 0%;
                opacity: 0;
        }
        100% {
        -webkit-transform: scale(1);
                transform: scale(1);
        -webkit-transform-origin: 100% 0%;
                transform-origin: 100% 0%;
        }
    }

    @media (max-width: 768px) {
        .mode-create-lobby {
            
            margin-top: 20%;
        
        }
    }
    @media (max-width: 415px) { 
        .mode-create-lobby {
            margin-top: 70%;
            padding: 50px 22px;
        }
        .mode-solo.amount h3 {
            font-size: 18px;
        }
        .subtitle-modes {
            font-size: 16px;   
            margin-left: 30px; 
        }

        .start-game-btn {
            font-size: 20px;
            width: 310px;
        }
    }
            `}</style>
        </>
    );
}

export default Solo;
