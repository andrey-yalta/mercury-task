import React from 'react'
import {FeedbackForm} from "./FeedbackForm";
import {useAdvantagesContext} from "../../Context/AdvantagesContext";
export const Feedback = ()=>{

    const {slidersImages}= useAdvantagesContext()

    return(
        <div className="feedback">
            <div className="feedback__form">
                <h2>Header</h2>
                <FeedbackForm/>
            </div>
            <div className="feedback__images">
                <img className="feedback__image-1" src={slidersImages[0].img} alt="img"/>
                    <img className="feedback__image-2" src={slidersImages[2].img} alt="img"/>
                        <img className="feedback__image-3" src={slidersImages[3].img} alt="img"/>
            </div>
        </div>
    )
}