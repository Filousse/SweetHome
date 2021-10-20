import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, Col } from 'react-bootstrap';
import ModalChat from "./messaging/ModalChat"


const Widget = (props) => {
  const data = { ...props };
  const history = useHistory();

  const handleWidget = () => {
    if (data.guestWidget) {
      history.push(`/read-file/id=${data.guestId}/widget=${data.widget}`)

    } else history.push(data.route);
  }

  const getClass = (team) => {
    switch (team) {
      case 'Éducative': {
        return {
          "backgroundColor": "rgb(209, 229, 255)",
          "borderColor": "#61a6fb",
          "color": "#61a6fb",
          "cursor": "pointer"
        }
      }
      case 'Médical': {
        return {
          "backgroundColor": "rgb(208, 250, 222)",
          "borderColor": "#28da69",
          "color": "#28da69",
          "cursor": "pointer"
        }
      }
      case '': {
        return {
          "backgroundColor": "rgb(252, 230, 248)",
          "borderColor": "#e826b1",
          "color": "#e826b1",
          "cursor": "pointer"
        }
      }
      case 'guest': {
        return {
          "backgroundColor": "#f5d842",
          "borderColor": "#f0ad4e",
          "color": "#f0ad4e",
          "cursor": "pointer"
        }
      }
      default:
        return {
          "backgroundColor": "rgb(252, 230, 248)",
          "borderColor": "#e826b1",
          "color": "#e826b1",
          "cursor": "pointer"
        }
    }
  }

  return (
    <>
      {!data.userWidget
          ? (
            <Col className="d-flex justify-content-center col-md-3 col-sm-4 col-xs-6" >
            <Card className="widget" style={getClass(data.team)} onClick={handleWidget} >
              <img className="img" src={data.flag} alt="flag" />
              <div className="text-danger">{data.checkRefEduc}{data.checkRefMedical}</div>
              <div className="data-container" >
                <ul style={getClass(data.team)} >
                  <p>{data.name} {data.surname}</p>
                </ul>
              </div>
            </Card>
            </Col>
          ) : (
            <Col className="d-flex justify-content-center col-md-3 col-sm-4 col-xs-6" >
              <ModalChat 
                userId={data.userId}
                name={data.name} 
                surname={data.surname} 
                style={getClass(data.team)}
                team={data.team} 
                src={data.flag} 
              />
            </Col>
        )
      }
      </>

  );
};

export default Widget;