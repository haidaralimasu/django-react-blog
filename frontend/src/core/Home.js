import React ,{useState}from 'react'
import Navbar from '../components/Navbar/index'
import Sidebar from "../components/Sidebar/index";
import Footer from '../components/Footer/index'
import InfoSection from '../components/Infosection/index'
import Card from '../components/Card/index'


const Home = () => {

	    const [isOpen, SetisOpen] = useState(false);

    const toggle = () => {
        SetisOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <InfoSection />

            <Card />
            <Footer />
            
        </>
    )
}

export default Home
