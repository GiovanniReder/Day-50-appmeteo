import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./SearchBar";
const MyNavbar = () => {
  return (
    <>
      <Navbar className="MyNavbar">
        <Container>
          <Navbar.Brand className="text-white" href="/MeteoCard">
            Home
          </Navbar.Brand>
          <SearchBar />
          <Navbar.Brand className="text-white" href="/NextDays">
            Next Days
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
