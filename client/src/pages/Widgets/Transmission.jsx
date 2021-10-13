import React, { useState } from 'react';
import { Row } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LayoutTransmission from "../../components/transmission/LayoutTransmission"
import { useSelector } from "react-redux"
import { useEffect } from 'react';

const Transmission = () => {
    const userReducer = useSelector(state => state.userReducer)
    const [team, setTeam] = useState()

    useEffect(() => {
        const loadTeam = () => {
            setTeam(userReducer.team)
        }
        return () => {
            loadTeam()
        }
    }, [userReducer])

    const handelMedical = () => {
        setTeam("Médical")
    }

    const handelEducatif = () => {
        setTeam("Éducatif")
    }

    return (
        <>
            <Header logout={false}></Header>
            {!team &&
                <>
                    { !userReducer.team &&
                        <>

                            <>
                                <Row onClick={handelEducatif} style={{ "backgroundColor": "#61a6fb", "cursor": "pointer" }} className="justify-content-center m-4 mr-6 p-4">
                                    <h3 className={"text-center"} >Cahier de transmission éducatif</h3>
                                </Row>
                                <Row onClick={handelMedical} style={{ "backgroundColor": "#28da69", "cursor": "pointer" }} className="justify-content-center m-4 mr-6 p-4">
                                    <h3 className={"text-center"} >Cahier de transmission Médical</h3>
                                </Row>
                            </>
                            }
                        </>
                    }
                    {team == "Éducatif" || userReducer.team == "Éducative" &&
                        <>
                            <Row style={{ "backgroundColor": "#61a6fb", "cursor": "pointer" }} className="justify-content-center m-4 mr-6 p-4">
                                <h3 className={"text-center"} >Cahier de transmission éducatif</h3>
                            </Row>
                            <LayoutTransmission team={team} />
                            <Footer />
                        </>
                    }
                    {team == "Médical" || userReducer.team == "Médical" &&
                        <>
                            <Row onClick={handelMedical} style={{ "backgroundColor": "#28da69", "cursor": "pointer" }} className="justify-content-center m-4 mr-6 p-4">
                                <h3 className={"text-center"} >Cahier de transmission Médical</h3>
                            </Row>
                            <LayoutTransmission team={team} />
                            <Footer />
                        </>
                    }
                </>
            }
            { !userReducer.team &&
                <>
                    {team == "Médical" &&
                        <><Row onClick={handelMedical} style={{ "backgroundColor": "#28da69", "cursor": "pointer" }} className="justify-content-center m-4 mr-6 p-4">
                            <h3 className={"text-center"} >Cahier de transmission Médical</h3>
                        </Row>
                            <LayoutTransmission team={team} />
                            <Footer />
                        </>
                    }
                    {team == "Éducatif" &&
                    <>
                        <Row style={{ "backgroundColor": "#61a6fb", "cursor": "pointer" }} className="justify-content-center m-4 mr-6 p-4">
                            <h3 className={"text-center"} >Cahier de transmission éducatif</h3>
                        </Row>
                        <LayoutTransmission team={team} />
                        <Footer />
                    </>    
                    }
                </>

            }


        </>
    );
};

export default Transmission;