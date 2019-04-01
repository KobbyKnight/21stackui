import React, { Component } from 'react';
import './nav.css';

class NavBar extends Component {
  render() {
    return (        
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">                          
                <div className="navbar-header">
                <a className="navbar-brand" href="1">Softnet</a>
                </div> 
                <ul className="nav navbar-nav">
                <li className="active"><a href="1">Home</a></li>
                <li><a href="1">Page 1</a></li>
                <li><a href="1">Page 2</a></li>
                </ul>
            </div>
        </nav>        
    );
  }
}

export default NavBar;
