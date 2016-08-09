import React, { Component } from 'react';
import GitHub from '../components/GitHub';

export default class GitHubPage extends Component {
  render() {
    return (
      <GitHub
        menuList={"test"}
        externalUrl={"https://www.github.com"}
      />
    );
  }
}
