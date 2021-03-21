import React from 'react'
import {Form,Nav,Navbar,Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Welcome(){
    return(
        <>
         <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Fitness Freak</Navbar.Brand>
    <Nav className="mr-auto">
    <Link to="/" className="btn btn-info w-40">
    Home
  </Link>
    </Nav>
    <Form inline>
    <Link to="/signup" className="btn btn-dark w-40">
    Sign Up
  </Link>
  <Link to="/login" className="btn btn-dark w-40">
    Log In
  </Link>
    </Form>
  </Navbar>
  <div className="jumbotron-fluid text-center jumbotron-light">    
  <div className="row content">
    <div className="col-sm-2 sidenav">
    </div>
    <div className="col-sm-8 text-left"> 
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <h1>Welcome To Fitness Freak</h1>
      
      <hr/>
      <p>Wanna be fit and healthy?</p>
      <Link to="/login" className="btn btn-primary w-40" style={{marginRight:"0"}}>
    Get Started
  </Link>
    </div>
    <div className="col-sm-2 sidenav">
      <div class="well">
      </div>
      <div className="well">
      </div>
    </div>
  </div>
</div>
        </>
    )
}