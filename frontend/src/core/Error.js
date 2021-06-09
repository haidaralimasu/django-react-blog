import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import '../index.css'
import Navbar from '../components/Navbar/index'
import Sidebar from "../components/Sidebar/index";
import Footer from '../components/Footer/index'
import {Button} from '../globalStyles.js'

const Error = () => {

		    const [isOpen, SetisOpen] = useState(false);

    const toggle = () => {
        SetisOpen(!isOpen);
    };

    return (
        <>
                    <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        <section className="page_404">
	<div className="container">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-10 col-sm-offset-1  text-center">
		<div className="four_zero_four_bg">
			<h1 className="text-center ">404</h1>
		
		
		</div>
		
		<div className="contant_box_404">
		<h3 className="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		<Link to="/">
		
		<Button to="/">Go to Home</Button>
	</Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
<Footer />
        </>
    )
}

export default Error
