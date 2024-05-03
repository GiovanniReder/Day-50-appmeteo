import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NextDays = () => {
  const [meteo, setMeteo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/forecast?lat=45.0702306&lon=7.5876881&units=metric&appid=0723d840e65f96fe1c8a7878d311bb37"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMeteo(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  console.log(meteo);
  console.log(error);

  return (
    <>
      {meteo && (
        <>
          <Container>
            <Row>
              {/* <Col xs={12} md={2}>
                <Card className="text-center m-5" style={{ width: "100%" }}>
                  <Card.Header>{meteo.list[6].dt_txt}</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>{meteo.list[6].weather.main}</ListGroup.Item>
                    <ListGroup.Item>{meteo.list[6].main.temp}&deg; C</ListGroup.Item>
                    <ListGroup.Item>
                      <div>
                        <ListGroup.Item>Wind:{meteo.list[6].wind.speed} km/h</ListGroup.Item>
                        <ListGroup.Item>Humidity: {meteo.list[6].main.humidity} %</ListGroup.Item>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              <Col xs={12} md={2}>
                <Card className="text-center m-5" style={{ width: "100%" }}>
                  <Card.Header>{meteo.list[14].dt_txt}</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>{meteo.list[14].weather.main}</ListGroup.Item>
                    <ListGroup.Item>{meteo.list[14].main.temp}&deg; C</ListGroup.Item>
                    <ListGroup.Item>
                      <div>
                        <ListGroup.Item>Wind:{meteo.list[14].wind.speed} km/h</ListGroup.Item>
                        <ListGroup.Item>Humidity: {meteo.list[14].main.humidity} %</ListGroup.Item>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              <Col xs={12} md={2}>
                <Card className="text-center m-5" style={{ width: "100%" }}>
                  <Card.Header>{meteo.list[22].dt_txt}</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>{meteo.list[22].weather.main}</ListGroup.Item>
                    <ListGroup.Item>{meteo.list[22].main.temp}&deg; C</ListGroup.Item>
                    <ListGroup.Item>
                      <div>
                        <ListGroup.Item>Wind:{meteo.list[22].wind.speed}km/h</ListGroup.Item>
                        <ListGroup.Item>Humidity: {meteo.list[22].main.humidity} %</ListGroup.Item>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              <Col xs={12} md={2}>
                <Card className="text-center m-5" style={{ width: "100%" }}>
                  <Card.Header>{meteo.list[30].dt_txt}</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>{meteo.list[30].weather.main}</ListGroup.Item>
                    <ListGroup.Item>{meteo.list[30].main.temp}&deg; C</ListGroup.Item>
                    <ListGroup.Item>
                      <div>
                        <ListGroup.Item>Wind:{meteo.list[30].wind.speed} km/h</ListGroup.Item>
                        <ListGroup.Item>Humidity: {meteo.list[30].main.humidity} %</ListGroup.Item>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              <Col xs={12} md={2}>
                <Card className="text-center m-5" style={{ width: "100%" }}>
                  <Card.Header>{meteo.list[38].dt_txt}</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>{meteo.list[38].weather.main}</ListGroup.Item>
                    <ListGroup.Item>{meteo.list[38].main.temp}&deg; C</ListGroup.Item>
                    <ListGroup.Item>
                      <div>
                        <ListGroup.Item>Wind: {meteo.list[38].wind.speed} km/h</ListGroup.Item>
                        <ListGroup.Item>Humidity: {meteo.list[38].main.humidity} %</ListGroup.Item>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              <Col xs={12} md={2}>
                <Card className="text-center m-5" style={{ width: "100%" }}>
                  <Card.Header>{meteo.list[38].dt_txt}</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>{meteo.list[38].weather.main}</ListGroup.Item>
                    <ListGroup.Item>{meteo.list[38].main.temp}&deg; C</ListGroup.Item>
                    <ListGroup.Item>
                      <div>
                        <ListGroup.Item>Wind: {meteo.list[38].wind.speed} km/h</ListGroup.Item>
                        <ListGroup.Item>Humidity: {meteo.list[38].main.humidity} %</ListGroup.Item>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col> */}
              <Col>
                <p>1</p>
              </Col>
              <Col>
                <p>1</p>
              </Col>
              <Col>
                <p>1</p>
              </Col>
              <Col>
                <p>1</p>
              </Col>
              <Col>
                <p>1</p>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default NextDays;
