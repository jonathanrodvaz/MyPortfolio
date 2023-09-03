import LineGreen from "../components/LineGreen";
import { motion } from "framer-motion";



const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

const Project = ({ title, subtitle, websiteUrl }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(' ').join('-').toLowerCase();


    return (
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
        <motion.div variants={projectVariant} className='relative'>
            {/*The text that pops over the images of the projects */}
            <div className={overlayStyles}>
                <p className='text-2xl font-playfair'>{title}</p>
                <p className= 'mt-7'>
                    {subtitle}
                </p>
            </div>
            <div className="w-84 h-82 p-1 flex justify-center items-center">
            <img src={`../assets/${projectTitle}.jpg`} alt={projectTitle} />
            </div>
        </motion.div>
        </a>
    )
}
const Projects = () => {

    return(
        <section id='projects' className='pt-48 pb-48'>
            {/* HEADINGS */}
            <motion.div
                className='md:w-2/4 mx-auto text-center'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
                >
                    <div>
                    <p className='font-playfair font-semibold text-4xl'>
                        <span className='text-white'>PROJECTS</span>
                    </p>
                    <div className='flex justify-center mt-5'>
                    <LineGreen width='w-1/3'/>
                    </div>
                    </div>
                    <p className='mt-10 mb-10 text-darkyellow'>
                    Here you can take a look at my work. Click on each project to visit the live website. 
                    </p>
                </motion.div>
                {/* PROJECTS */}
                <div className='flex justify-center'>
                <motion.div
                className='sm:grid sm:grid-cols-2'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5}}
                variants={container}
                >
                    {/* ROW 1 */}
                    
                    <Project 
                    title='Project 1' 
                    subtitle='Travel website done in React, NodeJs, Express, Vite, MongoDB, Styled Component, CSS3'
                    websiteUrl='https://frontend-ruteros.vercel.app/'
                    />
                    
                    
                    <Project 
                    title='Project 2' 
                    subtitle='Freelance-Marketplace website done in React, NodeJs, Express, Vite, MongoDB, Styled Component, CSS3'
                    websiteUrl='https://frontend-dev-link-gray.vercel.app/'
                    />
                   

                    {/* ROW 2 */}
                    
                    <Project 
                    title='Project 3' 
                    subtitle='Retro-Inspired AI Image Generator done in HTML+CSS+JS'
                    websiteUrl='https://ai-image-generator-app-beta.vercel.app/'
                    />

                    <Project 
                    title='Project 4' 
                    subtitle='E-Commerce Front done in HTML+CSS'
                    websiteUrl='https://ejercicio-dayseeker.vercel.app/'
                    />
                    {/* <Project title='Project 5'/> */}

                    {/* ROW 3 */}
                    {/* <Project title='Project 6'/>
                    <Project title='Project 7'/> */}
                   
                    
                    </motion.div>
                </div>
        </section>
    )
}

export default Projects;