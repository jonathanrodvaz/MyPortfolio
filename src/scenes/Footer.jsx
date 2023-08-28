import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {

    return (
        <footer className='h-64 bg-greyblue pt-10'>
            <div className='w-5/6 mx-auto'>
                <SocialMediaIcons />
                <div className='md:flex jusitfy-center md:justify-between text-center'>
                    <p className='font-playfair font-semibold text-2xl text-light'>Jonathan Rodríguez</p>
                    <p className='font-playfair text-md text-light'>©2023 All Rights Reserved.</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer;