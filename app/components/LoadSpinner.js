import React, { Component } from 'react';
import styles from './LoadSpinner.css';

export default class WebView extends Component {
  render() {
    return (
      <div className={this.props.loaded ? styles.hidden : styles.FullWidth}>
        <div className={styles.container}>
          <div className={styles.PageCenter}>
            <i className={"fa fa-spinner fa-spin fa-3x fa-fw " + styles.LoadSpinner}></i>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
}
