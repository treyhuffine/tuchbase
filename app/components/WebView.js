import React, { Component } from 'react';
import styles from './WebView.css';


export default class WebView extends Component {
  render() {
    return (
      <div className={styles.container}>
        <webview src="https://www.github.com" className={styles.webview}/>
      </div>
    );
  }
}
