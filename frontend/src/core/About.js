import React ,{useState}from 'react'
import Navbar from '../components/Navbar/index'
import Sidebar from "../components/Sidebar/index";
import Footer from '../components/Footer/index'
import AboutP from '../components/About/index'


const About = () => {

	const [isOpen, SetisOpen] = useState(false);

    const toggle = () => {
        SetisOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
          	<AboutP />
            <Footer />
            
        </>
    )
}

export default About