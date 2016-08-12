import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styles from './WebView.css';
import camelCase from 'camelcase';

const EVENTS = [
  'load-commit',
  'did-finish-load',
  'did-fail-load',
  'did-frame-finish-load',
  'did-start-loading',
  'did-stop-loading',
  'did-get-response-details',
  'did-get-redirect-request',
  'dom-ready',
  'page-title-set',
  'page-favicon-updated',
  'enter-html-full-screen',
  'leave-html-full-screen',
  'console-message',
  'new-window',
  'close',
  'ipc-message',
  'crashed',
  'gpu-crashed',
  'plugin-crashed',
  'destroyed'
];


export default class WebView extends Component {
  constructor(props) {
    super(props);
    this.state = {loaded: false, webview: null};
    console.log(this.state);
  }
  componentDidMount() {
    const node = findDOMNode(this.externalWebsite);
    console.log('node', node);
    this._bindEvents(node);
    // this._assignMethods(node);
    this.setState({loaded: true, webview: node});
    console.log(node);
    this.props.handleLoaded();
  }
  componentDidUpdate() {
    const node = findDOMNode(this.externalWebsite);
    console.log('UPDATE', this.props.loaded);
    // if (!this.props.loaded) {
    //   this.props.handleLoaded();
    // }
    node.removeEventListener('dom-ready', function(){console.log('unloadedloaded')})
    node.addEventListener('dom-ready', this.props.handleLoaded)
  }
  render() {
    let loaded = this.props.loaded;
    console.log('loaded', loaded);
    return (
      <div className={styles.container}>
        <webview
          src={this.props.externalUrl}
          className={(loaded ? styles.webview : styles.hidden)}
          ref={(ref) => this.externalWebsite = ref}
        >
        </webview>
      </div>
    );
  }

  // Private methods
_bindEvents(node) {
  console.log(node);
  EVENTS.forEach(event => {
    console.log('event', event);
    node.addEventListener(event, this.props[camelCase(event)])
  });
}

_assignMethods(node) {
  node.addEventListener('dom-ready', () => {
    console.log('names', Object.getOwnPropertyNames(node));
    Object.getOwnPropertyNames(node)
          .filter(prop => {
            console.log('prop', prop);
            return typeof prop === 'function'
          })
          .forEach(method => {
            console.log('method', method);
            return this[method] = node[method]}
          );
  });
}
}
