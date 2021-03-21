import React, {Component} from 'react';
import {storage} from '../firebase';
import {Navbar,Nav} from "react-bootstrap"
import { Link} from "react-router-dom"
import Displaytips from './Displaytips'
import 'bootstrap/dist/css/bootstrap.min.css';

class Healthtips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
        console.log(error);
      }, 
    () => {
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    });
  }
  render() {
    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
        <>
         <Navbar bg="dark" variant="dark">
    <Navbar.Brand href=""></Navbar.Brand>
      <Nav className="mr-auto">
      <Link to="/dashboard" className="btn btn-info w-40">
            Back To Dashboard
          </Link>
          </Nav>
    </Navbar>
    <Displaytips></Displaytips>
    <div className="container">
      <div style={style}>
      <progress value={this.state.progress} max="100"/>
      <br/>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
        <br/>
        <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
      </div>
      </div>
        </>
    )
  }
}

export default Healthtips;