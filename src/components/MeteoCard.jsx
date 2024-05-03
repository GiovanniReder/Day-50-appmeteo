import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "../App.css";
import { CardText } from "react-bootstrap";
const MeteoCard = () => {
  const [meteo, setMeteo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?lat=45.0702306&lon=7.5876881&units=metric&appid=0723d840e65f96fe1c8a7878d311bb37"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.cod !== 200) {
          throw new Error(data.message || "Unknown error");
        }

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
      <Card className="meteoCard  text-light " style={{ width: "100%" }}>
        {/* {meteo && (
          <Card.Body className="text-center">
            <Card.Title>
              <img src={`https://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png`} alt="" />
            </Card.Title>
            <Card.Text>{meteo.main.temp}&deg; C</Card.Text>
            <Card.Text>{meteo.weather.description}</Card.Text>
            <CardText>{meteo.name}</CardText>
            <CardText>Today</CardText>
            <CardText>Humidity: {meteo.main.humidity} %</CardText>
            <CardText>Wind Speed: {meteo.wind.speed} km/h</CardText>
          </Card.Body>
        )}
        <Card.Body className="text-center"></Card.Body> */}
        <p>culo</p>
        <p>culo</p>
        <p>culo</p>
        <p>culo</p>
        <p>culo</p>
      </Card>
    </>
  );
};

export default MeteoCard;
