import React from 'react';
import Logo from '../Assets/Logo.png';
import './Header.scss';

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header-box">
                        <a href="#" className="header__logo">
                            <img src={Logo} alt=""/>
                        </a>
                        <nav className="header__nav">
                            <a href="#" className="header__nav__link">MAN</a>
                            <a href="#" className="header__nav__link">Woman</a>
                            <a href="#" className="header__nav__link">Jersey</a>
                            <a href="#" className="header__nav__link">Teams</a>
                            <a href="#" className="header__nav__link">App</a>
                        </nav>
                        <div className="header__icons">
                            <a href="" className="header__icons__icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2_42)">
                                        <path
                                            d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
                                            fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_42">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                            <a href="" className="header__icons__icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2_39)">
                                        <path
                                            d="M12.001 4.52901C14.35 2.42001 17.98 2.49001 20.243 4.75701C22.505 7.02501 22.583 10.637 20.479 12.993L11.999 21.485L3.52101 12.993C1.41701 10.637 1.49601 7.01901 3.75701 4.75701C6.02201 2.49301 9.64501 2.41701 12.001 4.52901ZM18.827 6.17001C17.327 4.66801 14.907 4.60701 13.337 6.01701L12.002 7.21501L10.666 6.01801C9.09101 4.60601 6.67601 4.66801 5.17201 6.17201C3.68201 7.66201 3.60701 10.047 4.98001 11.623L12 18.654L19.02 11.624C20.394 10.047 20.319 7.66501 18.827 6.17001Z"
                                            fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_39">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                            <a href="" className="header__icons__icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2_36)">
                                        <path
                                            d="M4 16V4H2V2H5C5.26522 2 5.51957 2.10536 5.70711 2.29289C5.89464 2.48043 6 2.73478 6 3V15H18.438L20.438 7H8V5H21.72C21.872 5 22.022 5.03466 22.1586 5.10134C22.2952 5.16801 22.4148 5.26495 22.5083 5.38479C22.6019 5.50462 22.6668 5.6442 22.6983 5.79291C22.7298 5.94162 22.7269 6.09555 22.69 6.243L20.19 16.243C20.1358 16.4592 20.011 16.6512 19.8352 16.7883C19.6595 16.9255 19.4429 17 19.22 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16ZM6 23C5.46957 23 4.96086 22.7893 4.58579 22.4142C4.21071 22.0391 4 21.5304 4 21C4 20.4696 4.21071 19.9609 4.58579 19.5858C4.96086 19.2107 5.46957 19 6 19C6.53043 19 7.03914 19.2107 7.41421 19.5858C7.78929 19.9609 8 20.4696 8 21C8 21.5304 7.78929 22.0391 7.41421 22.4142C7.03914 22.7893 6.53043 23 6 23ZM18 23C17.4696 23 16.9609 22.7893 16.5858 22.4142C16.2107 22.0391 16 21.5304 16 21C16 20.4696 16.2107 19.9609 16.5858 19.5858C16.9609 19.2107 17.4696 19 18 19C18.5304 19 19.0391 19.2107 19.4142 19.5858C19.7893 19.9609 20 20.4696 20 21C20 21.5304 19.7893 22.0391 19.4142 22.4142C19.0391 22.7893 18.5304 23 18 23Z"
                                            fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_36">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default Header;