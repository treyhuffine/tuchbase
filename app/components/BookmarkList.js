import React, { Component } from 'react';
import { Link } from 'react-router';
// import styles from './Home.css';
import Bookmark from './Bookmark';


export default class BookmarkList extends Component {
  render() {
    let bookmarks = this.props.bookmarks
    return (
      <ul>
        {bookmarks.map((bookmark, idx) =>
          <Bookmark key={idx}
            bookmark={bookmark}
            handlePageChanged={this.props.handlePageChanged}
          />
        )}
      </ul>
    );
  }
}