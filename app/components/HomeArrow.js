import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './HomeArrow.css';


export default class HomeArrow extends Component {
  render() {
    let bookmarks = this.props.bookmarks
    return (
      <div>
        <Link to="/">
          <div className={styles.container}>
              One Dash
          </div>
        </Link>
      </div>
    );
  }
}