import React, { Component } from 'react';
// import SideMenuItem from './SideMenuItem.jsx';
import BookmarkList from './BookmarkList';
import styles from './SideMenu.css';
import { Link } from 'react-router';


export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    const bookmarks = [
      {'name': 'Social', urlList: ['https://www.facebook.com']},
      {'name': 'Entertainment', urlList: ['https://www.netflix.com']},
      {'name': 'News', urlList: ['http://www.cnn.com']},
      {'name': 'Sports', urlList: ['https://www.espn.com']}
    ];
    this.state = {
      bookmarks
    };
  }
  render() {
    return (
      <ul className={styles.SideMenu}>
        <Link to="/">
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
        <BookmarkList
          bookmarks={this.state.bookmarks}
          handlePageChanged={this.props.handlePageChanged}
        />
      </ul>
    );
  }
}
