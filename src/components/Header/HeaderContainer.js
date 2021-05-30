import React from 'react'
import {Header} from "./Header";

export const HeaderContainer = React.memo(()=>{

    const [isHeaderNavigationOpen,setIsHeaderNavigationOpen] = React.useState(true);
    const onClickToHamburger = ()=>{
        setIsHeaderNavigationOpen(!isHeaderNavigationOpen)
    }
    return(
        <Header onClickToHamburgerHandler={onClickToHamburger} isHeaderNavigationOpen={isHeaderNavigationOpen} />
    )
})