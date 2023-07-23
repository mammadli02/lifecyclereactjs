import React, { Component } from 'react'
import { getMovie } from './service/movie';

export class Lifecycle extends Component {
  constructor(){
    super()
    this.state={
      movies:[]
    }
    this.removeItem=this.removeItem.bind(this)
  }
  componentWillMount(){
    console.log("Mounting");
  }
componentDidMount(){
  getMovie ().then((res)=>{
    return res.json()
  }).then((data)=>{
    this.setState({movies:data.results})
    console.log(data);
  })
}

removeItem(id) {
  // alert("This movie id" + id);

  let newState = this.state.movies.filter((movie) => movie.id !== id);

  this.setState({ movies: newState });
}

  render() {
    return (
    <>
    
    
    
    <div>
        LifePage {this.state.count}
        <ol>
          {this.state.movies?.map(({ original_title, id }) => (
            <li key={id} onClick={() => this.removeItem(id)}>
              {original_title}
            </li>
          ))}
        </ol>
      
      </div>
    
    
    
    
    
    
    
    
    
    </>
    )
  }
}

export default Lifecycle