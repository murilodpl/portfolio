import { useState } from "react"

export default function Header() {
    const [mobileMenuShow, setMobileMenuShow] = useState(false)

    function menuBtnClick() {
        setMobileMenuShow(prevBool => !prevBool)
        
        setTimeout(() => {
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }, 5);
    }

    return (
        <header className="shadow-md bg-m_black w-full fixed z-50">
            <nav className="px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap justify-between items-center py-6 mx-auto">
                    <div className="flex">
                        <h1 className="text-md md:text-xl font-bold mr-auto text-primary self-center ml-2">
                            <a href="#" className="self-center text-xl font-semibold whitespace-nowrap text-m_white">Murilo's Portfolio</a>
                        </h1>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="outline-none menu-button" aria-label="Open mobile menu" onClick={menuBtnClick}>
                            <svg className="w-6 h-6 text-gray-500" x-show="! showMenu" fill="none" viewBox="0 00 24 24" stroke="currentColor">
                                <path d="m4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <a href="#" onClick={menuBtnClick} className="navItem">Home</a>
                            </li>
                            <li>
                                <a href="#aboutme" onClick={menuBtnClick} className="navItem">About me</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={menuBtnClick} className="navItem">Projects</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={menuBtnClick} className="navItem">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${(!mobileMenuShow) && "hidden"} md:hidden border border-m_purple rounded`}>
                    <ul>
                        <li>
                            <a href="#" onClick={menuBtnClick} className="navItem">Home</a>
                        </li>
                        <li>
                            <a href="#aboutme" onClick={menuBtnClick} className="navItem">About me</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={menuBtnClick} className="navItem">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={menuBtnClick} className="navItem">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}