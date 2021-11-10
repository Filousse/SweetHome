import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Image } from 'react-bootstrap';
import { switchColorWidget } from "../Utils"

const Widget = (props) => {
  const data = { ...props };
  const history = useHistory();

  const handleWidget = () => {
    if (data.guestWidget) {
      history.push(`/read-file/id=${data.guestId}/widget=${data.widget}`)

    } else history.push(data.route);
  }

  return (
            <Card className="widget" style={switchColorWidget(data.team)} onClick={handleWidget} >
              <Image className="image" src={data.flag} alt="flag" />
              <div className="data-container" >
                <ul style={switchColorWidget(data.team)} >
                  <p>{data.name} {data.surname}</p>
                </ul>
              </div>
            </Card>
  );
};

export default Widget;