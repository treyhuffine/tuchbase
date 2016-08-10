import React, { Component } from 'react';
// import SideMenuItem from './SideMenuItem.jsx';
import styles from './SideMenu.css';
import { Link } from 'react-router';


export default class SideMenu extends Component {
  render() {
    return (
      <ul className={styles.SideMenu}>
        <Link to="/">
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </ul>
    );
  }
}
