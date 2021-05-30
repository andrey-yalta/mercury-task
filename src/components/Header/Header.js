import React from 'react'
import headerMobileMenu from '../../assets/img/header-mobile-menu.png'
export const Header = ({onClickToHamburgerHandler,isHeaderNavigationOpen})=>{

    return(
        <header className="header">
            <div className="header__logo">
		<span>
			Logo
		</span>
            </div>
            <nav className={isHeaderNavigationOpen? "header__navigation":"header__navigation open"}>
                <ul>
                    <li onClick={onClickToHamburgerHandler}>Link1</li>
                    <li onClick={onClickToHamburgerHandler}>Link2</li>
                    <li onClick={onClickToHamburgerHandler}>Link3</li>
                    <li onClick={onClickToHamburgerHandler}>Link4</li>
                </ul>
            </nav>
            <div onClick={onClickToHamburgerHandler} className="header__mobile-menu">
                <img src={headerMobileMenu} alt="menu"/>
            </div>
        </header>
    )
}