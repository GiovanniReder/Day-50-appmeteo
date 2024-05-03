import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../logo.jpg";
const SearchBar = () => {
  return (
    <>
      <h1 className="text-center  my-4">Welcome to EPIMETEO</h1>
      <div className="d-flex justify-content-center">
        <img src={logo} className="logo mx-auto" alt="" />
      </div>
      <div className="d-flex m-5 ">
        <Form.Control placeholder="Cerca la tua città" type="text" />
        <Button className="text-white meteoCard border border-0 ms-2">Cerca</Button>{" "}
      </div>
    </>
  );
};

export default SearchBar;
