import React, { Component } from 'react';
import Website from '../components/Website';

export default class WebsitePage extends Component {
  render() {
    return (
      <Website
        externalUrl={this.props.params.bookmarkUrl}
      />
    );
  }
}
