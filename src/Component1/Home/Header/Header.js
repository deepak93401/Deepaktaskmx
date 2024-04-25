import React from 'react'
import "./Header.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from '../Card/Card';



function Header() {
    return (
        <>
            {/* Header Section Start */}
            <header>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            {/*  Navbar start */}
                            {['lg'].map((expand) => (
                                <Navbar key={expand} expand={expand} className="pt-3">
                                    <Container fluid>
                                        <Navbar.Brand href="#">
                                            {/* <img src={Logo}></img> */}
                                            BrainlyLingo</Navbar.Brand>
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
                                                <Form className="d-flex justify-content-center align-items-center">

                                                    <Button>Login</Button>
                                                </Form>
                                            </Offcanvas.Body>
                                        </Navbar.Offcanvas>
                                    </Container>
                                </Navbar>
                            ))}




                        </div>
                    </div>


                </div>

                {/* banner */}
                <div className='banner'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className='text-white text-center mt-5 '>Science Friction Technology </h2>
                            <div className=' button-sec d-flex justify-content-around align-items-center mt-5 px-5'>
                                <button className='btn1'>New</button>
                                <button className='btn2'>In Progress</button>
                                <button className='btn3'>Completed</button>
                                <button className='btn4'>Clear All</button>
                            </div>

                        </div>
                    </div>
                </div>


                {/* Wave section */}

                <div className='row'>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave'>
                        <path fill="#020024" fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,80C384,75,480,117,576,154.7C672,192,768,224,864,229.3C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>

                

                 {/* card section */}

                     <Card/>
                



            </header>


        </>
    )
}

export default Header