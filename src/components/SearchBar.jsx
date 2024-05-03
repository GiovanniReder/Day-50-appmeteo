import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const SearchBar = () => {
  return (
    <>
      <div className="d-flex my-5 ">
        <Form.Control placeholder="Cerca la tua città" type="text" />
        <Button className="text-white meteoCard border border-0 ms-2">Cerca</Button>{" "}
      </div>
    </>
  );
};

export default SearchBar;
