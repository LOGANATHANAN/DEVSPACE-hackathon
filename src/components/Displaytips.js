import React,{Component} from "react";
import {storage} from "../firebase";

class Displaytips extends Component {

constructor() {
    super();
    this.state = {images: []};

     this.getImage();}

getImage() {

let { state } = this;

var listRef = storage.ref().child("/images");

listRef.listAll().then(function(res) {

state.images = res.items;
state.downloadURLs = {};
this.setState(state);

res.items.forEach(function(itemRef) {itemRef.getDownloadURL().then(url => {

state.downloadURLs[itemRef.name] = url;
state.downloadURLs.push(url);this.setState(state);

});

});

})

.catch(function(error) {

// Uh-oh, an error occurred!

});

}

render() {

let images = this.state.images;

return (

<div>
    <ul>

{Object.keys(images).map((image, index) => (

<li key={index}>{image} : {images[image]}</li>

))}

</ul>

</div>

);

}

}

export default Displaytips;