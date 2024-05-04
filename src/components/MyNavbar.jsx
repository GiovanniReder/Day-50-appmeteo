import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const MyNavbar = () => {
  return (
    <>
      <Navbar className="MyNavbar">
        <Container>
          <Navbar.Brand className="text-white" href="/">
            Home
          </Navbar.Brand>

          <Navbar.Brand className="text-white" href="NextDays">
            Weather
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
