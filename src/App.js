import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Favorites from './favorites';
// import star from './images/shooting-star2.gif';
// import Eclipse from './images/API-images/eclipse-logo.png';


class App extends Component {
  constructor() {
    super();
    this.state = {
      image: [ {
        name: "Eagle Nebula",
        image: 'eclipse-logo.png',
        id: 1
    }],
      indexToDisplay: 0,
      favorites: []
    };
    this.incrementPhoto = this.incrementPhoto.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  

  componentDidMount() {
    axios.get('/photos').then(res =>{
      console.log(res.data);
      this.setState({
          image: res.data
        
      })
    })
  }

  getFavorites = () => {
    axios.get('/favorites').then(res => {
      this.setState({ favorites: res.data })
    })
  }

  updateImage() {
    axios.post('/favorites', {photo:this.state.image[this.state.indexToDisplay]}).then(res =>{
      console.log(res.data);
      this.setState({ favorites: res.data })
    })
  }

  incrementPhoto = () => {
    console.log(this.state.indexToDisplay, this.state.image.length)
   if (this.state.indexToDisplay === this.state.image.length-1){
      this.setState({ indexToDisplay:0 })
   }else {
     this.setState({indexToDisplay:this.state.indexToDisplay+1})
   }
  }
  

  render() {
    // console.log('image string', typeof(this.state.image[this.state.indexToDisplay].image));
    return (
      <div className = "body">
        {/* <img src = {star} alt="shooting-star"/> */}
        <header>
          <img src = {require('./images/API-images/eclipse-logo.png')} alt="solarEclipse"/>    
          <div className = "header-title">Eclipse</div><h2>Travel among the Stars</h2>
          <ul>
            <li>Nasa</li>
            <li>My Favorites</li>
            <li>DevMtn</li>
          </ul>
        </header>
        
        <main>
            
        <div className="App">
      
          {/* <img src = {star} alt="shooting-star"/> */}
          {/* <img src = {viewer} alt="solar-gif"/>  */}
          <h1>Celestial Viewer</h1>
          <button onClick = {() => this.incrementPhoto()}>Stargaze</button>
          {/* <p>{this.state.image}</p> */}
          {/* <button onClick = {() => randomId()}>Next Image</button> */}
          <div className = "image-box"><img src = {require(`./images/API-images/${this.state.image[this.state.indexToDisplay].image}`)}alt = "images box"/></div>
          <div className = 'bottomButtons'>
            <button onClick = {() => this.updateImage()}>Update</button>
            
            </div>
            
        </div>
        <div className = 'favorite-images'><Favorites getFavorites={this.getFavorites.bind(this)} favorites={this.state.favorites}/></div>
        </main>
        
        <footer>
          <div>
            <h3>Made by Justin Horton</h3>
          </div>
        </footer>
      
      </div>
      
    );
  }
}

export default App;
