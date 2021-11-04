import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import WidgetData from "../../dashboard/WidgetData.json";

const FilesMix = (props) => {
  const data = {...props}
  const history = useHistory();

  const handelFile = () => {
      history.push(`/read-file/id=${data.idGuest}/widget=Information générale`)
  }

    return (
        <Card.Body style={{ backgroundColor: "#FCE6F8" }}>
          <Row className="bg-danger color-light rounded  mb-4 p-1 justify-content-center" >
          <h5 className="mt-1 text-light text-center" >Fiches éducatives et médicales :</h5>
          </Row>
                  <button onClick={handelFile} type="button" class="m-1 w-100 btn btn-outline-danger">
                  Information générale
                  </button>
        </Card.Body>
    );
};

export default FilesMix;