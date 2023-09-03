import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
        className={`${selectedPage === lowerCasePage ? 'text-light' : ''}
        hover:text-green transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}

        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenudToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
    const navbarBackground = isTopOfPage ? '' : 'bg-greyblue';
    return(
        <nav className={ `${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className='flex items-center justify-between mx-auto w-5/6'>
                <h4 className='font-playfair text-3xl text-green font-bold'>J·R</h4>
            {/* DESKTOP NAV */}
            {isAboveSmallScreens ? (
                <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
                    <Link 
                    page='Home'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    {/* <Link 
                    page='Skills'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    /> */}
                    <Link 
                    page='Projects'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    {/* <Link 
                    page='Testimonials'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    /> */}
                    <Link 
                    page='Contact'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                </div>
            ) : ( 
            <button
            className='rounded-full bg-greyblue p-2'
            onClick={() => setIsMenuToggled(!isMenudToggled)}
            >
                 <img alt='menu-icon' src='../assets/menu-icon.svg' />
            </button>
            )}
            {/* MOBILE MENU POPUP*/}
            {!isAboveSmallScreens && isMenudToggled && (
                <div className='fixed right-0 bottom-0 h-full bg-greyblue w-[300px]'>
                            {/*CLOSE ICON*/}
                            <div className='flex justify-end p-12'>
                                <button onClick={() => setIsMenuToggled(!isMenudToggled)}>
                                  <img alt='close-icon' src='../assets/close-icon.svg' /> 
                                </button>
                            </div>
                            {/*Menu Items*/}
                            <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                            <Link 
                    page='Home'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    {/* <Link 
                    page='Skills'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    /> */}
                    <Link 
                    page='Projects'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    {/* <Link 
                    page='Testimonials'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    /> */}
                    <Link 
                    page='Contact'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                            </div>
                </div>
            )}
            </div>
        </nav>
    )
}

export default Navbar;