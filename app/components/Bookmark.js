import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Bookmark.css';


export default class Bookmark extends Component {
  render() {
    let {name, urlList} = this.props.bookmark;
    let url = encodeURIComponent(urlList[0]);
    console.log(name, urlList);
    return (
      <Link to={`/bookmark/${url}`}>
        <li onClick={this.props.handlePageChanged}>
          {name}
        </li>
      </Link>
    );
  }
};
