import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Router, Link} from 'react-router';
import history from '../constants/History';

const ACTIVE = {active: 'active'};
//TODO: 
export default class NavigationBar extends React.Component {


  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Spotify Project</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <a href="#"><span>A </span></a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li role="presentation"><Link to="/artists" activeStyle={ACTIVE}>Artists</Link></li>
              <li role="presentation"><Link to="/albums" activeStyle={ACTIVE}>Albums</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
