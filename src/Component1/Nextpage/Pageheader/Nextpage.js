import React from 'react'
import "./Nextpage.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nextpagesec from '../Nextpagesection/Nextpagesec';

function Nextpage() {
  return (
    <>

    <section id='Next'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>


              {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className="">
                  <Container fluid>
                    <Navbar.Brand href="#">BrainlyLingo</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav className="justify-content-center align-items-center  flex-grow-1 gap-3">
                          <Nav.Link href="#action1">Home</Nav.Link>
                          <Nav.Link href="#action2">Landguard</Nav.Link>
                          <Nav.Link href="#action2">Daily quiat</Nav.Link>

                          <NavDropdown
                            title="Genre"
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                          >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                              action1
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                              action2
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Nav>
                        <Form className="d-flex justify-content-center  align-items-center  mb-3">

                          <Button>Login</Button>
                        </Form>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Container>
                </Navbar>
              ))}



            </div>
            <div className='col-md-12'>
              <div className='Next-div py-5 '>
                  <h2 ><span>The Lost City</span> of Future Earth</h2>
              </div>
            </div>
            
          </div>
        </div>


      </section>

      <Nextpagesec/>
      




           

      

      
  
    </>
  )
}

export default Nextpage