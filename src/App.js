import React from 'react';
import filmApi from '../src/api/GhibliFilms';

import FilmCards from './components/FilmCards';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    
    state = {films: []};
    
    componentDidMount = async () => {
        const response = await filmApi.get();
        this.setState({films: response.data});
    }

    render() {
        return (
            <div className="App">
                <div className="ui container">
                    <div className="ui header">{this.state.films.length} films in total.</div>
                    <FilmCards films={this.state.films}></FilmCards>
                </div>
            </div>
        );
    }
    
}

export default App;
