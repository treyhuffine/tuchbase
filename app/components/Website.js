import React, { Component } from 'react';
import SideMenu from './SideMenu';
import WebView from './WebView';
import styles from './Website.css';
import LoadSpinner from './LoadSpinner';

export default class Website extends Component {
  constructor(props) {
    super(props);
    this.state = {loaded: false};
    this.handleLoaded = this.handleLoaded.bind(this);
    this.handlePageChanged = this.handlePageChanged.bind(this);
  }
  handlePageChanged() {
    console.log('****************************** unloaded');
    this.setState({loaded: false})
  }
  handleLoaded() {
    console.log('############################## reloaded');
    this.setState({loaded: true});
  }
  render() {
    console.log(this.props);
    return (
      <div className={styles.container}>
        <SideMenu handlePageChanged={this.handlePageChanged} />
        <LoadSpinner loaded={this.state.loaded} />
        <WebView
          externalUrl={this.props.externalUrl}
          handleLoaded={this.handleLoaded}
          loaded={this.state.loaded}
        />
      </div>
    );
  }
}
