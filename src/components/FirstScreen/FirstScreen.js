import React from 'react'
import arrow from '../../assets/img/arrow.png'
import {LoginModal} from "../LoginModal/LoginModal";


export const FirstScreen = ({isLogginModalOpen,setIsLogginModalOpen,isLoggedIn,setIsLoggedIn,onLoginButtonClick,
                                slidersImages,currentSlide,onPrevClick,onNextClick,setCurrentSlide})=>{
    return(
        <div className="firts-screen">
            {isLogginModalOpen && <LoginModal setIsLogginModalOpen={setIsLogginModalOpen} setIsLoggedIn={setIsLoggedIn}/>}
            <div className="firts-screen__header">
                <h1>Header</h1>
                <button className={!isLoggedIn ? '': 'none'} onClick={onLoginButtonClick}>Login</button>
            </div>
            <div className="first-screen__slider">
                <div className="slider">
                    <div style={{background:`url(${slidersImages[currentSlide].img}) center/cover no-repeat`}} className="slider__container">
                        <div className="slider__description">
                            <h6>{slidersImages[currentSlide].title}</h6>
                            <p>{slidersImages[currentSlide].text}</p>
                        </div>
                        <div className="slider__prev" onClick={onPrevClick}>
                            <img src={arrow} alt="prev images"/>
                        </div>
                        <div className="slider__next" onClick={onNextClick} >
                            <img src={arrow} alt="next images"/>
                        </div>
                    </div>
                    <div className="slider__icons">
                        <div className="slider__icon" onClick={()=>setCurrentSlide(0)}/>
                        <div className="slider__icon" onClick={()=>setCurrentSlide(1)}/>
                        <div className="slider__icon" onClick={()=>setCurrentSlide(2)}/>
                        <div className="slider__icon" onClick={()=>setCurrentSlide(3)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}