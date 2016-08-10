import React, { Component } from 'react';
import SideMenu from './SideMenu';
import WebView from './WebView';
import styles from './GitHub.css';


export default class GitHub extends Component {
  render() {
    return (
        <div className={styles.container}>
          <SideMenu menuList={this.props.menuList} />
          <WebView externalUrl={this.props.url} />
        </div>
    );
  }
}
