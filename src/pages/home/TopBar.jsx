import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';
import '../../styles/TopBar.css';

const TopBar = () => {
  const AppBarStyle = {
    background: '#d32f2f',
  };
  return (
    <AppBar
      style={AppBarStyle}
    >
      <Toolbar
        variant="dense"
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
      </Toolbar>
    </AppBar>
  )
}

export default TopBar;