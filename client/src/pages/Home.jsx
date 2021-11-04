import React from 'react';
import Logo from '../components/home/Logo'
import Services from "../components/home/Services"
import HomeWidget from "../components/home/HomeWidget"
import Contact from "../components/home/Contact"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <div >
            <Header home={true}/>
            <Logo/>
            <section id="Service">   
                <Services/>
            </section>
            <section id="Widget">  
                <HomeWidget/>
            </section>
            <section id="Contact">            
                <Contact/>
            </section>
            <Footer home={true} />  
        </div>

    );
};
export default Home;