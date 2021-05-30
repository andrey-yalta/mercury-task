import React from 'react'
import {useAdvantagesContext} from "../../Context/AdvantagesContext";
import {FirstScreen} from "./FirstScreen";


export const FirstScreenContainer = ()=>{
    const {slidersImages}= useAdvantagesContext()
    const slideLength = slidersImages.length
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [isLogginModalOpen, setIsLogginModalOpen] = React.useState(false)
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    const onNextClick=()=>{
        setCurrentSlide(currentSlide === slideLength -1? 0: currentSlide +1)
    }
    const onPrevClick=()=>{
        setCurrentSlide(currentSlide === 0 ? slideLength-1: currentSlide -1)
    }
    const onLoginButtonClick=()=>{
        setIsLogginModalOpen(!isLogginModalOpen)
    }

    return(
        <FirstScreen isLogginModalOpen={isLogginModalOpen} setIsLogginModalOpen={setIsLogginModalOpen} isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn} onLoginButtonClick={onLoginButtonClick} slidersImages={slidersImages}
                     currentSlide={currentSlide} onPrevClick={onPrevClick} onNextClick={onNextClick} setCurrentSlide={setCurrentSlide}/>
    )
}