import React, { Component } from 'react';

class HomeComponent extends Component {

    render(){
        return (
            <div className="jumbotron mt-5">
                <h1 className="display-4">Hello, welcome
                    <span className="text-danger"> First page </span>!
                </h1>
                <p className="lead">
                    This a example text.
                </p>
                <hr className="my-4" />
                <p>
                    You can use this content, since one ago.... 
                </p>
                <p className="lead">
                    <a className="btn btn-success btn-sm" href="https://reactnative.dev/" role="button">Learn more</a>
                </p>
            </div>
        )
    }

}

export default HomeComponent;