import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import BookmarkList from './BookmarkList';


export default class Home extends Component {
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
    console.log(this.state);
    return (
      <div>
        <img src="static/img/one-dash-large.png" className={styles.MainLogo}/>
        <div className={`col-md-8 col-md-offset-2 card-1 card ${styles.HomeContainer}`}>
          <BookmarkList bookmarks={this.state.bookmarks} />
        </div>
      </div>
    );
  }
}
