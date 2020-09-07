import React, {useEffect} from "react";
import {Link as LinkScroll} from "react-scroll";
import {HashLink} from 'react-router-hash-link';
import {useLocation} from "react-router-dom";
import "./style.scss";


const Items = {
    home: 'home',
    aboutUs: 'about-us',
    services: 'services',
    ourWorks: 'our-works',
    reviews: 'reviews',
    contacts: 'contacts'
};


export default function Menu() {
    let location = useLocation();
    return (
        <React.Fragment>
            {location.pathname === `/` ?
                <ul className="navbar-nav nav justify-content-end header-list">
                    <li className="nav-item header-list__item">
                        <LinkScroll activeClass="active"
                                    to={Items.home}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link header-list__link">
                            Головна
                        </LinkScroll>
                    </li>
                    <li className="nav-item header-list__item">
                        <LinkScroll activeClass="active"
                                    to={Items.services}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link header-list__link">
                            Послуги
                        </LinkScroll>
                    </li>
                    <li className="nav-item header-list__item">
                        <LinkScroll activeClass="active"
                                    to={Items.aboutUs}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link header-list__link">

                            Про нас
                        </LinkScroll>
                    </li>
                    <li className="nav-item header-list__item">
                        <LinkScroll activeClass="active"
                                    to={Items.ourWorks}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link header-list__link">
                            Наші роботи
                        </LinkScroll>

                    </li>
                    <li className="nav-item header-list__item">
                        <LinkScroll activeClass="active"
                                    to={Items.reviews}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link header-list__link">
                            Відгуки
                        </LinkScroll>

                    </li>
                    <li className="nav-item header-list__item">
                        <LinkScroll activeClass="active"
                                    to={Items.contacts}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="nav-link header-list__link">
                            Контакти
                        </LinkScroll>
                    </li>
                </ul> :
                <ul className="navbar-nav nav justify-content-end header-list">
                    <li className="nav-item header-list__item">
                        <HashLink to={`/#${Items.home}`}
                                  className="nav-link header-list__link">
                            Головна
                        </HashLink>
                    </li>
                    <li className="nav-item header-list__item">
                        <HashLink to={`/#${Items.services}`}
                                  className="nav-link header-list__link">
                            Послуги
                        </HashLink>
                    </li>
                    <li className="nav-item header-list__item">
                        <HashLink to={`/#${Items.aboutUs}`}
                                  className="nav-link header-list__link">
                            Про нас
                        </HashLink>
                    </li>
                    <li className="nav-item header-list__item">
                        <HashLink to={`/#${Items.ourWorks}`}
                                  className="nav-link header-list__link">
                           Наші роботи
                        </HashLink>
                    </li>
                    <li className="nav-item header-list__item">
                        <HashLink to={`/#${Items.reviews}`}
                                  className="nav-link header-list__link">
                            Відгуки
                        </HashLink>
                    </li>
                    <li className="nav-item header-list__item">
                        <HashLink to={`/#${Items.contacts}`}
                                  className="nav-link header-list__link">
                            Контакти
                        </HashLink>
                    </li>
                </ul>
            }
        </React.Fragment>
    );
}
