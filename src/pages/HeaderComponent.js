import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HeaderComponent extends Component {



    render(){
        const { title } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">{ title }</NavLink>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movie" className="nav-link active">Movie</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default HeaderComponent;