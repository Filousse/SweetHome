import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Col } from 'react-bootstrap';
import { useSelector } from "react-redux";


const Widget = (props) => {
  const { data } = props;
  const history = useHistory();
  const userdata = useSelector(state => state.userReducer);

  const handleWidget = ()=> {
    history.push('/'+data.name)
  }

  const getClass = (team) =>{
    switch(team){
        case 'Éducative': {
            return {
              "backgroundColor": "rgb(209, 229, 255)",
              "borderColor": "#61a6fb",
              "color": "#61a6fb",
              "cursor":"pointer"
            }
        }
        case 'Médical': {
            return  {
              "backgroundColor": "rgb(208, 250, 222)",
              "borderColor": "#28da69",
              "color": "#28da69",
              "cursor":"pointer"
            }
        }
        case '': {
            return  {
              "backgroundColor": "rgb(252, 230, 248)",
              "borderColor": "#e826b1",
              "color": "#e826b1",
              "cursor":"pointer"
            }
        }
        default:
        return  {
          "backgroundColor": "rgb(252, 230, 248)", 
          "borderColor": "#e826b1",
          "color": "#e826b1",
          "cursor":"pointer" 
        }
    }
}

  return (
    <Col className="d-flex justify-content-center col-md-3 col-sm-4 col-xs-6" >
    <Card className="widget" style={getClass(userdata.team)}  onClick={handleWidget} >
      <img className="img" src={data.flag} alt="flag" />
      <div className="data-container" >
        <ul style={getClass(userdata.team)} >
          <p>{data.name}</p>
        </ul>
      </div>
    </Card>
    </Col>
  );
};

export default Widget;