import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import WidgetData from "../../dashboard/WidgetData.json";

const FilesEduc = (props) => {
  const propsData = {...props}
  const history = useHistory();

  const handelFile = (widgetName) => {
      history.push(`/read-file/id=${propsData.idGuest}/widget=${widgetName}`)
  }
  
    return (
        <Card.Body style={{"backgroundColor": "#D1E5FF"}} >
          <Row className="bg-primary color-light rounded  mb-4 p-1 justify-content-center" >
          <h5 className="mt-1 text-light">Fiches √©ducatives :</h5>
          </Row>
          {WidgetData.educative.map((widget)=> {
                return(
                  <button onClick={(e)=> {handelFile(widget.name)}} type="button" class="m-1 w-100 btn btn-outline-primary">
                  {widget.name}
                  </button>
                )
          })}
        </Card.Body>
    );
};

export default FilesEduc;