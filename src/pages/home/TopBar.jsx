import { AppBar } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';
import '../../styles/TopBar.css';

const TopBar = () => {
  return (
    <AppBar
      style={{background: '#d32f2f'}}
    >
      <div className="text">
        <h2>
          <Link to="/">
            My Blog
          </Link>
        </h2>
        <h2>
          <Link to="/blog/first-post">
            Posts
          </Link>
        </h2>
      </div>
    </AppBar>
  )
}

export default TopBar;