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
              <img src="static/img/mini-1.png" className={styles.OneImg} />
              <span className={styles.DashText}>Dash</span>
          </div>
        </Link>
      </div>
    );
  }
}