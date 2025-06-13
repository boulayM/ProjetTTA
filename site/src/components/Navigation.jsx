import { Link } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown, Image } from "react-bootstrap";

import  {useState, useEffect} from "react";

export default function Navigation() {

  const [users,setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch ("http://localhost:3000/categories");
    const json = await res.json();
    setUsers (json);
  }
  
  useEffect (() => {
    getUsers();
  },[])

  return(
    

            <Navbar collapseOnSelect bg='white' expand="lg" fixed="top" className="shadow-sm">
              <Container>
                <Navbar.Brand as={Link} to ='/'><Image src="logo_tta.png"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto text-uppercase" variant="underline">
                    <NavDropdown title="Artisan" id="basic-nav-dropdown">
                    </NavDropdown>
                    <Nav.Link as={Link} to="/" eventKey="1" id='accueil'>ACCUEIL</Nav.Link>
                      {users.map(user => (
                      <Nav.Link as={Link} to={user.categorie} key = {user.id}>
                      {user.categorie + ' '}
                      </Nav.Link>
                      ))}

                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
    

      
  )
  
}

