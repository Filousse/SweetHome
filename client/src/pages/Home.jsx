import React from 'react';
import Logo from '../components/home/Logo'
import Services from "../components/home/Services"
import Widgets from "../components/home/Widgets"
import Contact from "../components/home/Contact"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <>
            <Header home={true}/>
            <Logo/>
            <section id="Service">   
                <Services/>
            </section>
            <section id="Widget">  
                <Widgets/>
            </section>
            <section id="Contact">            
                <Contact/>
            </section>  
            <Footer/>
        </>

    );
};
export default Home;