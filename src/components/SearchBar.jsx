import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../logo.jpg";
const handleSubmit = (e) => {
  e.preventDefault();
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=torino&limit=1&appid=0723d840e65f96fe1c8a7878d311bb37`);
};
const SearchBar = () => {
  return (
    <>
      <h1 className="text-center  my-4">Welcome to EPIMETEO</h1>
      <div className="d-flex justify-content-center">
        <img src={logo} className="logo mx-auto" alt="" />
      </div>
      <div className="my-5 d-flex justify-content-center ">
        <Form style={{ width: "50%" }} className="d-flex">
          <Form.Control placeholder="Cerca la tua città" type="text" />
          <Button className="text-white meteoCard border border-0 ms-2">Cerca</Button>{" "}
        </Form>
      </div>
    </>
  );
};

export default SearchBar;
