import React from 'react';

class FilmCards extends React.Component {

    render() {
        return (
            <div className="ui link cards">
                {this.props.films.map((film) => {
                    return (
                        <div className="card">
                            <div className="content">
                            <div className="header">{film.title}</div>
                            <div className="meta">
                                <a>Director {film.director}</a> <br />
                                <a>Producer {film.producer}</a>
                            </div>
                            <div className="description">
                                {film.description}
                            </div>
                            </div>
                            <div className="extra content">
                            <span className="right floated">
                                Release in {film.release_date}
                            </span>
                            <span>
                                <i className="user icon"></i>
                                {film.rt_score} Score
                            </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
    
}

export default FilmCards;