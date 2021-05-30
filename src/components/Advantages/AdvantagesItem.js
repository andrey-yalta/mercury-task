import React from 'react'

export const AdvantagesItem = ({header,text,img})=>{
    return(
                <div className="advantages__item">
                    <img src={img} alt="img"/>
                    <div className="advantages__item-about">
                        <h4>
                            {header.length >40? header.slice(0,40)+'...': header}
                        </h4>
                        <p>
                            {text.length > 100? text.slice(0,100)+'...': text}
                        </p>
                    </div>
                </div>
    )
}