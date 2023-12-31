import SocialMediaIcons from "../components/SocialMediaIcons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
const Landing = ({setSelectedPage}) => {
const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

return (
    <section id='home' className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'
    >
        {/*Image Section*/}
        {/*down here, in the second div with all the before: classnames, is the border behind the profile picture in home*/}
       <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
        {isAboveMediumScreens ? (
            
            <div
            className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
            before:rounded-full before:w-[600px] before:h-[600px] before:border-2 before:border-green before:z-[-1]'
            >
                
                <img 
                alt='profile'
                className='hover:filter hover:grayscale transition duration-500 z-10 w-full
                max-w-[400px] md:max-w-[600px]'
                src='assets/profile-image.png'
                />
            </div>
        ) : (
            <img 
            alt='profile'
            className='hover:filter hover:saturate-150 transition duration-500 z-10 w-full
            max-w-[400px] md:max-w-[600px]'
            src='assets/profile-image.png'
            />  
        )}
        </div>

            {/*MAIN SECTION*/}
            <div className='z-30 basis.2/5 mt-12 md:mt-32'>
                {/* Headings */}
                {/*The following motion.div is an animation!*/}
                <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                >
                    <p className='text-6xl font-playfair z-10 text-center md:text-start'>
                        Jonathan {''}
                        <span 
                        className='xs:relative xs:text-green xs-font-semibold z-20
                        xs:before: before:absolute before:-left-[25px]
                        before:-top-[70px] before:z-[-1]'
                        >
                            R·V
                        </span>
                    </p>
                    <p className='mt-10 mb-7 text-darkyellow text-sm text-center md:text-start'>
                    I'm a full stack developer with a passion for technology and problem solving. 
                    Currently living in La Coruña, Galicia.  
                    </p>
                </motion.div>
               {/* call to actions */}
               <motion.div
               className='flex mt-5 justify-center md:justify-start'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5}}
                transition={{ delay: 0.2, duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                >
                    <AnchorLink
                    className='bg-gradient-rainblue text-green rounded-sm py-3 px-7 font-semibold
                    hover:bg-greyblue hover:text-light transition duration-700'
                    onClick={() => setSelectedPage('contact')}
                    href='#contact'
                    >
                        Contact Me
                    </AnchorLink>
                    {/* <AnchorLink
                    className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
                    onClick={() => setSelectedPage('contact')}
                    href='#contact'
                    >
                        <div
                        className='bg-darkyellow hover:text-deep-blue transition duration-500 w-full h-full flex items-center
                        justify-center font-playfair px-10'
                        >
                            Let's talk.
                        </div>
                    </AnchorLink> */}
                    </motion.div>

                  <motion.div
                  className='flex mt-5 justify-center md:justify-start'
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5}}
                  transition={{ delay: 0.4, duration: 0.5}}
                  variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 }
                  }}
                  >
                    <SocialMediaIcons />
                    </motion.div>  
            </div>
    </section>
)
}

export default Landing;
