import React from 'react'
import { Container, Row, Card, Col, Image } from "react-bootstrap"

const HomeWidget = () => {
  return (
    <Container className="pl-1 pt-4"fluid style={{ "backgroundColor": "rgb(209, 229, 255)", "height": "100%", "paddingBottom": 20, "paddingTop": 20 }}>
      <Row className="mt-4 pt-4">
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/home_Car.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/home_Family.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/home_Game.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/home_Holiday.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/home_Key.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/home_laundry.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/home_Money.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/home_Reunion.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/home_School.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/widget_Meal.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/widget_EmergencyCall.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/widget_Hygiene.png" alt="flag" />
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-betwen">
        <Col xs={3} sm={3} md={2} lg={1}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/widget_Information.png" alt="flag" />
          </Card>
        </Col>
        <Col xs={6} sm={6} md={8} lg={10} className=" d-block  d-xs-none" >
        <h5 className="p-1 text-center bg-light p-2" style={{"borderRadius": 30}}>Créons à la demande les outils qui vous ressemblent !</h5>
        </Col>
        <Col xs={3} sm={3} md={2} lg={1}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/widget_MaterialMedical.png" alt="flag" />
          </Card>
        </Col>
        <Col md={4}  lg={1} className="d-none d-xs-block">
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/home_Urgency.png" alt="flag" />
          </Card>
        </Col>
        <Col md={2} lg={1}  className="d-none d-xs-block">
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/widget_MediaFil.png" alt="flag" />
          </Card>
        </Col>
        <Col  md={2} lg={1} className="d-none d-xs-block">
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/widget_Medicament.png" alt="flag" />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/widget_Needs.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/widget_Picto.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/widget_Planning.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/widget_Transmission.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/widget_Turnover.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/home_Bike.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/home_Handicap.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/home_Library.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/home_Music.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/home_Sports.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/home_Tickets.png" alt="flag" />
          </Card>
        </Col>
        <Col lg={1} md={2} xs={3}>
          <Card className="homeWidget"  >
            <img className="homeImg" src="./assets/icon/widget_Medicament.png" alt="flag" />
          </Card>
        </Col>
      </Row>
      <Row>

        <Col className="p-4 m-4 ml-2 justify-content-center" md={5} xs={12}>
          <p className="text-justify" style={{"fontSize": 22}} >Avec le développement des organisations agiles, l’accélération du rythme des projets et des dossiers a geré, il est impossible même avec des années d’expérience de tout savoir et de tout savoir-faire. En revanche, <strong className="text-danger">en réunissant l’équipe autour d'un outil commun responsabilisant chaque acteur, vous avez plus de chances d’atteindre vos objectifs.</strong> "Sweet Home" permet de répartir les tâches en fonction des compétences de chacun en harmonisant le travail de tous les collaborateurs. Par conséquent, chacun peut se consacrer pleinement à sa mission, ce qui permet d’avoir une équipe plus efficace et harmonisé.</p>
        </Col>
        <Col md={6} xs={12}>
          <Image  className="w-100" src="./assets/img/services_coordination.png" alt="launchpad" />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeWidget;