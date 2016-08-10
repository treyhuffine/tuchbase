import React, { Component } from 'react';
import { Link } from 'react-router';
// import styles from './Home.css';


export default class Bookmark extends Component {
  render() {
    let {name, urlList} = this.props.bookmark;
    let url = encodeURIComponent(urlList[0]);
    console.log(name, urlList);
    return (
      <li>
        <Link to={`/bookmark/${url}`}>{name}</Link>
      </li>
    );
  }
};
