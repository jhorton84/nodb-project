import React, {Component} from 'react';
import axios from 'axios';
import "./App.css";

//state = replaces the constructor and super as a shortcut
export default class Favorites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favorites: this.props.favorites
        }
    }
    
    deleteImage(id){
        axios.delete(`/favorites/${id}`).then(res =>{
            console.log(res.data);
            this.setState({ favorites: res.data })
          }, this.props.getFavorites())
    }

    // componentDidMount() {
    //     axios.get('/favorites').then(res =>{
    //         console.log(res.data);
    //         this.setState({
    //             favorites: res.data
              
    //         })
    //       })
    //     }
    
    render() {
        console.log('state ======', this.state)
        console.log('props ======', this.props)
        return(
            this.props.favorites.map(e => {
                return <div>
                    <div className = "favorite-images"><img src = {require(`./images/API-images/${e.image}`)}alt= "fav Images"/></div>
                    <button onClick = {() => this.deleteImage(e.id)}>Delete</button>

                </div>
            })
        )   
    }
}

