
import React, { Component } from 'react';
import styles from './css/MovieComponent.module.css';
import ERRORS from '../tools/BusinessError';
import END_POINT from '../tools/Url';

const CardMovieComponent = ({ movie }) => {
    return(
      <div className="container mt-3" >
        <div className="card">
            <div className="card-header">
                <h3>{ movie.Title ? movie.Title : 'No exist title' }</h3>
            </div>
            <div className="card-body">
              <p> { movie.Plot ? movie.Plot : 'No exist plot' } </p>
              {
                movie.Poster && (
                  <img src={ movie.Poster } alt='Poster' className= { styles.componentImg }/>
                )
              }
            </div>
        </div>
      </div>
    )
}


class MovieComponent extends Component {
    state = {
        movie: {},
        show: false
      }
    
      handleSubmit = async (event) => {
        event.preventDefault()
        const title = event.target[0].value
        const url = END_POINT.API_MOVIE;
        let flagEmpty = false;

        if(title !== ''){
          try {
            const response = await fetch(url + '&t=' + title)
            const movie = await response.json();
            if(movie.Response === 'True'){
              this.setState({ movie, show: true })
            }else{
              flagEmpty = true;
            }
            
          } catch (error) {
            console.log(ERRORS.CONEXION_ERROR, error);
          }
        }
        
        if(flagEmpty){
          this.setState({ movie: {}, show: false })
        }
      }
    
      render () {
        const { movie } = this.state
    
    
        return (
          <div className="container m-5">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Search Movie</label>
                <input
                  type="text"
                  placeholder='Search Movie'
                  className="form-control"
                />
              </div>
              <button className="btn btn-outline-success">
                Search
              </button>
            </form>
            {
              this.state.show && ( <CardMovieComponent  movie={ movie } /> )
            }
          </div>
        )
      }

}


export default MovieComponent;