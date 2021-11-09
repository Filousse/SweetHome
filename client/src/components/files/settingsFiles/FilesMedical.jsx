import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import WidgetData from "../../dashboard/WidgetData.json";

const FilesMedical = (props) => {
  const data = {...props}
  const history = useHistory();

  const handelFile = (widgetName) => {
      history.push(`/read-file/id=${data.idGuest}/widget=${widgetName}`)
  }

    return (
      <Card.Body style={{"backgroundColor": "#E4FADE"}} >
          <Row className="bg-success color-light rounded  mb-4 p-1 justify-content-center" >
            <h5 className="text-center text-light mt-1">Fiches Médical :</h5>
          </Row>
          {WidgetData.medical.map((widget)=> {
                return(
                  <button onClick={(e)=> {handelFile(widget.name)}} type="button" class="m-1 w-100 btn btn-outline-success">
                  {widget.name}
                  </button>
                )
          })}
        </Card.Body>
    );
};

export default FilesMedical;