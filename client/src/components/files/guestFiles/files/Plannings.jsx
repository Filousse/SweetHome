import React, { useState } from 'react';
import { Row, Table, Form } from "react-bootstrap"

const Plannings = (props) => {
    const showUpdate = props.showUpdate;

    const [lundiMatin, setLundiMatin] = useState("9H Piscine  - 11 kinésithérapie")
    const [lundiAM, setLundiAM] = useState("14H Randonnée  -  15H cuisine")
    const [mardiMatin, setMardiMatin] = useState("9H Velo  - 11H Relaxation")
    const [mardiAM, setMardiAM] = useState("14H Randonnée  - 15H cuisine")
    const [mercrediMatin, setMercrediMatin] = useState("10H Poney")
    const [mercrediAM, setMercrediAM] = useState("13H Calcul  - 15H cuisine")
    const [jeudiMatin, setJeudiMatin] = useState("9h30 Conte et Théâtre")
    const [jeudiAM, setJeudiAM] = useState("14H Aprentissage bus  - 15H Psychologue")
    const [vendrediMatin, setVendrediMatin] = useState()
    const [vendrediAM, setVendrediAM] = useState("14h Kinéthérapie - 15h30 Velo")

    return (
        <Row className="m-4 p-2"  style={{overflow:"scroll"}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th style={{width: 80}}>Jours</th>
                        <th style={{textAlign:"center"}}>Matin (9H/12H)</th>
                        <th style={{width: 50}}>Repas</th>
                        <th style={{textAlign:"center"}}>Après-midi (9h/16H)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{height: 200}}>
                        <td style={{paddingTop: "40px"}}>Lundi</td>
                        {!showUpdate 
                        ? (
                            <td ><Form.Control value={lundiMatin} onChange={(e)=>{setLundiMatin(e.target.value)}} className="w-75 m-0 p-0" as="textarea"  placeholder="Editer un text informatif..." style={{ height: '180px' }} /></td>
                        ):(
                            <td style={{textAlign: "center", padding: "40px"}} >{lundiMatin}</td>
                        )}
                        <td style={{paddingTop: "40px"}}>Externat</td>
                        {!showUpdate 
                        ? (
                            <td ><Form.Control value={lundiAM} onChange={(e)=>{setLundiAM(e.target.value)}} className="w-75 m-0 p-0" as="textarea"  placeholder="Editer un text informatif..." style={{ height: '180px' }} /></td>
                        ):(
                            <td style={{textAlign: "center", padding: "40px"}} >{lundiAM}</td>
                        )}
                    </tr>
                    <tr style={{height: 200}}>
                        <td style={{paddingTop: "40px"}}>Mardi</td>
                        {!showUpdate 
                        ? (
                            <td ><Form.Control value={mardiMatin} onChange={(e)=>{setMardiMatin(e.target.value)}} className="w-75 m-0 p-0" as="textarea"  placeholder="Editer un text informatif..." style={{ height: '180px' }} /></td>
                        ):(
                            <td style={{textAlign: "center", padding: "40px"}} >{mardiMatin}</td>
                        )}
                        <td style={{paddingTop: "40px"}}>Externat</td>
                        {!showUpdate 
                        ? (
                            <td ><Form.Control value={mardiAM} onChange={(e)=>{setMardiAM(e.target.value)}} className="w-75 m-0 p-0" as="textarea"  placeholder="Editer un text informatif..." style={{ height: '180px' }} /></td>
                        ):(
                            <td style={{textAlign: "center", padding: "40px"}} >{mardiAM}</td>
                        )}
                    </tr>
                    <tr style={{height: 200}}>
                        <td style={{paddingTop: "40px"}}>Mercredi</td>
                        {!showUpdate 
                        ? (
                            <td ><Form.Control value={mercrediMatin} onChange={(e)=>{setMercrediMatin(e.target.value)}} className="w-75 m-0 p-0" as="textarea"  placeholder="Editer un text informatif..." style={{ height: '180px' }} /></td>
                        ):(
                            <td style={{textAlign: "center", padding: "40px"}} >{mercrediMatin} </td>
                        )}
                        <td style={{paddingTop: "40px"}}>Externat</td>
                        {!showUpdate 
                        ? (
                            <td ><Form.Control value={mercrediAM} onChange={(e)=>{setMercrediAM(e.target.value)}} className="w-75 m-0 p-0" as="textarea"  placeholder="Editer un text informatif..." style={{ height: '180px' }} /></td>
                        ):(
                            <td style={{textAlign: "center", padding: "40px"}} >{mercrediAM}</td>
                        )}
                    </tr>
                    <tr style={{height: 200}}>
                        <td style={{paddingTop: "40px"}}>Jeudi</td>
                        {!showUpdate 
                        ? (
                            <td ><Form.Control value={jeudiMatin} onChange={(e)=>{setJeudiMatin(e.target.value)}} className="w-75 m-0 p-0" as="textarea"  placeholder="Editer un text informatif..." style={{ height: '180px' }} /></td>
                        ):(
                            <td style={{textAlign: "center", padding: "40px"}} >{jeudiMatin}</td>
                        )}
                        <td style={{paddingTop: "40px"}}>Externat</td>
                        {!showUpdate 
                        ? (
                            <td ><Form.Control value={jeudiAM} onChange={(e)=>{setJeudiAM(e.target.value)}} className="w-75 m-0 p-0" as="textarea"  placeholder="Editer un text informatif..." style={{ height: '180px' }} /></td>
                        ):(
                            <td style={{textAlign: "center", padding: "40px"}} >{jeudiAM}</td>
                        )}
                    </tr>
                    <tr style={{height: 200}}>
                        <td style={{paddingTop: "40px"}}>Vendredi</td>
                        {!showUpdate 
                        ? (
                            <td ><Form.Control  value={vendrediMatin} onChange={(e)=>{setVendrediMatin(e.target.value)}} className="w-75 m-0 p-0" as="textarea"  placeholder="Editer un text informatif..." style={{ height: '180px' }} /></td>
                        ):(
                            <td style={{textAlign: "center", padding: "40px"}} >{vendrediAM}</td>
                        )}
                        <td style={{paddingTop: "40px"}}>Externat</td>
                        {!showUpdate 
                        ? (
                            <td ><Form.Control value={vendrediAM} onChange={(e)=>{setVendrediAM(e.target.value)}} className="w-75 m-0 p-0" as="textarea"  placeholder="Editer un text informatif..." style={{ height: '180px' }} /></td>
                        ):(
                            <td style={{textAlign: "center", padding: "40px"}} >{vendrediAM}</td>
                        )}
                    </tr>
                </tbody>
            </Table>
        </Row>
    );
};

export default Plannings;